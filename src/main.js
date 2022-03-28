import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";
import '@/common/css/common.scss';

import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';

const app = createApp(App);
app.use(router).use(store).mount("#app");

app.config.globalProperties.$message = message;