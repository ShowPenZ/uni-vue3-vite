<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <uni-card>
        <text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
      </uni-card>
    </view>
  </view>
</template>

<script>
import { onShow, onLoad } from "@dcloudio/uni-app";

export default {
  name: "index-page",
  setup() {
    // onLoad 接受 A 页面传递的参数
    onLoad(() => {
      console.log("B 页面 onLoad:"); //B 页面 onLoad: {id: '1', name: 'uniapp'}
    });

    onShow(() => {});
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
