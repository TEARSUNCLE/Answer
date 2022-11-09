"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "u-toolbar",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$5],
  methods: {
    cancel() {
      this.$emit("cancel");
    },
    confirm() {
      this.$emit("confirm");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: _ctx.show
  }, _ctx.show ? common_vendor.e({
    b: common_vendor.t(_ctx.cancelText),
    c: common_vendor.o((...args) => $options.cancel && $options.cancel(...args)),
    d: _ctx.cancelColor,
    e: _ctx.title
  }, _ctx.title ? {
    f: common_vendor.t(_ctx.title)
  } : {}, {
    g: common_vendor.t(_ctx.confirmText),
    h: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    i: _ctx.confirmColor,
    j: common_vendor.o((...args) => _ctx.noop && _ctx.noop(...args))
  }) : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3fd495d6"], ["__file", "D:/project/demo/answer_xcx/vue3-vite-ts-answer/node_modules/uview-plus/components/u-toolbar/u-toolbar.vue"]]);
wx.createComponent(Component);
