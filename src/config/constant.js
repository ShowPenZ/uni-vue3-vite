const env = import.meta.env;
const { VITE_BASE_URL, VITE_MAP_CHOOSELOCATION_KEY, VITE_MAP_REFER, VITE_IMAGE_URL } = env;

export const CONST_URL = {
  BASE_URL: VITE_BASE_URL,
  IMG_URL: VITE_IMAGE_URL,
  IMG_PATH: "/mp-wx-ff-cloud",
  VERSIONAPI: "/ffc/rest/v1",
  CONTROLLER1: "/tenant/app",
  CONTROLLER2: "/account-auth",
  CONTROLLER3: "/tenant-sys-user",
};

export const MAP_CHOOSELOCATION_KEY = VITE_MAP_CHOOSELOCATION_KEY;
export const MAP_REFER = VITE_MAP_REFER;
