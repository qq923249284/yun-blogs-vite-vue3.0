import service from "./axios";

/**
 * @description: 用户名是否存在
 * @param {String} data
 * @return {Promise}
 */
export function getHaveName(data) {
  return service({
    url: "/api/user/name",
    method: "get",
    params: { username: data },
  });
}

/**
 * @description:
 * @param {Object} data = {"title", "done"}
 * @return {Promise}
 */
export function signupUser(data) {
  return service({
    url: "/api/user/signup",
    method: "post",
    data,
  });
}

/**
 * @description:
 * @param {Object} data = {"title", "done"}
 * @return {Promise}
 */
export function getUserInfo(data) {
  return service({
    url: "/api/user/info",
    method: "get",
  });
}

// 登录方法
export function login(data) {
  return service({
    url: "/api/user/login",
    method: "post",
    data: data,
  });
}

/**
 * @description:
 * @param {Object} data = {"title", "done"}
 * @return {Promise}
 */
export function todo(data) {
  return service({
    url: "/api/todo",
    method: "post",
    data,
  });
}
