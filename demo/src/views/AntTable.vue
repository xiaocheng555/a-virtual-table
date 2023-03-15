<template>
  <div>
    <h2>红色边框的是滚动容器</h2>
    <p>一些内容</p>
    <p>一些内容</p>
    <a-table
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :pagination="false"
      :scroll="{ x: 1300 }"
      :row-selection="{selectedRowKeys: selectedRowKeys }">
      <a slot="name" slot-scope="record">{{ record.name }}===</a>
    </a-table>
  </div>
</template>

<script>
// import { mockData } from '@/utils'

export default {
  components: {
  },
  data () {
    return {
      selectedRowKeys: [],
      columns: [
        {
          title: 'Name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
          // fixed: 'left',
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
          width: 300,
          fixed: 'right',
        }
      ],
      list: []// mockData(0, 50)
    }
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>

</style>
