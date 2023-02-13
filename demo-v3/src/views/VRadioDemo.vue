<template>
  <div>
    <virtual-scroll
      ref="virtualScroll"
      :data="list"
      :item-size="62"
      key-prop="id"
      @change="onVirtualChange"
      @current-change="onRadioChange">
      <el-table
        :data="tableData"
        height="500"
        row-key="id"
        tooltip-effect="dark"
        style="width: 100%">
        <virtual-column label="单选" width="160" type="radio"></virtual-column>
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
    <div style="margin-top: 20px">
      <el-button @click="setCheckedRow(list[1])">选中第二行</el-button>
      <el-button @click="setCheckedRow()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import VirtualScroll from 'el-table-virtual-scroll-next'
import { VirtualColumn } from 'el-table-virtual-scroll-next'
import { mockData } from '@/utils'

export default {
  components: {
    VirtualScroll,
    VirtualColumn
  },
  data () {
    return {
      list: mockData(0, 2000),
      tableData: [],
      checkedRow: null
    }
  },
  methods: {
    onVirtualChange (virtualList) {
      this.tableData = virtualList
    },
    setCheckedRow (row) {
      this.$refs.virtualScroll.setCurrentRow(row)
    },
    onRadioChange (row) {
      console.log(row, 'onRadioChange222')
    }
  }
}
</script>

<style lang='less' scoped>

</style>
