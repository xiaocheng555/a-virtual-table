<template>
  <div>
    <div>
      <el-button @click="expand1">展开第一层</el-button>
      <el-button @click="expand2">展开第二层</el-button>
      <el-button @click="expandAll">展开全部</el-button>
      <el-button @click="unexpandAll">收起全部</el-button>
      <el-button @click="unexpandTarget">展开目标路径</el-button>
    </div>
    <a-virtual-table
      ref="virtualTable"
      isTree
      :columns="columns"
      :data-source.sync="treeData"
      :itemSize="54"
      row-key="id"
      keyProp="id"
      childrenColumnName=''
      :rowClassName="getRowClassName"
      :scroll="{ x: 1300, y: 600 }">
      <template slot="tree" slot-scope="{record}">
        <a-virtual-tree ref="virtualTree" :row="record" :load="onload">
          {{ record.id }}
        </a-virtual-tree>
      </template>
      <template slot="desc" slot-scope="{ record }">
        <div v-if="record['describe']" style="line-height: 1.2em">
          <div>
            {{ record["product"] }}
          </div>
          <div style="color: grey; font-size: 12px">
            {{ record["describe"] }}
          </div>
        </div>
        <div v-else style="white-space: nowrap">
          {{ record["product"] }}
        </div>
      </template>
    </a-virtual-table>
  </div>
</template>

<script>
import AVirtualTable, { AVirtualTree } from 'a-virtual-table'
import cloneDeep from 'lodash/cloneDeep'
import datamap from '../datamap.json'

export default {
  components: {
    AVirtualTable,
    AVirtualTree
  },
  data () {
    return {
      columns: [
        {
          scopedSlots: { customRender: 'tree' },
          width: 200
        },
        {
          scopedSlots: { customRender: 'desc' },
          width: 200
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 100
        },
        {
          title: '随机名',
          dataIndex: 'database',
          key: 'database',
          width: 100
        },
        {
          title: '排序',
          dataIndex: 'rank',
          key: 'rank',
          width: 40
        },
        {
          title: '数据',
          dataIndex: 'status',
          key: 'status',
          width: 60
        }
      ],
      treeData: [],
      highlightKey: ''
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    getRowClassName (row) {
      return this.highlightKey === row.id ? 'highlight-row' : ''
    },
    initData () {
      this.dataMap = datamap
      this.treeData = [
        {
          id: "49__@@__1",
          product: "产品线",
          productId: 49,
          parent: null,
          isRoot: true,
          $v_level: 1
        },
        {
          id: "-1__@@__4690",
          product: "未归类头部表",
          productId: -1,
          parent: null,
          isRoot: true,
          $v_level: 1
        }
      ]
    },
    onload (row, resolve) {
      setTimeout(() => {
        resolve(cloneDeep(this.dataMap[row.id] || []))
      }, 200)
    },
    expand (level) {
      const expandKeys = this.treeData.filter(item => item.$v_level === level).map(item => item.id)
      return this.$refs.virtualTree.expand(expandKeys).then(() => {
        console.log(`展开第${level}层完成`)
      })
    },
    async expand1 () {
      this.$refs.virtualTree.unexpandAll()
      await this.expand(1)
    },
    async expand2 () {
      this.$refs.virtualTree.unexpandAll()
      await this.expand(1)
      await this.expand(2)
    },
    unexpandAll () {
      this.$refs.virtualTree.unexpandAll()
    },
    expandAll () {
      this.$refs.virtualTree.expandAll()
    },
    async unexpandTarget () {
      const pathKeys = ['49__@@__1', '120__@@__4200', '114__@@__4201', '2902__@@__4324']
      const key = await this.$refs.virtualTree.expandPath(pathKeys)
      key && this.scrollTo(key)
    },
    scrollTo (key) {
      if (key) {
        const index = this.treeData.findIndex((item) => item['id'] === key)
        this.$refs.virtualTable.scrollTo(index, 50)
        const speed = 300
        // 闪烁效果
        setTimeout(() => {
          this.highlightKey = key
        })
        setTimeout(() => {
          this.highlightKey = null
        }, speed)
        setTimeout(() => {
          this.highlightKey = key
        }, speed * 2)
        setTimeout(() => {
          this.highlightKey = null
        }, speed * 3)
      }
    }
  }
}
</script>

<style lang='less'>
.highlight-row {
  background-color: #e6f4ff;
}
</style>
