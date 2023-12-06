<template>
  <span>
    <span class="ant-table-row-indent" :style="{ paddingLeft: `${(row.$v_level - 1) * indentSize}px` }"></span>
    <slot name="loading" v-if="row.$v_loading">
      <a-icon type="loading" class="ant-table-row-expand-icon ant-table-row-loading-icon" key="loading" />
    </slot>
    <span
      v-else-if="check(row)"
      class="ant-table-row-expand-icon"
      :class="row.$v_expanded ? 'ant-table-row-expanded' : 'ant-table-row-collapsed'"
      @click="onTreeNodeExpand(row)">
    </span>
    <span v-else class="ant-table-row-expand-icon ant-table-row-spaced" key="spaced"></span>
    <slot></slot>
  </span>
</template>

<script>
import { Icon } from 'ant-design-vue'

export default {
  name: 'a-virtual-tree',
  components: {
    Icon
  },
  props: {
    // 树形缩进
    indentSize: {
      type: Number,
      default: 20
    },
    // 行数据
    row: {
      type: Object,
      required: true
    },
    // 加载子节点数据
    load: {
      type: Function,
      required: true
    },
    // 检测是否有子节点
    check: {
      type: Function,
      default: (row) => {
        return row.$v_hasChildren !== false
      }
    }
  },
  inject: ['virtualTable'],
  methods: {
    // 展开收起事件
    async onTreeNodeExpand (row, expanded = !this.row.$v_expanded, doLoad = true) {
      if (row.$v_expanded === expanded) return []

      if (expanded) {
        if (row.$v_loaded) {
          return this.loadOldChildNodes(row)
        } else if (doLoad) {
          return this.loadChildNodes(row)
        }
      } else {
        return this.hideChildNodes(row)
      }
    },
    // 加载子节点
    loadChildNodes (row) {
      return new Promise((resolve, reject) => {
        // 获取子节点数据并显示
        this.$set(row, '$v_loading', true)
        this.load && this.load(row, resolveFn.bind(this))

        function resolveFn (data) {
          if (!Array.isArray(data)) {
            this.$set(row, '$v_loading', false)
            resolve()
            return
          }

          this.$set(row, '$v_loading', false)
          this.$set(row, '$v_expanded', true)
          this.$set(row, '$v_loaded', true)
          this.$set(row, '$v_hasChildren', !!data.length)
          data.forEach(item => {
            item.$v_level = typeof row.$v_level === 'number' ? row.$v_level + 1 : 2
          })
          // 所有子节点插入到当前同级节点下
          const list = this.virtualTable.getData()
          const index = list.findIndex(item => item === row)
          if (index > -1) {
            this.virtualTable.updateData([
              ...list.slice(0, index + 1),
              ...data,
              ...list.slice(index + 1)
            ])
          }
          resolve(data)
        }
      })
    },
    // 加载已经加载的子节点
    loadOldChildNodes (row) {
      this.$set(row, '$v_expanded', true)
      const list = this.virtualTable.getData()
      const index = list.findIndex(item => item === row)
      if (index > -1) {
        this.virtualTable.updateData([
          ...list.slice(0, index + 1),
          ...(row.$v_hideNodes || []),
          ...list.slice(index + 1)
        ])
        return row.$v_hideNodes
      }
      return []
    },
    // 隐藏子节点
    hideChildNodes (row) {
      const list = this.virtualTable.getData()
      const index = list.findIndex(item => item === row)
      if (index === -1) return

      // 查找当前节点的所有子孙节点
      const hideNodes = []
      for (let i = index + 1; i < list.length; i++) {
        const curRow = list[i]
        if ((curRow.$v_level || 1) <= (row.$v_level || 1)) break
        hideNodes.push(curRow)
      }
      this.$set(row, '$v_hideNodes', hideNodes)
      this.$set(row, '$v_expanded', false)
      // 隐藏所有子孙节点
      const newList = list.filter(item => !hideNodes.includes(item))
      this.virtualTable.updateData(newList)
      this.virtualTable.update()
      return []
    },
    // 展开节点
    // expandKeys - 展开节点的keys值
    // expanded - 展开/收起
    // doLoad - 未加载子节点则执行load函数去加载，已加载则展开
    expand (expandKeys, expanded = true, doLoad = true) {
      if (!Array.isArray(expandKeys)) return

      const { getData, keyProp } = this.virtualTable
      const data = getData()
      const plist = []
      data.forEach((row) => {
        if (row[keyProp] && expandKeys.includes(row[keyProp])) {
          plist.push(this.onTreeNodeExpand(row, expanded, doLoad))
        }
      })
      return Promise.all(plist)
    },
    // 展开路径
    expandPath (keyPath) {
      if (!Array.isArray(keyPath)) return

      // 递归路径，逐层展开节点
      const expand = async (rows, n) => {
        if (n === keyPath.length) return keyPath[n - 1]
        if (!Array.isArray(rows) || !rows.length) return keyPath[n - 1]
        const targetRow = rows.find(row => row[keyProp] === keyPath[n])
        if (targetRow) {
          if (!targetRow.$v_expanded) {
            rows = await this.onTreeNodeExpand(targetRow, true)
          }
          return expand(rows, n + 1)
        } else {
          console.warn(`[expandPath] 没有找到 ${keyPath[n]} key值对应的行`)
          return keyPath[n - 1] // 返回上一个key值
        }
      }
      const { getData, keyProp } = this.virtualTable
      const data = getData()
      return expand(data, 0)
    },
    // 展开所有存在的节点
    expandAll () {
      // 展开节点（递归）
      const expandRows = (data) => {
        if (Array.isArray(data) && data.length) {
          data.forEach((row) => {
            this.onTreeNodeExpand(row, true, false)
            expandRows(row.$v_hideNodes)
          })
        }
      }

      const { getData } = this.virtualTable
      const data = getData()
      expandRows(data)
    },
    // 收起所有节点
    unexpandAll () {
      const { getData } = this.virtualTable
      const data = getData()
      const levelMap = []
      data.forEach(row => {
        const level = row.$v_level || 1
        !levelMap[level] && (levelMap[level] = [])
        levelMap[level].push(row)
      })
      for (let i = levelMap.length - 1; i >= 0; i--) {
        if (!levelMap[i]) continue
        levelMap[i].forEach(row => {
          this.onTreeNodeExpand(row, false)
        })
      }
    }
  }
}
</script>

<style lang='less'>
.ant-table-row-loading-icon {
  transition: none;
  border: none;
  background: transparent;
}
</style>
