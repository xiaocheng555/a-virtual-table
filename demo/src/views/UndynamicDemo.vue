<template>
  <div>
    <a-virtual-table
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      :dynamic="false"
      keyProp="id"
      row-key="id"
      :pagination="false"
      :scroll="{ x: 1300, y: 600 }">
      <a slot="name" slot-scope="{text}">{{ text }}===</a>
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
      selectedRowKeys: [],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
          width: 200
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
          ellipsis: true,
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
          fixed: 'right'
        }
      ],
      list: mockData(0, 2000)
    }
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>

</style>
