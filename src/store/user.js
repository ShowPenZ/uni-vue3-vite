import { defineStore } from "pinia";
import { ref } from "vue";
import { store } from "@/store";

import {
  getUserInfo,
  //  resetPwd
} from "@/services/user";
import { CONST_URL } from "@/config/constant";
import {
  getUserParam,
  // removeToken,
  // setCipherAccount,
  setUserInfo,
  setUserParam,
} from "@/utils/store";

export const useUserInfo = defineStore("user", () => {
  const userInfo = ref({});
  const mainBarState = ref(0);

  // 获取用户接口所需参数
  async function getUserParams() {
    const res = await getUserInfo({ serverCode: CONST_URL.SERVERCODE });
    if (!getUserParam()) {
      const userParam = {};
      userParam.tenantId = res.data.applicationList.length > 0 ? res.data.applicationList[0].tenantId : "";
      userParam.applicationId = res.data.applicationList.length > 0 ? res.data.applicationList[0]?.id : "";
      setUserParam(userParam);
    }
    setUserInfo(res.data);

    userInfo.value.avatar = res.data.avatar;
    userInfo.value.userName = res.data.userName;
    userInfo.value.roles = res.data.roles;
    userInfo.value.id = res.data.id;
  }

  // async function resetPassWord(param) {
  //   await resetPwd(param);
  //   showToast("修改密码成功！", "", 1500, () => {
  //     setTimeout(() => {
  //       removeToken();
  //       setCipherAccount({});
  //       uni.redirectTo({ url: "/pages/login/index" });
  //     }, 1510);
  //   });
  // }

  return {
    getUserParams,
    userInfo,
    mainBarState,
    // resetPassWord,
  };
});

export function useUserStoreHook() {
  return useUserInfo(store);
}
