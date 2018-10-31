<template>
  <div class="app">
    <tabs :tabs="tabs" class="tab-container">
      <div>1</div>
      <div>22</div>
      <div>33</div>
    </tabs>
  </div>
</template>

<script>
import Tabs from "vue-slide-tabs";

export default {
  name: "app",
  components: {
    Tabs
  },
  data() {
    return {
      tabs: [
        {
          label: "关注"
        },
        {
          label: "推荐"
        },
        {
          label: "最新"
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import '../node_modules/nib/index.styl'

normalize-css()

.app
  .tab-container
    height: 100vh
</style>
