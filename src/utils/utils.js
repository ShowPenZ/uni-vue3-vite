import AES from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";

export const sleep = (time = 1000) => new Promise((resolve) => setTimeout(resolve, time));

export const getTimestamp = () => {
  const timestamp = Date.parse(new Date()) / 1000;

  return timestamp;
};

export const isObjEmpty = (obj) => {
  if (
    JSON.stringify(obj) === "{}" ||
    JSON.stringify(obj) === "undefined" ||
    JSON.stringify(obj) == undefined ||
    (typeof obj == "string" && obj.length == 0)
  ) {
    return true;
  }
  return false;
};

// 加密
export const ciphertext = (string) => AES.encrypt(string, "ff-fe").toString();

// 解密
export const deciphertext = (ciphertext) => {
  const bytes = AES.decrypt(ciphertext, "ff-fe");
  const originalText = bytes.toString(encUtf8);
  return originalText;
};
