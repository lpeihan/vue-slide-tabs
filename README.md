# vue-slide-tabs

[![npm](https://img.shields.io/npm/v/vue-slide-tabs.svg)](https://www.npmjs.com/package/vue-slide-tabs)
[![NpmLicense](https://img.shields.io/npm/l/vue-slide-tabs.svg)](https://www.npmjs.com/package/vue-slide-tabs)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/vue-slide-tabs.svg)](https://www.npmjs.com/package/vue-slide-tabs)
[![GitHub issues](https://img.shields.io/github/issues/lpeihan/vue-slide-tabs.svg)](https://github.com/lpeihan/vue-slide-tabs)
[![npm](https://img.shields.io/npm/dt/vue-slide-tabs.svg)](https://www.npmjs.com/package/vue-slide-tabs)

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
