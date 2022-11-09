<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch");
});

onShow(() => {
  console.log("App Show");
});

onHide(() => {
  console.log("App Hide");
});

</script>
<style lang="scss">
	@import "uview-plus/index.scss";

  // 全局的默认样式
  .size {
    font-size: .8125rem;
    color: #21252b;
  }
  .ct {
    text-align: center;
  }
  .mt30 {
    margin-top: 25px;
  }
</style>