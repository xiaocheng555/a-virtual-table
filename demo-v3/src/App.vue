<template>
  <div id="app">
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
import Layout from './Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style lang='less'>
* {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
#app {
  height: 100%;
}
.code-preview {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.el-table__cell {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
</style>
