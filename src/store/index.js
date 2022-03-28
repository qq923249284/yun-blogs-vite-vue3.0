import { createStore } from 'vuex';
import home from "./home";
import common from "./common";
const store = createStore({
  state () {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    home,
    common
  },
})
export default store;