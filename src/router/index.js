import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

import otherRouter from "./module/otherRouter"
import homeRouter from "./module/home"

const router = new Router({
  routers: [
    ...otherRouter,
    ...homeRouter
  ],
  mode: "hash"
})

export default router