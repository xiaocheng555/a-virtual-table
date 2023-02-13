<template>
  <div>
    <a-virtual-table
      ref="virtualTable"
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :scroll="{ x: 1300, y: 600 }"
      @selection-change="handleSelectionChange">
    </a-virtual-table>
    <div style="margin-top: 20px">
      <a-button @click="toggleSelection([list[1], list[2]])">切换第二、第三行的选中状态</a-button>
      <a-button @click="toggleSelection()">取消选择</a-button>
    </div>
  </div>
</template>

<script>
import { mockData } from '@/utils'
import AVirtualTable from '../../../src/a-virtual-table'

export default {
  components: {
    AVirtualTable
  },
  data () {
    return {
      columns: [
        {
          type: 'selection'
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 100
        },
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text',
          width: 400
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address 1',
          ellipsis: true,
          width: 400
        },
        {
          title: 'Long Column Long Column Long Column',
          dataIndex: 'address',
          key: 'address 2',
          ellipsis: true,
          width: 300
        },
        {
          title: 'Long Column Long Column',
          dataIndex: 'address',
          key: 'address 3',
          ellipsis: true,
          width: 300
        },
        {
          title: 'Long Column',
          dataIndex: 'address',
          key: 'address 4',
          ellipsis: true,
          width: 300
          // fixed: 'right',
        }
      ],
      list: mockData(0, 2000),
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.virtualTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.virtualTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      console.log('multipleSelection', val)
      this.multipleSelection = val
    }
  }
}
</script>

<style lang='less' scoped>

</style>
