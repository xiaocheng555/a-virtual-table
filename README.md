# a-virtual-table

基于Ant-Design-Vue的 Table 组件开发的虚拟滚动组件，支持动态高度，解决数据量大时滚动卡顿的问题。

⚠️仅支持vue2、Ant-Design-Vue@1。


demo & 源码：https://xiaocheng555.github.io/a-virtual-table/

## 安装

``` bash
# for npm:
$ npm i a-virtual-table -S
# for yarn:
$ yarn add a-virtual-table -S
```

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

## a-virtual-table 组件

### Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| dataSource    | 总数据 | Array | 必填 |  |
| keyProp | key值，data数据中的唯一id【⚠️若keyProp未设置或keyProp值不唯一，可能导致表格空数据或者滚动时渲染的数据断层、不连贯】 | string | — | id |
| itemSize | 每一行的预估高度 | number | — | 60 |
| scrollBox | 指定滚动容器；在指定滚动容器时，如果表格设置了height高度，则滚动容器为表格内的滚动容器；如果表格为设置height高度，则自动获取父层以外的滚动容器，直至window容器为止 | string | 'window'、css选择器 | - |
| buffer | 顶部和底部缓冲区域，值越大显示表格的行数越多 | Number | — | 200 |
| throttleTime | 滚动事件的节流时间 | number | — | 10 |
| dynamic | 动态获取表格行高度，默认开启。设置为false时，则以itemSize为表格行的真实高度，能大大减少虚拟滚动计算量，减少滚动白屏；如果itemSize与表格行的真实高度不一致，可能导致滚动时表格数据错乱 | boolean | — | true |
| virtualized | 是否开启虚拟滚动 | boolean | — | true |
| * | 支持 `<a-table>` 组件的props属性，更多请看 [`<a-table> api`](https://1x.antdv.com/components/table-cn/#API) | - | — | - |


### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| scrollTo | 滚动到第几行【不太精确：因为滚动到第n行时，如果周围的表格行计算出真实高度后会更新高度，导致当前行坍塌或撑起】 | index |
| update | 更新 | - |
| clearSelection | 用于多选 `<virtual-column type="selection">`，清空用户的选择 | - |
| toggleRowSelection | 用于多选 `<virtual-column type="selection">`, 切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |


### Events
| 事件名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| change | 计算完成真实显示的表格行数 | (renderData, start, end)：renderData 真实渲染的数据，start和end指的是渲染的数据在总数据的开始到结束的区间范围 |
| selection-change | 虚拟表格多选选项发生更改时触发事件 | selectedRows |


## a-virtual-table 组件注意事项

* 使用组件前，请确保项目中有引入 `ant-design-vue` 组件库。

* 确保keyProp传入值是唯一值，使用类似于rowKey。建议keyProp、rowKey使用相同值。

* 不支持 `<a-table>` 原来的多选模式，需要在 column列中设置 `type="selection"`来设置多选，详见demo。

* 扩展行中不支持使用 `:expandedRowKeys.sync="expandedRowKeys"` 的sync双向绑定，详见demo。

* 树形结构暂无需求，有需求再兼容。

* 尽量减少使用左右固定列（或只使用右固定列），滚动会更流畅


## 更新内容

2023-1-13

* 修复滚动容器设置为window时报错

* 修复指定滚动容器，偶现滚动时表头会一直在

* npm 1.0.5版本发版

2023-1-15

* 支持 `keep-alive` 缓存

* npm 1.0.6版本发版

2023-1-15

* `keep-alive` 缓存时，修复固定列x轴滚动位置未恢复

2023-3-15

* 修复表格无数据时，表头滚动会抽搐

* 增加搜索、筛选的demo
