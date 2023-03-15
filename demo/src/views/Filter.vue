<template>
  <div>
    <el-alert type="warning" style="margin-bottom: 10px;">
        过滤、搜索组件使用 a-table-header-search、a-table-header-filter 组件，
        <a href="https://github.com/xiaocheng555/a-virtual-table/tree/master/demo/src/views/components" target="_blank">详细请查看这里</a>
    </el-alert>
    <a-virtual-table
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :scroll="{ x: 1300, y: 600 }">
      <a-table-header-search
        slot="filterId"
        slot-scope="{ confirm, column }"
        @filter="(filter) => onSearch(filter, column, confirm)">
      </a-table-header-search>
      <a-table-header-search
        slot="filterCount"
        slot-scope="{ confirm, column }"
        @filter="(filter) => onSearch(filter, column, confirm)">
      </a-table-header-search>
      <a-table-header-filter
        slot="filterText1"
        slot-scope="{ confirm, column }"
        :filters="textFilters"
        @filter="(filter) => onSearch(filter, column, confirm)"></a-table-header-filter>
      <a-table-header-filter
        slot="filterText2"
        slot-scope="{ confirm, column }"
        :filters="textFilters"
        :multiple="false"
        @filter="(filter) => onSearch(filter, column, confirm)"></a-table-header-filter>
      <a slot="name" slot-scope="{text}">{{ text }}===</a>
    </a-virtual-table>
  </div>
</template>

<script>
import { mockData } from '@/utils'
import AVirtualTable from 'a-virtual-table'
import ATableHeaderSearch from './components/a-table-header-search'
import ATableHeaderFilter from './components/a-table-header-filter'

export default {
  components: {
    AVirtualTable,
    ATableHeaderSearch,
    ATableHeaderFilter
  },
  data () {
    return {
      textFilters: [
        {
          text: '十年',
          value: '十年',
        },
        {
          text: '桃花',
          value: '桃花',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: '测试数据',
              value: '测试数据',
            },
            {
              text: '明月',
              value: '明月',
            },
          ],
        },
      ],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: {
            customRender: 'name'
          },
          // fixed: 'left',
          width: 200
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 200,
          scopedSlots: {
            filterDropdown: 'filterId'
          }
        },
        {
          title: 'count',
          dataIndex: 'count',
          key: 'count',
          ellipsis: true,
          width: 200,
          scopedSlots: {
            filterDropdown: 'filterCount'
          }
        },
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text',
          width: 400,
          scopedSlots: {
            filterDropdown: 'filterText1'
          }
        },
        {
          title: 'text2',
          dataIndex: 'text2',
          key: 'text2',
          width: 400,
          scopedSlots: {
            filterDropdown: 'filterText2'
          }
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
          fixed: 'right'
        }
      ],
      list: mockData(0, 2000),
      originList: [],
      serachParams: {
        id: '',
        count: '',
        text: [],
        text2: []
      }
    }
  },
  methods: {
    onSearch (filter, column, confirm) {
      Object.assign(this.serachParams, {
        [column.dataIndex]: filter
      })
      const { id, count, text, text2 } = this.serachParams
      this.list = this.originList.filter(item => {
        return item.id.toString().toLowerCase().includes(id.toLowerCase()) &&
          item.count.toString().toLowerCase().includes(count.toLowerCase()) &&
          (text2.length === 0 || text2.some(text => item.text2.toLowerCase().includes(text.toLowerCase()))) &&
          (text.length === 0 || text.some(text => item.text.toLowerCase().includes(text.toLowerCase())))
      })
      confirm() // 关闭弹窗
    }
  },
  created () {
    this.originList = this.list
  }
}
</script>

<style lang='less' scoped>

</style>
