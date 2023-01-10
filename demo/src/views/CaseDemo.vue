<template>
  <div>
    <div>
      <el-input style="width: 300px;" type="number" placeholder="滚动到第几行" v-model="jumpIndex">
        <el-button slot="append" @click="scrollToRow(jumpIndex)">滚动{{jumpIndex}}</el-button>
      </el-input>
      &nbsp;
      数据总数量：<el-input style="width: 200px;" type="number" placeholder="数据条数" v-model="count"></el-input>
    </div>
    <a-virtual-table
      ref="aVirtualTable"
      :loading="loading"
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
      count: 2000,
      jumpIndex: 200,
      loading: false,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
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
          width: 150,
          fixed: 'right'
        }
      ],
      list: []
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      setTimeout(() => {
        this.list = mockData(0, this.count)
        this.loading = false
      }, 1000)
    },
    scrollToRow (index) {
      this.$refs.aVirtualTable.scrollTo(index)
    }
  },
  watch: {
    count () {
      this.fetchData()
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang='less' scoped>

</style>
