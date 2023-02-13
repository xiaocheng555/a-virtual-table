<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="mList"
      :item-size="71"
      key-prop="id"
      @change="(virtualList) => tableData = virtualList">
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        row-key="id"
        height="500px"
        @sort-change="onSortChange">
        <el-table-column
          label="随机数"
          prop="count"
          width="300"
          sortable="count">
        </el-table-column>
        <el-table-column
          label="日期"
          width="150">
          <template v-slot="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </virtual-scroll>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll-next'
import { mockData } from '@/utils'

export default {
  name: 'RadioDemo',
  components: {
    VirtualScroll
  },
  data () {
    const list = mockData(0, 2000)
    return {
      list: list,
      mList: [...list],
      originList: [],
      tableData: []
    }
  },
  methods: {
    onSortChange ({prop, order }) {
      if (!order) {
        this.mList = [...this.originList]
        this.$refs.virtualScroll.update()
        return
      }

      this.mList.sort((a, b) => {
        if (order === 'ascending') {
          return a[prop] - b[prop]
        } else if (order === 'descending') {
          return b[prop] - a[prop]
        }
      })
      this.$refs.virtualScroll.update()
    }
  },
  created () {
    this.originList = [...this.mList]
  }
}
</script>

<style lang='less' scoped>

</style>
