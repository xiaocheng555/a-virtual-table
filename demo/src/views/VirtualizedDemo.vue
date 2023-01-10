<template>
  <div>
    <a-virtual-table
      class="loadmore-table"
      :class="loading ? 'table-hide-empty' : ''"
      :columns="columns"
      :data-source="list"
      :itemSize="54"
      keyProp="id"
      row-key="id"
      :virtualized="list.length > 100"
      :scroll="{ x: 1300, y: 600 }"
      @change="onVirtualChange">
      <a slot="name" slot-scope="{text}">{{ text }}===</a>
      <InfiniteLoading
        slot="append"
        ref="loadmore"
        forceUseInfiniteWrapper=".loadmore-table .ant-table-body"
        @infinite="loadMore">
      </InfiniteLoading>
    </a-virtual-table>
    <b>渲染 {{ renderData.length }} 行数据</b>
  </div>
</template>

<script>
import AVirtualTable from '../../../src/a-virtual-table'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    AVirtualTable,
    InfiniteLoading
  },
  data () {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
          // fixed: 'left',
          width: 300
        },
        {
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: 300
        },
        {
          title: 'text',
          dataIndex: 'text',
          key: 'text',
          width: 400
        },
        {
          title: 'text2',
          dataIndex: 'text2',
          key: 'text2',
          width: 500,
          ellipsis: true
        }
      ],
      list: [],
      count: 0,
      loading: true,
      renderData: [],
      loadmoreVisible: true
    }
  },
  methods: {
    loadMore ($state) {
      this.loading = true
      setTimeout(() => {
        for (let i = 0; i < 30; i++) {
          this.count++
          this.list.push({
            id: this.count,
            name: '小明',
            show: false,
            text: this.getRandomContent(),
            text2: this.getRandomContent()
          })
        }
        $state && $state.loaded()
        this.loading = false
        // ⚠️：此处需要先隐藏下拉加载的dom，不然会下拉添加完数据后会一直滚动到最底部，导致无限的滚动加载
        this.loadmoreVisible = false
        setTimeout(() => {
          this.loadmoreVisible = true
        })
      }, 1000)
    },
    getRandomContent () {
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
    },
    onVirtualChange (renderData) {
      this.renderData = renderData
    }
  },
  mounted () {
    // const loadmoreEl = this.$refs.loadmore.$el
    // this.$el.querySelector('.ant-table-body').appendChild(loadmoreEl)
  }
}
</script>

<style lang='less' scoped>
.table-hide-empty {
  :deep(.ant-table-placeholder) {
    display: none;
  }
}
</style>
