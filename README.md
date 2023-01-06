# el-table-virtual-scroll

基于Ant-Design-Vue的 Table 组件开发的虚拟滚动组件，支持动态高度，解决数据量大时滚动卡顿的问题。

demo & 源码：https://xiaocheng555.github.io/a-virtual-table/

## 用法

``` vue
<template>
  <div>
    <a-virtual-table
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :pagination="false"
      :scroll="{ x: 1300, y: 800 }">
      <a slot="name" slot-scope="{text}">{{ text }}===</a>
    </a-virtual-table>
  </div>
</template>

<script>
import { mockData } from '@/utils'
import AVirtualTable from '../a-virtual-table'

export default {
  components: {
    AVirtualTable
  },
  data () {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
          fixed: 'left',
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
      list: mockData(0, 2000)
    }
  }
}
</script>
```
