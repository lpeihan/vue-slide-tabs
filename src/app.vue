<template>
  <div class="app">
    <tabs />
  </div>
</template>

<script>
import Tabs from "./tabs";

export default {
  name: "app",
  components: {
    Tabs
  }
}
</script>

<style lang="stylus">
@import '../node_modules/nib/index.styl'

normalize-css()
$color-theme = rgb(212, 68, 57)

.app
  color: red
</style>
