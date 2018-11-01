# vue-slide-tabs

> A vue.js slider tabs for mobile

## Demo

https://lpeihan.github.io/vue-slide-tabs/

## Installation

```shell
npm install vue-slide-tabs --save
```

# Usage

```html
<template>
  <div class="app">
    <tabs :tabs="tabs" class="tab-container">
      <div>This is first tab</div>
      <div>This is second tab</div>
      <div>This is third tab</div>
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
    };
  }
};
</script>
```
