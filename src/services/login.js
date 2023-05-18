import { CONST_URL } from "@/config/constant";
import request from "@/utils/request";

const env = import.meta.env;
const { VITE_BASE_URL } = env;

const { VERSIONAPI, CONTROLLER1 } = CONST_URL;

export const login = async (data) => {
  return await request({ url: `${VITE_BASE_URL}${VERSIONAPI}${CONTROLLER1}/security/login`, method: "post", data });
};
