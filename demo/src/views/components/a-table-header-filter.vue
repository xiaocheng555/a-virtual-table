<template>
  <div class="a-table-header-filter">
    <a-menu
      :openKeys="openKeys"
      class="ant-dropdown-menu"
      prefixCls="ant-dropdown-menu"
      :multiple="multiple"
      @select="onSelect"
      @deselect="onDeSelect"
      @openChange="onOpenChange">
      <template v-for="item in filters">
        <a-sub-menu
          popupClassName="ant-table-filter-dropdown-submenu"
          v-if="Array.isArray(item.children) && item.children.length > 0"
          :key="item.value"
          :value="item.value"
          :title="item.text"
          @click="onSubTitleClick">
          <a-menu-item v-for="subItem in  item.children" :key="subItem.value">
            <a-checkbox
              v-if="multiple"
              :checked="selectedKeys.indexOf(subItem.value) >= 0">
            </a-checkbox>
            <a-radio v-else :checked="selectedKeys.indexOf(subItem.value) >= 0"></a-radio>
            <span>{{ subItem.text }}</span>
          </a-menu-item>
        </a-sub-menu>
        <template v-else>
          <a-menu-item :key="item.value">
            <a-checkbox v-if="multiple" :checked="selectedKeys.indexOf(item.value) >= 0"></a-checkbox>
            <a-radio v-else :checked="selectedKeys.indexOf(item.value) >= 0"></a-radio>
            <span>{{ item.text }}</span>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
    <div class="ant-table-filter-dropdown-btns">
      <a class="ant-table-filter-dropdown-link confirm" @click="handleConfirm">
        Ok
      </a>
      <a class="ant-table-filter-dropdown-link clear" @click="handleClearFilters">
        Reset
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-table-header-filter',
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      selectedKeys: [],
      openKeys: [],
      stopSubClose: false
    }
  },
  methods: {
    // 菜单打开/关闭的事件
    onOpenChange (openKeys) {
      if (this.stopSubClose) return
      this.openKeys = openKeys
    },
    // 副菜单点击事件，不让弹窗关闭
    onSubTitleClick () {
      this.stopSubClose = true
      this.$nextTick(() => {
        this.stopSubClose = false
      })
    },
    // 选择事件
    onSelect ({selectedKeys}) {
      this.selectedKeys = selectedKeys
    },
    // 取消选择事件，多选时生效
    onDeSelect ({selectedKeys}) {
      this.selectedKeys = selectedKeys
    },
    // 确认事件
    handleConfirm () {
      this.setFilterIconActive(this.selectedKeys.length > 0)
      this.$emit('filter', this.selectedKeys)
    },
    // 重置事件
    handleClearFilters () {
      this.selectedKeys = []
      this.handleConfirm()
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
  },
  created () {}
}
</script>

<style lang='less' scoped>
</style>
