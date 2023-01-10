<template>
  <div>
    <a-virtual-table
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :scroll="{ x: 1300, y: 600 }">
      <a slot="name" slot-scope="{text}">{{ text }}===</a>
    </a-virtual-table>
  </div>
</template>

<script>
import { mockData } from '@/utils'
import AVirtualTable from 'a-virtual-table'

export default {
  components: {
    AVirtualTable
  },
  data () {
    return {
      columns: [
        {
          title: '索引',
          index: true,
          width: 150
        },
        {
          title: '自定义索引',
          index: (index) => index * 2,
          width: 150
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
          width: 150,
          fixed: 'right',
        }
      ],
      list: mockData(0, 2000)
    }
  }
}
</script>

<style lang='less' scoped>

</style>
