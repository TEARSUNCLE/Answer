<template>
  <view>
    <view class="header">
      <view>当前选择的题库为：</view>
      <view class="isColor">暂无</view>
      <view class="isColor">题目数量：<text style="color: #c37382">0</text></view>
    </view>

    <view class="contentBtn">
      <view class="contentOne">
        <view>
          <img src="@/static/images/icons8-scorecard-50.png" alt="" class="img">
          <view class="size ct">答题</view>
        </view>
        <view class="playAnswer size">
          开始答题
        </view>
        <view>
          <img src="@/static/images/icons8-favorite-64.png" alt="" class="img">
          <view class="size ct">收藏</view>
        </view>
      </view>
      <view class="contentTwo mt30">
        <view>
          <img src="@/static/images/icons8-rank-64.png" alt="" class="img">
          <view class="size ct">排名</view>
        </view>
        <view class="playAnswer size" style="background-color: #5b91dc;">
          模拟考试
        </view>
        <view>
          <img src="@/static/images/icons8-signin-100.png" alt="" class="img">
          <view class="size ct">签到</view>
        </view>
      </view>
    </view>

    <view class="option mt30">
      <u-cell-group customStyle="{'fontSize': '30px'}" :border="false">
	      <u-cell
	        title="每日一题"
          isLink
	        url="/pages/componentsB/tag/tag"
          class="cell"
	      >
      </u-cell>
        <u-cell
	        title="选择题库"
          isLink
          @click="handleAnswer"
          style="background-color: #fff;"
	      >
      </u-cell>
      </u-cell-group>
      <u-picker
        :show="isShow" 
        ref="uPicker"
        :columns="columns" 
        @confirm="confirm" 
        @close="handleClose"
        @cancel="handleCancel"
        @change="changeHandler"
        closeOnClickOverlay
        />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance, nextTick } from 'vue';

const isShow = ref(false)
const uPicker = ref()
const currentInstance = getCurrentInstance() as any

const columns = ref([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
])
const columnData = ref([
  ['深圳', '厦门', '上海', '拉萨'],
  ['得州', '华盛顿', '纽约', '阿拉斯加']
])

const handleAnswer = () => {
  nextTick(() => {
    isShow.value = true
    console.log(88, isShow.value)
  })
}

const changeHandler = e => {  
  const { columnIndex, index } = e
  if (columnIndex === 0) {
    uPicker.value.setColumnValues(1, columnData.value[index])
  }
}
const confirm = e => isShow.value = false

const handleCancel = () => isShow.value = false
const handleClose = () => isShow.value = false
</script>

<style lang="scss">
.header {
  margin: .3125rem 0 0 .3125rem;
  font-size: .8125rem;
  .isColor{
    color: #5b91dc;
  }
  :nth-child(2) {
      margin: .3125rem 0;
    }
}

.contentBtn {
  margin-top: 1.25rem;
  .contentOne, .contentTwo {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .img {
      width: 35px;
      height: 35px;
    }
    .playAnswer {
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background-color: #6adb87;
      border-radius: 50%;
      color: #eff1f5;
    }
  }
}

.option {
  background-color: #eff1f5;
  height: 100vh;
  .cell {
    background-color: #fff;
    margin: .3125rem 0;
  }
}
</style>
