<template>
  <div>
    <el-alert type="warning" show-icon>
      不支持使用 <i>:expandedRowKeys.sync="expandedRowKeys" 方式</i>
    </el-alert>
    <a-virtual-table
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :scroll="{ x: 1300, y: 600 }"
      :expanded-row-keys="expandedRowKeys"
      @expand="onTableExpand">
      <template slot="expandedRowRender" slot-scope="row">
        详细内容：{{ row.text }}
      </template>
    </a-virtual-table>
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
      expandedRowKeys: [1, 3, 5, 7],
      columns: [
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
          ellipsis: true
        }
      ],
      list: mockData(0, 2000)
    }
  },
  methods: {
    onTableExpand (expanded, record) {
      if (expanded) {
        this.expandedRowKeys.push(record.id)
      } else {
        this.expandedRowKeys = this.expandedRowKeys.filter(key => key !== record.id)
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
