import { deciphertext, isObjEmpty } from "./utils";

export const clearStorage = () => {
  try {
    uni.clearStorageSync();
  } catch (e) {
    // Do something when catch error
  }
};

export const setToken = (token) => {
  try {
    uni.setStorageSync("token", token);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  try {
    const tokenInfo = uni.getStorageSync("token");
    return tokenInfo;
  } catch (error) {
    console.log(error);
  }
};

export const removeToken = () => {
  try {
    uni.removeStorageSync("token");
    uni.removeStorageSync("refreshToken");
  } catch (error) {
    console.log(error);
  }
};

export const setRefreshToken = (token) => {
  try {
    uni.setStorageSync("refreshToken", token);
  } catch (error) {
    console.log(error);
  }
};

export const getRefreshToken = () => {
  try {
    const refreshTokenInfo = uni.getStorageSync("refreshToken");
    return refreshTokenInfo;
  } catch (error) {
    console.log(error);
  }
};

export const setCipherAccount = (info) => {
  try {
    uni.setStorageSync("cipherAccount", info);
  } catch (error) {
    console.log(error);
  }
};

//获取解密后的账号信息和密码
export const getCipherAccount = () => {
  try {
    const deCipherAccountInfo = {};
    const cipherAccountInfo = uni.getStorageSync("cipherAccount");

    if (!isObjEmpty(cipherAccountInfo)) {
      deCipherAccountInfo.userName = deciphertext(cipherAccountInfo.userName);
      deCipherAccountInfo.password = deciphertext(cipherAccountInfo.password);
    }

    return deCipherAccountInfo;
  } catch (error) {
    console.log(error);
  }
};

export const setUserInfo = (userInfo) => {
  try {
    uni.setStorageSync("userInfo", userInfo);
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = () => {
  try {
    const userInfo = uni.getStorageSync("userInfo");
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export const removeUserInfo = () => {
  try {
    uni.removeStorageSync("userInfo");
  } catch (error) {
    console.log(error);
  }
};

export const setUserParam = (userParam) => {
  try {
    uni.setStorageSync("userParam", userParam);
  } catch (error) {
    console.log(error);
  }
};

export const getUserParam = () => {
  try {
    const userParam = uni.getStorageSync("userParam");
    return userParam;
  } catch (error) {
    console.log(error);
  }
};

export const removeUserParam = () => {
  try {
    uni.removeStorageSync("userParam");
  } catch (error) {
    console.log(error);
  }
};
