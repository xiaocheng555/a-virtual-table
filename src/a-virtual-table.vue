<template>
  <a-table
    v-bind="$attrs"
    v-on="$listeners"
    :pagination="false"
    :columns="tableColumns"
    :data-source="renderData">
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="text">
      <slot :name="slot" v-bind="typeof text === 'object' ? text : {text}"></slot>
    </template>
  </a-table>
</template>

<script>
import throttle from 'lodash/throttle'

// 判断是否是滚动容器
function isScroller (el) {
  const style = window.getComputedStyle(el, null)
  const scrollValues = ['auto', 'scroll']
  return scrollValues.includes(style.overflow) || scrollValues.includes(style['overflow-y'])
}

// 获取父层滚动容器
function getParentScroller (el) {
  let parent = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroller(parent)) {
      return parent
    }
    parent = parent.parentNode
  }

  return parent || window
}

// 获取容器滚动位置
function getScrollTop (el) {
  return el === window ? window.pageYOffset : el.scrollTop
}

// 获取容器高度
function getOffsetHeight (el) {
  return el === window ? window.innerHeight : el.offsetHeight
}

export default {
  inheritAttrs: false,
  name: 'a-virtual-table',
  props: {
    dataSource: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    // key值，data数据中的唯一id
    keyProp: {
      type: String,
      default: 'id'
    },
    // 每一行的预估高度
    itemSize: {
      type: Number,
      default: 60
    },
    // 指定滚动容器
    scrollBox: {
      type: String
    },
    // 顶部和底部缓冲区域，值越大显示表格的行数越多
    buffer: {
      type: Number,
      default: 100
    },
    // 滚动事件的节流时间
    throttleTime: {
      type: Number,
      default: 10
    },
    // 是否获取表格行动态高度
    dynamic: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      start: 0,
      end: undefined,
      sizes: {}, // 尺寸映射（依赖响应式）
      renderData: [],
      // 兼容多选
      isCheckedAll: false, // 全选
      isCheckedImn: false // 控制半选样式
    }
  },
  computed: {
    tableColumns () {
      return this.columns.map(column => {
        // 兼容多选
        if (column.type === 'selection') {
          return {
            title: () => {
              return (
                <a-checkbox
                  checked={this.isCheckedAll}
                  indeterminate={this.isCheckedImn}
                  onchange={() => this.onCheckAllRows(!this.isCheckedAll)}>
                </a-checkbox>
              )
            },
            customRender: (text, row) => {
              return (
                <a-checkbox
                  checked={row.$v_checked}
                  onchange={() => this.onCheckRow(row, !row.$v_checked)}>
                </a-checkbox>
              )
            },
            width: 60,
            ...column
          }
        } else if (column.index) {
          // 兼容索引
          return {
            customRender: (text, row, index) => {
              const curIndex = this.start + index
              return typeof column.index === 'function' ? column.index(curIndex) : curIndex + 1
            },
            ...column
          }
        }
        return column
      })
    },
    // 计算出每个item（的key值）到滚动容器顶部的距离
    offsetMap ({ keyProp, itemSize, sizes, dataSource }) {
      if (!this.dynamic) return {}

      const res = {}
      let total = 0
      for (let i = 0; i < dataSource.length; i++) {
        const key = dataSource[i][keyProp]
        res[key] = total

        const curSize = sizes[key]
        const size = typeof curSize === 'number' ? curSize : itemSize
        total += size
      }
      return res
    }
  },
  methods: {
    // 初始化数据
    initData () {
      this.scroller = this.getScroller()
      this.toTop = this.$el.getBoundingClientRect().top - this.scroller.getBoundingClientRect().top

      // 首次需要执行2次handleScroll：因为第一次计算renderData时表格高度未确认导致计算不准确；第二次执行时，表格高度确认后，计算renderData是准确的
      this.handleScroll()
      this.$nextTick(() => {
        this.handleScroll()
      })
      // 监听事件
      this.onScroll = throttle(this.handleScroll, this.throttleTime)
      this.scroller.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.onScroll)
    },

    // 获取滚动元素
    getScroller () {
      let el
      if (this.scrollBox) {
        el = document.querySelector(this.scrollBox)
        if (!el) throw new Error(` scrollBox prop: '${this.scrollBox}' is not a valid selector`)
        if (!isScroller(el)) console.warn(`Warning! scrollBox prop: '${this.scrollBox}' is not a scroll element`)
        return el
      }
      // 如果表格是固定高度，则获取表格内的滚动节点，否则获取父层滚动节点
      if (this.$attrs.scroll && this.$attrs.scroll.y) {
        return this.$el.querySelector('.ant-table-body')
      } else {
        return getParentScroller(this.$el)
      }
    },

    // 处理滚动事件
    handleScroll () {
      // 更新当前尺寸（高度）
      this.updateSizes()
      // 计算renderData
      this.calcRenderData()
      // 计算位置
      this.calcPosition()
    },

    // 更新尺寸（高度）
    updateSizes () {
      if (!this.dynamic) return

      const rows = this.$el.querySelectorAll('.ant-table-body .ant-table-tbody .ant-table-row')
      Array.from(rows).forEach((row, index) => {
        const item = this.renderData[index]
        if (!item) return

        // 计算表格行的高度
        let offsetHeight = row.offsetHeight
        const key = item[this.keyProp]
        if (this.sizes[key] !== offsetHeight) {
          this.$set(this.sizes, key, offsetHeight)
        }
      })
    },

    // 计算只在视图上渲染的数据
    calcRenderData () {
      const { scroller, buffer, dataSource: data } = this
      // 计算可视范围顶部、底部
      const top = getScrollTop(scroller) - buffer - this.toTop
      const bottom = getScrollTop(scroller) + getOffsetHeight(scroller) + buffer - this.toTop

      let start
      let end
      if (!this.dynamic) {
        start = top <= 0 ? 0 : Math.floor(top / this.itemSize)
        end = bottom <= 0 ? 0 : Math.ceil(bottom / this.itemSize)
      } else {
        // 二分法计算可视范围内的开始的第一个内容
        let l = 0
        let r = data.length - 1
        let mid = 0
        while (l <= r) {
          mid = Math.floor((l + r) / 2)
          const midVal = this.getItemOffsetTop(mid)
          if (midVal < top) {
            const midNextVal = this.getItemOffsetTop(mid + 1)
            if (midNextVal > top) break
            l = mid + 1
          } else {
            r = mid - 1
          }
        }

        // 计算渲染内容的开始、结束索引
        start = mid
        end = data.length - 1
        for (let i = start + 1; i < data.length; i++) {
          const offsetTop = this.getItemOffsetTop(i)
          if (offsetTop >= bottom) {
            end = i
            break
          }
        }
      }

      // 开始索引始终保持偶数，如果为奇数，则加1使其保持偶数【确保表格行的偶数数一致，不会导致斑马纹乱序显示】
      if (start % 2) {
        start = start - 1
      }
      this.top = top
      this.bottom = bottom
      this.start = start
      this.end = end
      this.renderData = data.slice(start, end + 1)
      this.$emit('change', this.renderData, this.start, this.end)
    },

    // 计算位置
    calcPosition () {
      const last = this.dataSource.length - 1
      // 计算内容总高度
      const wrapHeight = this.getItemOffsetTop(last) + this.getItemSize(last)
      // 计算当前滚动位置需要撑起的高度
      const offsetTop = this.getItemOffsetTop(this.start)

      // 设置dom位置
      const classNames = ['.ant-table-scroll .ant-table-body', '.ant-table-fixed-left .ant-table-body-inner', '.ant-table-fixed-right .ant-table-body-inner']
      // const classNames = []
      classNames.forEach(className => {
        const el = this.$el.querySelector(className)
        if (!el) return

        // 创建wrapEl、innerEl
        if (!el.wrapEl) {
          const wrapEl = document.createElement('div')
          const innerEl = document.createElement('div')
          // 此处设置display为'inline-block'，是让div宽度等于表格的宽度，修复x轴滚动时右边固定列没有阴影的bug
          wrapEl.style.display = 'inline-block'
          innerEl.style.display = 'inline-block'
          wrapEl.appendChild(innerEl)
          innerEl.appendChild(el.children[0])
          el.insertBefore(wrapEl, el.firstChild)
          el.wrapEl = wrapEl
          el.innerEl = innerEl
        }

        if (el.wrapEl) {
          // 设置高度
          el.wrapEl.style.height = wrapHeight + 'px'
          // 设置transform撑起高度
          el.innerEl.style.transform = `translateY(${offsetTop}px)`
          // 设置paddingTop撑起高度
          // el.innerEl.style.paddingTop = `${offsetTop}px`
        }
      })
    },

    // 获取某条数据offsetTop
    getItemOffsetTop (index) {
      if (!this.dynamic) {
        return this.itemSize * index
      }

      const item = this.dataSource[index]
      if (item) {
        return this.offsetMap[item[this.keyProp]] || 0
      }
      return 0
    },

    // 获取某条数据的尺寸
    getItemSize (index) {
      if (index <= -1) return 0
      const item = this.dataSource[index]
      if (item) {
        const key = item[this.keyProp]
        return this.sizes[key] || this.itemSize
      }
      return this.itemSize
    },

    // 【外部调用】更新
    update () {
      // console.log('update')
      this.toTop = this.$el.getBoundingClientRect().top - this.scroller.getBoundingClientRect().top
      this.handleScroll()
    },

    // 多选：兼容表格clearSelection方法
    clearSelection () {
      this.dataSource.forEach(row => this.$set(row, '$v_checked', false))
      this.isCheckedAll = false
      this.isCheckedImn = false
      this.emitSelectionChange()
    },

    // 多选：兼容表格toggleRowSelection方法
    toggleRowSelection (row, selected) {
      const val = typeof selected === 'boolean' ? selected : !row.$v_checked
      this.onCheckRow(row, val)
    },

    // 多选：兼容表格selection-change事件
    emitSelectionChange () {
      const selection = this.dataSource.filter(row => row.$v_checked)
      this.$emit('selection-change', selection)
    },

    // 兼容多选：选择表格所有行
    onCheckAllRows (val) {
      val = this.isCheckedImn ? true : val
      this.dataSource.forEach(row => this.$set(row, '$v_checked', val))
      this.isCheckedAll = val
      this.isCheckedImn = false
      this.emitSelectionChange()
    },

    // 兼容多选：选择表格某行
    onCheckRow (row, value) {
      this.$set(row, '$v_checked', value)
      const checkedLen = this.dataSource.filter(row => row.$v_checked === true).length
      if (checkedLen === 0) {
        this.isCheckedAll = false
        this.isCheckedImn = false
      } else if (checkedLen === this.dataSource.length) {
        this.isCheckedAll = true
        this.isCheckedImn = false
      } else {
        this.isCheckedAll = false
        this.isCheckedImn = true
      }
      this.emitSelectionChange()
    }
  },
  created () {
    this.$nextTick(() => {
      this.initData()
    })
  },
  beforeDestroy () {
    if (this.scroller) {
      this.scroller.removeEventListener('scroll', this.onScroll)
      window.removeEventListener('resize', this.onScroll)
    }
  }
}
</script>

<style lang='less'>
</style>