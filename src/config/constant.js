const env = import.meta.env;
const { VITE_BASE_URL } = env;

export const CONST_URL = {
  BASE_URL: VITE_BASE_URL,
  VERSIONAPI: "/api",
  SERVERCODE: "structure-platform-backend",
  CONTROLLER1: "/iot-user-center",
  CONTROLLER2: "/structure-platform-backend",
};

export const CONST_IMGURL = {
  IMG_PATH: "structure-platform-frontend-static/wechat-mini/assets",
};
