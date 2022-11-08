<template>
  <view>
    <u-tabbar 
      :value="curValue" 
      @change="(name: number) => curValue = name" 
      :fixed="true" 
      :placeholder="true"
      :safeAreaInsetBottom="true"
    >
      <u-tabbar-item text="首页" icon="home"></u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo"></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right"></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const curValue = ref(0)

</script>

<style lang="scss">

</style>