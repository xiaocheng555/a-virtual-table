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
      :scroll="{ x: 1300, y: 600 }">
      <template #name="{text}">
        <a>{{ text }}===</a>
      </template>
      <template #append>
        <div class="table-loading" v-if="!hasLoaded">
          <LoadingOutlined />
        </div>
      </template>
    </a-virtual-table>
  </div>
</template>

<script>
import AVirtualTable from '../../../src/a-virtual-table'
import { LoadingOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    AVirtualTable,
    LoadingOutlined
  },
  data () {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          slots: { customRender: 'name' },
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
      loadmoreVisible: true,
      hasLoaded: false // 下拉加载完所有数据
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
    // 处理下拉加载
    handleInfinite () {
      let stop = true // 防止多次触发
      const $state = {
        loaded: () => {
          stop = false
        }
      }

      this.loadMore($state)
      const scroller = this.$el.querySelector('.ant-table-body')
      scroller.addEventListener('scroll', () => {
        if (this.list.length > 5000) {
          this.hasLoaded = true
          return
        }
        if (stop) return

        const scrollDistance = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight
        if (scrollDistance <= 100) {
          stop = true
          this.loadMore($state)
        }
      })
    }
  },
  mounted () {
    this.handleInfinite()
  }
}
</script>

<style lang='less' scoped>
:deep(.table-hide-empty .ant-table-placeholder) {
  display: none !important;
}
.table-loading {
  padding: 5px;
  text-align: center;
  font-size: 28px;
  color: #1890ff;
}
</style>
