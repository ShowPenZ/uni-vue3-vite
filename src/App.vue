<script>
import { getRefreshToken } from "@/utils/store";
import { isObjEmpty } from "@/utils/utils";

export default {
  onLaunch: function () {
    console.log("App Launch");
    const refreshTokenInfo = getRefreshToken();
    console.log(isObjEmpty(refreshTokenInfo));
    if (isObjEmpty(refreshTokenInfo)) {
      uni.reLaunch({ url: "/pages/login/index" });
    }
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
