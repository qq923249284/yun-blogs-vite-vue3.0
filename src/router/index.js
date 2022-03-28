import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import { ACCESS_TOKEN } from "@/store/mutation-types";
import storage from "store"

const routes = [
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
  {
    path: "/404",
    meta: { noAuth: true },
    component: () => import("../views/NotFound/404.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    meta: { noAuth: true },
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    meta: { noAuth: true },
    component: () => import("../views/Login/Signup.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log(to.meta.noAuth);
  if (!to.meta.noAuth && !storage.get(ACCESS_TOKEN)) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else next();
});
export default router;
