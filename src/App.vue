<script>
import { getRefreshToken } from "@/utils/store";
import { isObjEmpty } from "@/utils/utils";
import EventBus from "@/utils/eventbus";

export default {
  onLaunch: function () {
    console.log("App Launch");
    const refreshTokenInfo = getRefreshToken();
    console.log(isObjEmpty(refreshTokenInfo));
    if (isObjEmpty(refreshTokenInfo)) {
      uni.reLaunch({ url: "/pages/login/index" });
    }

    //将全局事件总线对象，绑定到wx对象上
    // eslint-disable-next-line no-undef
    wx.$bus = new EventBus();
  },
  onShow: function () {},
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
</style>
