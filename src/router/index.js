import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

// 页面主体
const main = (r) => require.ensure([], () => r(require("@/pages/layout/Index.vue")), "main")

// 首页
const index = (r) => require.ensure([], () => r(require("@/pages/home/Index.vue")), "index")

// const home = (r) => require.ensure([], () => r(require("@/pages/home/Index.vue")), "home")
// const homeHome = (r) => require.ensure([], () => r(require("@/pages/home/Home.vue")), "index")
// import baseRouter from "./module/baseRouter"
// import homeRouter from "./module/home"

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/main"
    },
    {
      path: "/main",
      name: "main",
      component: main,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: index
        }
      ]
    }
  ],
  mode: "history",
})