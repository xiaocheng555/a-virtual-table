<template>
  <div>
    <a-virtual-table
      ref="virtualTable"
      isTree
      :columns="columns"
      :data-source.sync="list"
      :itemSize="54"
      row-key="id"
      keyProp="id"
      childrenColumnName=''
      :scroll="{ x: 1300, y: 600 }">
      <template slot="tree" slot-scope="{record}">
        <a-virtual-tree :row="record" :load="onload" :check="checkHasChild">
          {{ record.id }}
        </a-virtual-tree>
      </template>
    </a-virtual-table>
  </div>
</template>

<script>
import AVirtualTable, { AVirtualTree } from 'a-virtual-table'

let flag = 0
function mockData (start, end, level = 1) {
  const list = []
  for (let i = start; i < end; i++) {
    const text = getContent()
    const text2 = getContent()
    list.push({
      id: flag++,
      text,
      text2,
      children: level <= 2 && Math.random() > 0.5 ? mockData(flag, flag + 3, level + 1) : undefined,
      address: '广东广州'
    })
  }
  return list
}

function getContent () {
  const content = [
    '这是一条测试数据',
    '君不见黄河之水天上来，奔流到海不复回。',
    '十年生死两茫茫',
    '寻寻觅觅，冷冷清清，凄凄惨惨戚戚。',
    '桃花坞里桃花庵，桃花庵里桃花仙；桃花仙人种桃树，又摘桃花卖酒钱。',
    '明月几时有，把酒问青天。',
    '槛菊愁烟兰泣露，罗幕轻寒，',
    '寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。多情自古伤离别，更那堪冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？',
    '红豆生南国，春来发几枝。',
    '黄鹂'
  ]
  const i = Math.floor(Math.random() * 10)
  return content[i]
}

export default {
  components: {
    AVirtualTable,
    AVirtualTree
  },
  data () {
    return {
      expandedRowKeys: [],
      columns: [
        {
          scopedSlots: { customRender: 'tree' },
          width: 200
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 200
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
          ellipsis: true
        }
      ],
      list: mockData(0, 500)
    }
  },
  methods: {
    onload (row, resolve) {
      resolve(row.children || [])
    },
    checkHasChild (row) {
      return !!row.children
    }
  }
}
</script>

<style lang='less' scoped>

</style>
