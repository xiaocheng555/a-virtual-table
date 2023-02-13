<template>
  <div>
    <p
      :style="{height: largeHeight ? '600px' : '200px', background: 'pink'}"
      @click="onHeightChange">
      点击改变高度
    </p>
    <a-virtual-table
      bordered
      ref="virtualTable"
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :scroll="{ x: 1300 }">
      <a slot="name" slot-scope="{text}">{{ text }}===</a>
    </a-virtual-table>
  </div>
</template>

<script>
import { mockData } from '@/utils'
import AVirtualTable from 'a-virtual-table'

export default {
  name: 'KeepAliveDemo',
  components: {
    AVirtualTable
  },
  data () {
    return {
      largeHeight: false,
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
          width: 200
        },
        {
          title: '多表头',
          children: [
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
            }
          ]
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id2',
          width: 100
        },
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text2',
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
    onHeightChange () {
      this.largeHeight = !this.largeHeight
      // 当滚动容器顶部内容高度变化很大时，需要更新虚拟滚动组件，避免出现表格出现一段空白内容
      this.$nextTick(() => {
        this.$refs.virtualTable.update()
      })
    }
  }
}
</script>

<style lang='less'>
body, html {
  height: 100%;
  overflow: auto;
}
</style>
