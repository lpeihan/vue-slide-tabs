(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueSlideTabs = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: "vue-slide-tabs",
    props: {
      tabs: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        tabIndex: 0,
        tabWidth: 0,
        touching: false,
        dx: 0,
        translateX: 0,
        width: 0
      };
    },

    methods: {
      getAngle: function getAngle(dx, dy) {
        return 360 * Math.atan(dy / dx) / (2 * Math.PI);
      },
      select: function select(index) {
        this.tabIndex = index;
      },
      handleTouchstart: function handleTouchstart(e) {
        this.touching = true;

        this.startX = e.touches[0].pageX;
        this.startY = e.touches[0].pageY;
        this.endX = e.touches[0].pageX;
        this.endY = e.touches[0].pageY;
      },
      handleTouchmove: function handleTouchmove(e) {
        var endX = e.touches[0].pageX;
        var endY = e.touches[0].pageY;

        var dx = this.dx = endX - this.startX;

        if (this.canSlider()) {
          return;
        }

        if (Math.abs(dx) > 6 && Math.abs(this.getAngle(dx, endY - this.startY)) < 30) {
          this.translateX = dx;
        }
      },
      handleTouchend: function handleTouchend() {
        this.touching = false;
        this.translateX = 0;
        var percent = this.dx / this.width;

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
      canSlider: function canSlider() {
        return this.dx < 0 && this.tabIndex >= this.tabs.length - 1 || this.dx > 0 && this.tabIndex === 0;
      },
      resizeWidth: function resizeWidth() {
        this.width = this.$el.clientWidth;
        this.tabWidth = Math.round(this.width / this.tabs.length);
      }
    },
    watch: {
      tabIndex: function tabIndex(newVal) {
        this.$emit('change', newVal);
      }
    },
    mounted: function mounted() {
      this.resizeWidth();

      window.addEventListener('resize', this.resizeWidth);
    }
  };

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "tabs" }, [_c("div", { ref: "titles", staticClass: "tabs-titles" }, [_vm._l(_vm.tabs, function (item, index) {
      return _c("div", {
        key: item.label,
        staticClass: "title-item",
        class: { active: index === _vm.tabIndex },
        on: {
          click: function click($event) {
            _vm.select(index);
          }
        }
      }, [_vm._v(_vm._s(item.label))]);
    }), _vm._v(" "), _c("div", {
      ref: "scrollBar",
      staticClass: "scroll-bar",
      style: {
        width: _vm.tabWidth + "px",
        transform: "translate3d(" + _vm.tabIndex * _vm.tabWidth + "px, 0, 0)"
      }
    })], 2), _vm._v(" "), _c("div", {
      staticClass: "tabs-content",
      on: {
        touchstart: _vm.handleTouchstart,
        touchmove: _vm.handleTouchmove,
        touchend: _vm.handleTouchend
      }
    }, [_c("div", {
      staticClass: "wrapper",
      style: {
        transform: "translate3d(" + (_vm.translateX - _vm.tabIndex * _vm.width) + "px, 0, 0)",
        transition: _vm.touching ? "" : "transform .3s"
      }
    }, [_vm._t("default")], 2)])]);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-a7d7b762_0", { source: ".tabs-titles[data-v-a7d7b762] {\n  position: relative;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  line-height: 44px;\n  text-align: center;\n}\n.tabs-titles[data-v-a7d7b762]::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #eee;\n  -webkit-transform: translateY(0.5);\n  -moz-transform: translateY(0.5);\n  -o-transform: translateY(0.5);\n  -ms-transform: translateY(0.5);\n  transform: translateY(0.5);\n}\n.tabs .scroll-bar[data-v-a7d7b762] {\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n  border-bottom: 2px solid #d44439;\n  border-radius: 5px;\n  -webkit-transition: -webkit-transform 0.3s;\n  -moz-transition: -moz-transform 0.3s;\n  -o-transition: -o-transform 0.3s;\n  -ms-transition: -ms-transform 0.3s;\n  transition: transform 0.3s;\n}\n.tabs .title-item[data-v-a7d7b762] {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.tabs .active[data-v-a7d7b762] {\n  color: #d44439;\n}\n.tabs-content[data-v-a7d7b762] {\n  height: calc(100% - 44px);\n  overflow: hidden;\n}\n.tabs-content .wrapper[data-v-a7d7b762] {\n  font-size: 0;\n  white-space: nowrap;\n}\n.tabs-content .wrapper > div[data-v-a7d7b762] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n", map: { "version": 3, "sources": ["/Users/chandashi/vue-slide-tabs/src/tabs.vue", "tabs.vue"], "names": [], "mappings": "AA4IA;EACA,kBAAA;EC3IE,oBAAoB;EACpB,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,YAAY;EACZ,aAAa;EDwIf,iBAAA;EACA,kBAAA;ACtIA;AD2HA;EACA,WAAA;ECzHE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,QAAQ;EDwHV,6BAAA;ECtHE,kCAAkC;EAClC,+BAA+B;EAC/B,6BAA6B;EAC7B,8BAA8B;EAC9B,0BAA0B;AAC5B;AD6HA;EC3HE,kBAAkB;EAClB,SAAS;ED4HX,UAAA;EACA,gCAAA;EC1HE,kBAAkB;EAClB,0CAA0C;EAC1C,oCAAoC;EACpC,gCAAgC;EAChC,kCAAkC;EAClC,0BAA0B;AAC5B;ADwHA;ECtHE,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,eAAe;EACf,WAAW;EACX,OAAO;AACT;ADkHA;EACA,cAAA;AChHA;ADkHA;EACA,yBAAA;EChHE,gBAAgB;AAClB;ADkHA;EACA,YAAA;EACA,mBAAA;AChHA;ADkHA;EChHE,qBAAqB;EACrB,WAAW;EACX,YAAY;EDiHd,eAAA;AC/GA", "file": "tabs.vue", "sourcesContent": ["<template>\n  <div class=\"tabs\">\n    <div class=\"tabs-titles\" ref=\"titles\">\n      <div\n        class=\"title-item\"\n        @click=\"select(index)\"\n        v-for=\"(item, index) in tabs\"\n\t\t\t\t:class=\"{ 'active': index === tabIndex }\"\n        :key=\"item.label\"\n      >{{item.label}}</div>\n      <div\n        class=\"scroll-bar\"\n        ref=\"scrollBar\"\n        :style=\"{\n              width: `${tabWidth}px`,\n              transform: `translate3d(${tabIndex * tabWidth}px, 0, 0)`\n            }\"\n      />\n    </div>\n\n    <div\n      class=\"tabs-content\"\n      @touchstart=\"handleTouchstart\"\n      @touchmove=\"handleTouchmove\"\n      @touchend=\"handleTouchend\"\n    >\n      <div\n        class=\"wrapper\"\n        :style=\"{\n\t\t\t\ttransform: `translate3d(${translateX - tabIndex * width}px, 0, 0)`,\n\t\t\t\ttransition: touching ? '' : 'transform .3s'\n\t\t\t}\"\n      >\n        <slot></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \"vue-slide-tabs\",\n  props: {\n    tabs: {\n      type: Array,\n      default: () => []\n    }\n  },\n  data() {\n    return {\n      tabIndex: 0,\n      tabWidth: 0,\n      touching: false,\n      dx: 0,\n      translateX: 0,\n      width: 0\n    }\n  },\n  methods: {\n    getAngle(dx, dy) {\n      return 360 * Math.atan(dy / dx) / (2 * Math.PI);\n    },\n    select(index) {\n      this.tabIndex = index;\n    },\n    handleTouchstart(e) {\n      this.touching = true;\n\n      this.startX = e.touches[0].pageX;\n      this.startY = e.touches[0].pageY;\n      this.endX = e.touches[0].pageX;\n      this.endY = e.touches[0].pageY;\n    },\n    handleTouchmove(e) {\n      const endX = e.touches[0].pageX;\n      const endY = e.touches[0].pageY;\n\n      const dx = this.dx = endX - this.startX;\n\n      if (this.canSlider()) {\n        return;\n      }\n\n      if (Math.abs(dx) > 6 && Math.abs(this.getAngle(dx, endY - this.startY)) < 30) {\n        this.translateX = dx;\n      }\n    },\n    handleTouchend() {\n      this.touching = false;\n      this.translateX = 0;\n      const percent = this.dx / this.width;\n\n      if (this.canSlider()) {\n        return;\n      }\n\n      if (percent < -0.3) {\n        this.tabIndex++;\n      }\n\n      if (percent > 0.3) {\n        this.tabIndex--;\n      }\n    },\n    canSlider() {\n      return (this.dx < 0 && this.tabIndex >= this.tabs.length - 1) || (this.dx > 0 && this.tabIndex === 0);\n    },\n    resizeWidth() {\n      this.width = this.$el.clientWidth;\n      this.tabWidth = Math.round(this.width / this.tabs.length);\n    }\n  },\n  watch: {\n    tabIndex(newVal) {\n      this.$emit('change', newVal);\n    }\n  },\n  mounted() {\n    this.resizeWidth();\n\n    window.addEventListener('resize', this.resizeWidth);\n  }\n}\n</script>\n\n<style lang=\"stylus\" scoped>\n@import '../node_modules/nib/index.styl'\n\n$color-border = #eee\n$color-theme = rgb(212, 68, 57)\n$font-size-base = 14px\n\nborder-1px()\n  &::after\n    content: ''\n    absolute: bottom 0 left 0 right 0\n    border-bottom: 1px solid $color-border\n    transform: translateY(0.5)\n\n.tabs\n  &-titles\n    position: relative\n    display: flex\n    line-height: 44px\n    text-align: center\n    border-1px()\n\n\n\t\t.scroll-bar\n      absolute: bottom 0\n      z-index: 1\n      border-bottom: 2px solid $color-theme\n      border-radius: 5px\n      transition: transform 0.3s\n\n    .title-item\n      flex: 1\n\n\t\t.active\n\t\t\tcolor: $color-theme\n\n  &-content\n    height: calc(100% - 44px)\n    overflow: hidden\n\n    .wrapper\n      font-size: 0\n      white-space: nowrap\n\n      & > div\n        display: inline-block\n        size: 100%\n        font-size: $font-size-base\n</style>", ".tabs-titles {\n  position: relative;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  line-height: 44px;\n  text-align: center;\n}\n.tabs-titles::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #eee;\n  -webkit-transform: translateY(0.5);\n  -moz-transform: translateY(0.5);\n  -o-transform: translateY(0.5);\n  -ms-transform: translateY(0.5);\n  transform: translateY(0.5);\n}\n.tabs .scroll-bar {\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n  border-bottom: 2px solid #d44439;\n  border-radius: 5px;\n  -webkit-transition: -webkit-transform 0.3s;\n  -moz-transition: -moz-transform 0.3s;\n  -o-transition: -o-transform 0.3s;\n  -ms-transition: -ms-transform 0.3s;\n  transition: transform 0.3s;\n}\n.tabs .title-item {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.tabs .active {\n  color: #d44439;\n}\n.tabs-content {\n  height: calc(100% - 44px);\n  overflow: hidden;\n}\n.tabs-content .wrapper {\n  font-size: 0;\n  white-space: nowrap;\n}\n.tabs-content .wrapper > div {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n"] }, media: undefined });
  };
  /* scoped */
  var __vue_scope_id__ = "data-v-a7d7b762";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/chandashi/vue-slide-tabs/src/tabs.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      var hook = void 0;
      if (style) {
        hook = function hook(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component;
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */

  var tabs = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, __vue_create_injector__, undefined);

  return tabs;

})));
