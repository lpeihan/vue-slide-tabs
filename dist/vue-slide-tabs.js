(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-slide-tabs'] = factory());
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

	var script = {
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
			}
		},
		mounted: function mounted() {
			this.width = this.$el.clientWidth;
			this.tabWidth = Math.round(this.width / this.tabs.length);
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
	      on: {
	        click: function click($event) {
	          _vm.select(index);
	        }
	      }
	    }, [_vm._v("\n        " + _vm._s(item.label) + "\n      ")]);
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
	  inject("data-v-c2e4cf5e_0", { source: "\n.tabs-titles[data-v-c2e4cf5e] {\n  position: relative;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  line-height: 44px;\n  text-align: center;\n}\n.tabs-titles[data-v-c2e4cf5e]::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #eee;\n  -webkit-transform: translateY(0.5);\n  -moz-transform: translateY(0.5);\n  -o-transform: translateY(0.5);\n  -ms-transform: translateY(0.5);\n  transform: translateY(0.5);\n}\n.tabs-titles .title-item[data-v-c2e4cf5e] {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.tabs-titles .scroll-bar[data-v-c2e4cf5e] {\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n  border-bottom: 2px solid #d44439;\n  border-radius: 5px;\n  -webkit-transition: -webkit-transform 0.3s;\n  -moz-transition: -moz-transform 0.3s;\n  -o-transition: -o-transform 0.3s;\n  -ms-transition: -ms-transform 0.3s;\n  transition: transform 0.3s;\n}\n.tabs-content[data-v-c2e4cf5e] {\n  height: calc(100% - 44px);\n  overflow: hidden;\n}\n.tabs-content .wrapper[data-v-c2e4cf5e] {\n  font-size: 0;\n  white-space: nowrap;\n}\n.tabs-content .wrapper > div[data-v-c2e4cf5e] {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n", map: { "version": 3, "sources": ['C:\\Users\\lipeihan\\Desktop\\vue-slide-tabs/C:\\Users\\lipeihan\\Desktop\\vue-slide-tabs/C:\\Users\\lipeihan\\Desktop\\vue-slide-tabs\\src\\tabs.vue', "tabs.vue"], "names": [], "mappings": ";AAqHA;EACA,mBAAA;ECpHE,qBAAqB;EACrB,kBAAkB;EAClB,sBAAsB;EACtB,qBAAqB;EACrB,aAAa;EACb,cAAc;EDiHhB,kBAAA;EACA,mBAAA;CC/GC;ADoGD;EACA,YAAA;EClGE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EDiGX,8BAAA;EC/FE,mCAAmC;EACnC,gCAAgC;EAChC,8BAA8B;EAC9B,+BAA+B;EAC/B,2BAA2B;CAC5B;ADqGD;ECnGE,oBAAoB;EACpB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,QAAQ;CACT;AD+FD;EC7FE,mBAAmB;EACnB,UAAU;ED8FZ,WAAA;EACA,iCAAA;EC5FE,mBAAmB;EACnB,2CAA2C;EAC3C,qCAAqC;EACrC,iCAAiC;EACjC,mCAAmC;EACnC,2BAA2B;CAC5B;AD0FD;EACA,0BAAA;ECxFE,iBAAiB;CAClB;AD0FD;EACA,aAAA;EACA,oBAAA;CCxFC;AD0FD;ECxFE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EDyFf,gBAAA;CCvFC", "file": "tabs.vue", "sourcesContent": [null, ".tabs-titles {\n  position: relative;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: box;\n  display: flex;\n  line-height: 44px;\n  text-align: center;\n}\n.tabs-titles::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid #eee;\n  -webkit-transform: translateY(0.5);\n  -moz-transform: translateY(0.5);\n  -o-transform: translateY(0.5);\n  -ms-transform: translateY(0.5);\n  transform: translateY(0.5);\n}\n.tabs-titles .title-item {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -o-box-flex: 1;\n  box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n.tabs-titles .scroll-bar {\n  position: absolute;\n  bottom: 0;\n  z-index: 1;\n  border-bottom: 2px solid #d44439;\n  border-radius: 5px;\n  -webkit-transition: -webkit-transform 0.3s;\n  -moz-transition: -moz-transform 0.3s;\n  -o-transition: -o-transform 0.3s;\n  -ms-transition: -ms-transform 0.3s;\n  transition: transform 0.3s;\n}\n.tabs-content {\n  height: calc(100% - 44px);\n  overflow: hidden;\n}\n.tabs-content .wrapper {\n  font-size: 0;\n  white-space: nowrap;\n}\n.tabs-content .wrapper > div {\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n"] }, media: undefined });
	};
	/* scoped */
	var __vue_scope_id__ = "data-v-c2e4cf5e";
	/* module identifier */
	var __vue_module_identifier__ = undefined;
	/* functional template */
	var __vue_is_functional_template__ = false;
	/* component normalizer */
	function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
	  var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

	  // For security concerns, we use only base name in production mode.
	  component.__file = 'C:\\Users\\lipeihan\\Desktop\\vue-slide-tabs\\src\\tabs.vue';

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
