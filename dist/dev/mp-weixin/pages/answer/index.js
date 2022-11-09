"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_u_cell2 = common_vendor.resolveComponent("u-cell");
  const _easycom_u_cell_group2 = common_vendor.resolveComponent("u-cell-group");
  (_easycom_u_cell2 + _easycom_u_cell_group2)();
}
const _easycom_u_cell = () => "../../node-modules/uview-plus/components/u-cell/u-cell.js";
const _easycom_u_cell_group = () => "../../node-modules/uview-plus/components/u-cell-group/u-cell-group.js";
if (!Math) {
  (_easycom_u_cell + _easycom_u_cell_group + common_vendor.unref(uPicker))();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const isShow = common_vendor.ref(false);
    const uPicker2 = common_vendor.ref();
    const columns = common_vendor.ref([
      ["\u4E2D\u56FD", "\u7F8E\u56FD"],
      ["\u6DF1\u5733", "\u53A6\u95E8", "\u4E0A\u6D77", "\u62C9\u8428"]
    ]);
    const columnData = common_vendor.ref([
      ["\u6DF1\u5733", "\u53A6\u95E8", "\u4E0A\u6D77", "\u62C9\u8428"],
      ["\u5F97\u5DDE", "\u534E\u76DB\u987F", "\u7EBD\u7EA6", "\u963F\u62C9\u65AF\u52A0"]
    ]);
    const handleAnswer = () => {
      common_vendor.nextTick(() => {
        isShow.value = true;
        console.log(88, isShow.value);
      });
    };
    const changeHandler = (e) => {
      const { columnIndex, index } = e;
      if (columnIndex === 0) {
        uPicker2.value.setColumnValues(1, columnData.value[index]);
      }
    };
    const confirm = (e) => isShow.value = false;
    const handleCancel = () => isShow.value = false;
    const handleClose = () => isShow.value = false;
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_assets._imports_2,
        d: common_assets._imports_3,
        e: common_vendor.p({
          title: "\u6BCF\u65E5\u4E00\u9898",
          isLink: true,
          url: "/pages/componentsB/tag/tag"
        }),
        f: common_vendor.o(handleAnswer),
        g: common_vendor.p({
          title: "\u9009\u62E9\u9898\u5E93",
          isLink: true
        }),
        h: common_vendor.p({
          customStyle: "{'fontSize': '30px'}",
          border: false
        }),
        i: common_vendor.sr(uPicker2, "140e15eb-3", {
          "k": "uPicker"
        }),
        j: common_vendor.o(confirm),
        k: common_vendor.o(handleClose),
        l: common_vendor.o(handleCancel),
        m: common_vendor.o(changeHandler),
        n: common_vendor.p({
          show: isShow.value,
          columns: columns.value,
          closeOnClickOverlay: true
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/project/demo/answer_xcx/vue3-vite-ts-answer/src/pages/answer/index.vue"]]);
wx.createPage(MiniProgramPage);
