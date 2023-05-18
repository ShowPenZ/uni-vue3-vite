/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  // 用户名不可为空值
  return /\S/.test(str);
}

// 字母、数字(以字母开头)
//  ^[a-zA-Z][a-zA-Z0-9]*$
export function validEnNumber(str) {
  return /^[a-zA-Z][a-zA-Z0-9]*$/.test(str);
}

// 6-20个字符、字母、数字和特殊符号至少包含两种,不包括空格
// /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,20}$/
export function validPassword(str) {
  // return /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/.test(str)
  return /(?!.*[\u4E00-\u9FA5\s])(?!^[a-zA-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,20}$/.test(str);
}

// 仅英文
// ^[a-zA-Z]+$
export function validEn(str) {
  return /^[a-zA-Z]+$/.test(str);
}

// 英文+中文
// "^[0-9a-zA-Z_]$"
// export function validEnNumber(str) {
//   return /^[0-9a-zA-Z_]+$/.test(str)
// }

// 只能输入英文，数字，下划线，横线
// ^[\u4e00-\u9fa5A-Za-z0-9-\_]+$

// 限制输入长度为4-32 汉字算2字符
// ^([\u4E00-\u9FA5]|[a-z0-9]{2}){2,32}$

// 手机号验证
// /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
export function validPhone(str) {
  return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(str);
}
// 邮箱账号验证
// ^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$
export function validEmail(str) {
  return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
}

// 中英文、数字及中划线
export function valid_1(str) {
  const reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
  return reg.test(str);
}

// 中英文、数字、英文特殊字符
export function valid_2(str) {
  const reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~@#%&*\w\s\u4E00-\u9FA5]+$/;
  return reg.test(str);
}

// 数字、英文
export function valid_3(str) {
  const reg = /^[A-Za-z0-9]+$/;
  return reg.test(str);
}

// 英文、数字、英文特殊字符
export function valid_4(str) {
  const reg = /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~@#%&*\w]+$/;
  return reg.test(str);
}

// 中英文、数字
export function valid_5(str) {
  const reg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
  return reg.test(str);
}

// 版本号匹配 xxx.xxx.xxx
export function valid_6(str) {
  const reg = /^[1-9]\d{0,2}(\.([1-9]\d{0,2}|0)){2}$/;
  return reg.test(str);
}

// 数字、中文
export function valid_7(str) {
  const reg = /^[\u4E00-\u9FA5\d]+$/;
  return reg.test(str);
}

// 数字、英文、下划线，只能以英文开头
export function valid_8(str) {
  const reg = /^[a-zA-Z]+[0-9a-zA-Z]*$/;
  return reg.test(str);
}

// 必须包含数字、英文、下划线 6-18位
export function valid_9(str) {
  const reg =
    /^(?=.*\d)(?=.*?[a-zA-Z])(?=.*[~`!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~@#%&*])[\da-zA-Z~`!@#$%^&*()_\-+=<>?:"{}|,.\\/;'\\[\]·~@#%&*]{6,18}$/;
  return reg.test(str);
}

// 请写一个段正则表达式6-18位由数字，大小写字母组成，必须包含数字和大小写字母不能有特殊字符
export function valid_10(str) {
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,18}$/;
  return reg.test(str);
}
