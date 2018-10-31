<template>
  <div class="tabs">
    <div class="tabs-titles">
      <div class="title-item"
           v-for="item in tabs"
           :key="item.name">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  }
}
</script>
