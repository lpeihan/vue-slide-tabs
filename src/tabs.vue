<template>
  <div class="tabs">
    <div class="tabs-titles" ref="titles">
      <div
        class="title-item"
        @click="select(index)"
        v-for="(item, index) in tabs"
				:class="{ 'active': index === tabIndex }"
        :key="item.label"
      >{{item.label}}</div>
      <div
        class="scroll-bar"
        ref="scrollBar"
        :style="{
              width: `${tabWidth}px`,
              transform: `translate3d(${tabIndex * tabWidth}px, 0, 0)`
            }"
      />
    </div>

    <div
      class="tabs-content"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
    >
      <div
        class="wrapper"
        :style="{
				transform: `translate3d(${translateX - tabIndex * width}px, 0, 0)`,
				transition: touching ? '' : 'transform .3s'
			}"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-slide-tabs",
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tabIndex: 0,
      tabWidth: 0,
      touching: false,
      dx: 0,
      translateX: 0,
      width: 0
    }
  },
  methods: {
    getAngle(dx, dy) {
      return 360 * Math.atan(dy / dx) / (2 * Math.PI);
    },
    select(index) {
      this.tabIndex = index;
    },
    handleTouchstart(e) {
			this.touching = true;
			this.dx = 0;

      this.startX = e.touches[0].pageX;
      this.startY = e.touches[0].pageY;
      this.endX = e.touches[0].pageX;
      this.endY = e.touches[0].pageY;
    },
    handleTouchmove(e) {
      const endX = e.touches[0].pageX;
      const endY = e.touches[0].pageY;

      const dx = this.dx = endX - this.startX;

      if (this.canSlider()) {
        return;
      }

      if (Math.abs(dx) > 6 && Math.abs(this.getAngle(dx, endY - this.startY)) < 30) {
        this.translateX = dx;
      }
    },
    handleTouchend() {
      this.touching = false;
      this.translateX = 0;
      const percent = this.dx / this.width;

      if (this.canSlider()) {
        return;
      }

      if (percent < -0.3) {
        this.tabIndex++;
      }

      if (percent > 0.3) {
        this.tabIndex--;
      }
    },
    canSlider() {
      return (this.dx < 0 && this.tabIndex >= this.tabs.length - 1) || (this.dx > 0 && this.tabIndex === 0);
    },
    resizeWidth() {
      this.width = this.$el.clientWidth;
      this.tabWidth = Math.round(this.width / this.tabs.length);
    }
  },
  watch: {
    tabIndex(newVal) {
      this.$emit('change', newVal);
    }
  },
  mounted() {
    this.resizeWidth();

    window.addEventListener('resize', this.resizeWidth);
  }
}
</script>

<style lang="stylus" scoped>
@import '../node_modules/nib/index.styl'

$color-border = #eee
$color-theme = rgb(212, 68, 57)
$font-size-base = 14px

border-1px()
  &::after
    content: ''
    absolute: bottom 0 left 0 right 0
    border-bottom: 1px solid $color-border
    transform: translateY(0.5)

.tabs
  &-titles
    position: relative
    display: flex
    line-height: 44px
    text-align: center
    border-1px()


		.scroll-bar
      absolute: bottom 0
      z-index: 1
      border-bottom: 2px solid $color-theme
      border-radius: 5px
      transition: transform 0.3s

    .title-item
      flex: 1

		.active
			color: $color-theme

  &-content
    height: calc(100% - 44px)
    overflow: hidden

    .wrapper
      font-size: 0
      white-space: nowrap

      & > div
        display: inline-block
        size: 100%
        font-size: $font-size-base
</style>