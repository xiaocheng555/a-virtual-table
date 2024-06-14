<template>
  <div>
    <a-table
      v-bind="$attrs"
      v-on="$listeners"
      :pagination="false"
      :columns="tableColumns"
      :data-source="renderData">
      <template
        v-for="slot in Object.keys($scopedSlots)"
        :slot="slot"
        slot-scope="text, record, index, column">
        <slot :name="slot" v-bind="getSlotValue(text, record, index, column)"></slot>
      </template>
      <!-- 支持自定义头部 -->
      <template v-for="slot in Object.keys($slots)" :slot="slot">
        <slot :name="slot"></slot>
      </template>
    </a-table>
    <div class="ant-table-append" ref="append" v-show="!isHideAppend">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import Checkbox from 'ant-design-vue/lib/checkbox'
import Table from 'ant-design-vue/lib/table'

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

// 获取容器滚动位置
function getScrollLeft (el) {
  return el === window ? window.pageXOffset : el.scrollLeft
}

// 设置容器滚动位置
function setScrollTop (el, pos) {
  return el === window ? window.scroll(window.pageXOffset, pos) : (el.scrollTop = pos)
}

// 设置容器滚动位置
function setScrollLeft (el, pos) {
  return el === window ? window.scroll(pos, window.pageYOffset) : (el.scrollLeft = pos)
}

// 获取容器高度
function getOffsetHeight (el) {
  return el === window ? window.innerHeight : el.offsetHeight
}

// 滚动到某个位置
function scrollToY (el, y) {
  if (el === window) {
    window.scroll(0, y)
  } else {
    el.scrollTop = y
  }
}

// 判断dom是否有x轴滚动条
function hasScrollX (el) {
  return el.scrollWidth > el.clientWidth
}

// 表格body class名称
const TableBodyClassNames = ['.ant-table-scroll .ant-table-body', '.ant-table-fixed-left .ant-table-body-inner', '.ant-table-fixed-right .ant-table-body-inner']

let checkOrder = 0 // 多选：记录多选选项改变的顺序

export default {
  inheritAttrs: false,
  name: 'a-virtual-table',
  components: {
    ACheckbox: Checkbox,
    ATable: Table
  },
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
    },
    // 是否开启虚拟滚动
    virtualized: {
      type: Boolean,
      default: true
    },
    // 是否是树形结构
    isTree: {
      type: Boolean,
      default: false
    }
  },
  provide () {
    return {
      virtualTable: this
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
      isCheckedImn: false, // 控制半选样式
      isHideAppend: false
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
    getSlotValue (text, record, index, ...rest) {
      if (typeof text === 'object' && text.selectedKeys) {
        console.log('text', text)
        return text
      }
      return typeof record === 'number'
        ? {
          record: text,
          index: record,
          $index: this.start + record,
          ...rest
        }
        : {
          text,
          record,
          index,
          $index: this.start + index,
          ...rest
        }
    },
    // 初始化数据
    initData () {
      // 是否是表格内部滚动
      this.isInnerScroll = false
      // 滚动容器滚动位置【0-滚动容器top；1-滚动容器left；2-表格滚动容器top；3-表格滚动容器left】
      this.scrollPos = [0, 0, 0, 0]
      // 组件是否deactivated状态
      this.isDeactivated = false

      this.scroller = this.getScroller()
      this.setToTop()
      this.recordTablePos()

      // 首次需要执行2次handleScroll：因为第一次计算renderData时表格高度未确认导致计算不准确；第二次执行时，表格高度确认后，计算renderData是准确的
      this.handleScroll()
      this.$nextTick(() => {
        this.handleScroll()
      })
      // 监听事件
      this.onScroll = throttle(this.handleScroll, this.throttleTime)
      this.scroller.addEventListener('scroll', this.onScroll, { passive: true })
      window.addEventListener('resize', this.onScroll)
    },

    // 设置表格到滚动容器的距离
    setToTop () {
      if (this.isInnerScroll) {
        this.toTop = 0
      } else {
        this.toTop = this.$el.getBoundingClientRect().top - (this.scroller === window ? 0 : this.scroller.getBoundingClientRect().top) + getScrollTop(this.scroller)
      }
    },

    // 获取滚动元素
    getScroller () {
      let el
      if (this.scrollBox) {
        if (this.scrollBox === 'window' || this.scrollBox === window) return window

        el = document.querySelector(this.scrollBox)
        if (!el) throw new Error(` scrollBox prop: '${this.scrollBox}' is not a valid selector`)
        if (!isScroller(el)) console.warn(`Warning! scrollBox prop: '${this.scrollBox}' is not a scroll element`)
        return el
      }
      // 如果表格是固定高度，则获取表格内的滚动节点，否则获取父层滚动节点
      if (this.$attrs.scroll && this.$attrs.scroll.y) {
        this.isInnerScroll = true
        return this.$el.querySelector('.ant-table-body')
      } else {
        return getParentScroller(this.$el)
      }
    },

    // 处理滚动事件
    handleScroll () {
      // 如果组件失活，则不再执行handleScroll；否则外部容器滚动情况下记录的scrollTop会是0
      if (this.isDeactivated) return
      // 记录scrollPos
      this.scrollPos[0] = getScrollTop(this.scroller)
      this.scrollPos[1] = getScrollLeft(this.scroller)

      if (!this.virtualized) return

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

      let rows = []
      if (this.isTree) {
        // 处理树形表格，筛选出一级树形结构
        rows = this.$el.querySelectorAll('.ant-table-body .ant-table-row-level-0')
      } else {
        rows = this.$el.querySelectorAll('.ant-table-body .ant-table-tbody .ant-table-row')
      }

      Array.from(rows).forEach((row, index) => {
        const item = this.renderData[index]
        if (!item) return

        // 计算表格行的高度
        let offsetHeight = row.offsetHeight
        // 表格行如果有扩展行，需要加上扩展内容的高度
        const nextEl = row.nextSibling
        if (nextEl && nextEl.classList && nextEl.classList.contains('ant-table-expanded-row')) {
          offsetHeight += row.nextSibling.offsetHeight
        }

        // 表格行如果有子孙节点，需要加上子孙节点的高度
        if (this.isTree) {
          let next = row.nextSibling
          while (next && next !== rows[index + 1]) {
            offsetHeight += next?.offsetHeight || 0
            next = next.nextSibling
          }
        }

        const key = item[this.keyProp]
        if (this.sizes[key] !== offsetHeight) {
          this.$set(this.sizes, key, offsetHeight)
          row._offsetHeight = offsetHeight
        }
      })
    },

    // 计算只在视图上渲染的数据
    calcRenderData () {
      const { scroller, buffer, dataSource: data } = this
      // 计算可视范围顶部、底部
      const top = this.scrollPos[0] - buffer - this.toTop
      const scrollerHeight = this.isInnerScroll ? this.$attrs.scroll.y : getOffsetHeight(scroller)
      const bottom = this.scrollPos[0] + scrollerHeight + buffer - this.toTop

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
      const len = this.dataSource.length
      const last = len - 1
      // 计算内容总高度
      const wrapHeight = this.getItemOffsetTop(last) + this.getItemSize(last)
      // 计算当前滚动位置需要撑起的高度
      const offsetTop = this.getItemOffsetTop(this.start)

      // 设置dom位置
      TableBodyClassNames.forEach(className => {
        const el = this.$el.querySelector(className)
        if (!el) return

        // 创建wrapEl、innerEl
        if (!el.wrapEl) {
          const wrapEl = document.createElement('div')
          const innerEl = document.createElement('div')
          wrapEl.appendChild(innerEl)
          innerEl.appendChild(el.children[0])
          el.insertBefore(wrapEl, el.firstChild)
          el.wrapEl = wrapEl
          el.innerEl = innerEl
        }

        if (el.wrapEl) {
          // 此处设置display为'inline-block'，是让div宽度等于表格的宽度，修复x轴滚动时右边固定列没有阴影的bug
          // 当没有数据时，需要将display设置为'block'，否则会撑开了inline-block的高度
          el.wrapEl.style.display = len === 0 ? 'block' : 'inline-block'
          el.innerEl.style.display = len === 0 ? 'block' : 'inline-block'

          // fix: 在列少情况下 网格列对不齐 #4
          // 没有x轴滚动条时，wrapEl、innerEl容器需要100%，否则会因为inline-block布局导致所有列不会盛满而网格列对不齐
          if (this.isInnerScroll && !hasScrollX(this.scroller)) {
            el.wrapEl.style.width = '100%'
            el.innerEl.style.width = '100%'
          }

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
      this.setToTop()
      this.handleScroll()
    },

    // 【外部调用】滚动到第几行
    // （不太精确：滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致内容坍塌或撑起）
    scrollTo (index, offsetY = 0, stop = false) {
      const item = this.dataSource[index]
      if (item && this.scroller) {
        this.updateSizes()
        this.calcRenderData()

        this.$nextTick(() => {
          const offsetTop = this.getItemOffsetTop(index) - offsetY
          scrollToY(this.scroller, offsetTop)

          // 调用两次scrollTo，第一次滚动时，如果表格行初次渲染高度发生变化时，会导致滚动位置有偏差，此时需要第二次执行滚动，确保滚动位置无误
          if (!stop) {
            setTimeout(() => {
              this.scrollTo(index, offsetY, true)
            }, 50)
          }
        })
      }
    },

    // 渲染全部数据
    renderAllData () {
      this.renderData = this.dataSource
      this.$emit('change', this.dataSource, 0, this.dataSource.length - 1)

      this.$nextTick(() => {
        // 清除撑起的高度和位置
        TableBodyClassNames.forEach(className => {
          const el = this.$el.querySelector(className)
          if (!el) return

          if (el.wrapEl) {
            // 设置高度
            el.wrapEl.style.height = 'auto'
            // 设置transform撑起高度
            el.innerEl.style.transform = `translateY(${0}px)`
          }
        })
      })
    },

    // 执行update方法更新虚拟滚动，且每次nextTick只能执行一次【在数据大于100条开启虚拟滚动时，由于监听了data、virtualized会连续触发两次update方法：第一次update时，（updateSize）计算尺寸里的渲染数据（renderData）与表格行的dom是一一对应，之后会改变渲染数据（renderData）的值；而第二次执行update时，renderData改变了，而表格行dom未改变，导致renderData与dom不一一对应，从而位置计算错误，最终渲染的数据对应不上。因此使用每次nextTick只能执行一次来避免bug发生】
    doUpdate () {
      if (this.hasDoUpdate) return // nextTick内已经执行过一次就不执行
      if (!this.scroller) return // scroller不存在说明未初始化完成，不执行

      // 启动虚拟滚动的瞬间，需要暂时隐藏el-table__append-wrapper里的内容，不然会导致滚动位置一直到append的内容处
      this.isHideAppend = true
      this.update()
      this.hasDoUpdate = true
      this.$nextTick(() => {
        this.hasDoUpdate = false
        this.isHideAppend = false
      })
    },

    // 兼容多选：选择表格所有行
    onCheckAllRows (val) {
      val = this.isCheckedImn ? true : val
      this.dataSource.forEach(row => {
        if (row.$v_checked === val) return

        this.$set(row, '$v_checked', val)
        this.$set(row, '$v_checkedOrder', val ? checkOrder++ : undefined)
      })
      this.isCheckedAll = val
      this.isCheckedImn = false
      this.emitSelectionChange()
      // 取消全选，则重置checkOrder
      if (val === false) checkOrder = 0
    },

    // 兼容多选：选择表格某行
    onCheckRow (row, val) {
      if (row.$v_checked === val) return

      this.$set(row, '$v_checked', val)
      this.$set(row, '$v_checkedOrder', val ? checkOrder++ : undefined)

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
    },

    // 多选：兼容表格selection-change事件
    emitSelectionChange () {
      const selection = this.dataSource.filter(row => row.$v_checked).sort((a, b) => a.$v_checkedOrder - b.$v_checkedOrder)
      this.$emit('selection-change', selection)
    },

    // 多选：兼容表格toggleRowSelection方法
    toggleRowSelection (row, selected) {
      const val = typeof selected === 'boolean' ? selected : !row.$v_checked
      this.onCheckRow(row, val)
    },

    // 多选：兼容表格clearSelection方法
    clearSelection () {
      this.isCheckedImn = false
      this.onCheckAllRows(false)
    },

    // 记录表格x、y轴滚动位置
    recordTablePos () {
      if (!this.isInnerScroll) return

      this.tableBodyEl = this.$el.querySelector('.ant-table-body')
      this.onTableScroll = throttle(() => {
        this.scrollPos[2] = getScrollTop(this.tableBodyEl)
        this.scrollPos[3] = getScrollLeft(this.tableBodyEl)
      }, 100)
      this.tableBodyEl.addEventListener('scroll', this.onTableScroll, { passive: true })
    },

    // 恢复y轴滚动位置（仅支持表格内部滚动）
    restoreScrollY () {
      if (!this.scroller) return

      // 恢复滚动容器滚动位置
      const [top, left, top2, left2] = this.scrollPos
      setScrollTop(this.scroller, top)
      setScrollLeft(this.scroller, left)

      // 如果是内部滚动且固定列，则固定列也需要恢复y轴滚动位置
      if (this.isInnerScroll) {
        const leftScroller = document.querySelector(TableBodyClassNames[1])
        const rightScroller = document.querySelector(TableBodyClassNames[2])
        if (leftScroller) setScrollTop(leftScroller, top)
        if (rightScroller) setScrollTop(rightScroller, top)
      } else {
        // 恢复表格内滚动位置
        setScrollTop(this.tableBodyEl, top2)
        setScrollLeft(this.tableBodyEl, left2)
      }
    },
    // 【VirtualTree调用】更新数据
    updateData (data = []) {
      // 先存在list，通过$emit update更新data不是立即执行的（那么拿到的data就是最新），所以先存到list里，拿的就是最新数据
      this.list = data
      this.$emit('update:dataSource', this.list)
    },

    // 【VirtualTree调用】获取列表全部数据】
    getData () {
      return this.list || this.dataSource
    }
  },
  watch: {
    dataSource (data, oldData) {
      if (!this.virtualized) {
        this.renderAllData()
      } else {
        this.doUpdate()
      }
      // 设置list
      if (this.list && data !== oldData) {
        this.list = data
      }
    },
    virtualized: {
      immediate: true,
      handler (val) {
        if (!val) {
          this.renderAllData()
        } else {
          this.doUpdate()
        }
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.initData()
    })
  },
  mounted () {
    const appendEl = this.$refs.append
    this.$el.querySelector('.ant-table-body').appendChild(appendEl)
  },
  beforeDestroy () {
    if (this.scroller) {
      this.scroller.removeEventListener('scroll', this.onScroll)
      window.removeEventListener('resize', this.onScroll)
    }
    if (this.tableBodyEl) {
      this.tableBodyEl.removeEventListener('scroll', this.onTableScroll)
    }
  },
  activated () {
    this.isDeactivated = false
    this.restoreScrollY()
  },
  deactivated () {
    this.isDeactivated = true
  }
}
</script>

<style lang='less'>
</style>
