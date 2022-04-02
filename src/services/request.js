import store from "@/store";
import storage from "store";
import axios from "axios";
import { message } from "ant-design-vue";
import "ant-design-vue/es/message/style/css";
import { ACCESS_TOKEN } from '@/store/mutation-types'

const networkConfig = {
  // serverUrl: "https://qcxgfp.app.cloudendpoint.cn/",
  serverUrl: "http://192.168.9.145:3001",
  requestTimeout: 20000,
};
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: networkConfig.serverUrl,
  // 超时
  timeout: networkConfig.requestTimeout,
});

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data;
    // 从 localstorage 获取 token
    const token = storage.get(ACCESS_TOKEN);
    if (error.response.status === 403) {
      message.error(data.message);
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      message.error("Authorization verification failed");
    }
  }
  return Promise.reject(error);
};

service.interceptors.request.use((config) => {
  const token = storage.get(ACCESS_TOKEN);
  if (token) {
    config.headers["Access-Token"] = token;
  }
  return config;
}, errorHandler);

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    if (res.data.code == 1002) message.warning(res.data.message);
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
