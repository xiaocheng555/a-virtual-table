<template>
  <div class="a-table-header-search">
    <a-input
      class="search-input"
      v-model="keyword"
      :placeholder="placeholder"
      @pressEnter="handleSearch" />
    <a-button
      type="primary"
      icon="search"
      size="small"
      class="confirm-button"
      @click="handleSearch">
      Search
    </a-button>
    <a-button size="small" class="cancel-button" @click="handleReset">
      Reset
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'a-table-header-search',
  props: {
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    // 搜索事件
    handleSearch () {
      this.setFilterIconActive(this.keyword.length > 0)
      this.$emit('filter', this.keyword)
    },
    // 重制事件
    handleReset () {
      this.keyword = ''
      this.handleSearch()
    },
    // 设置筛选图标高亮颜色
    setFilterIconActive (actived) {
      let vm = this
      while (vm) {
        vm = vm.$parent
        if (!vm) break
        if (vm && vm.$el.className.indexOf('anticon-filter') > -1) {
          vm.$el.style.color = actived ? '#1890ff' : ''
          break
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.a-table-header-search {
  padding: 8px;

  .search-input {
    width: 188px;
    margin-bottom: 8px;
    display: block;
  }

  .confirm-button {
    width: 90px;
    margin-right: 8px
  }

  .cancel-button {
    width: 90px
  }
}
</style>
