import request from "@/utils/request";
import { CONST_URL } from "@/config/constant";

const { VERSIONAPI, CONTROLLER1, BASE_URL } = CONST_URL;

export const getUserInfo = async (data, headers) => {
  return await request({ url: `${BASE_URL}${VERSIONAPI}${CONTROLLER1}/security/user`, method: "post", data, headers });
};

export const resetPwd = async (data) => {
  return await request({
    url: `${BASE_URL}${VERSIONAPI}${CONTROLLER1}/system/comm-user/reset-pwd`,
    method: "post",
    data,
  });
};
