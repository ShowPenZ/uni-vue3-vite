import axios from "axios";
import axiosAdapterUniapp from "axios-adapter-uniapp";

// import {
//   clearStorage,
//   // getRefreshToken,
//   //   getToken,
// } from "./store";
// import { useSystem } from "@/store/system";
// import { storeToRefs } from "pinia";

const instance = axios.create({
  // 超时时间 15秒
  timeout: 15 * 1000,
  adapter: axiosAdapterUniapp,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept-Language": "zh-CN",
  },
});

instance.interceptors.request.use((config) => {
  //   登录后灌入Authorization
  //   const use_system = useSystem();
  //   const { tokenExpired } = storeToRefs(use_system);
  //   if (getToken() && getRefreshToken()) {
  //     config.headers["Authorization"] = `Bearer ${tokenExpired.value ? getRefreshToken().token : getToken().token}`;
  //   }

  //   登录后存在某些参数的话将其灌入headers
  //   if (getUserParam()) {
  //     config.headers["tenantId"] = getUserParam().tenantId;
  //     config.headers["applicationId"] = getUserParam().applicationId;
  //   }
  console.log(config);

  config.headers = {
    ...config.headers,
  };

  return config;
});

// response interceptor
instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.config.responseType === "blob") {
      return res;
    }
    if (res.code === 200 || res.code === "200" || res.code === 502) {
      return res;
    } else {
      // refreshToken过期重新登录
      if (res.code * 1 === "xxx") {
        uni.showToast({ title: res.message });
        // 过期后清除localstorage
        // clearStorage();
        // 跳转至首页
        // uni.redirectTo({ url: "/pages/login/index" });
        return Promise.reject(new Error(res.message || "登录状态出错,请重新登录"));
      } // 207是 token过期标识
      else if (res.code * 1 === 207) {
        // 使用refreshToken获取新的token
        // 拿取新的refreshToken
        // const use_system = useSystem();
        // use_system.setTokenExpiredStatus(true);
        // use_system.getRefreshToken();
        // uni.redirectTo({ url: "/pages/index/index" });
        // return;
      } else {
        uni.showToast({ title: res.message || "接口请求出错,请稍后再试", icon: "none" });
        console.warn(res.message, response.config.url);

        return Promise.reject(new Error(res.message || "接口请求出错"));
      }
    }
  },
  (error) => {
    if (error.message.indexOf("timeout") > -1) {
      uni.showToast({ title: "请求超时，请刷新再试" });
    } else {
      uni.showToast({ title: "网络出现错误" });
    }

    return Promise.reject(error);
  },
);

export default instance;
