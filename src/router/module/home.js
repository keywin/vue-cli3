/**
 * 首页
 */
const home = (r) => require.ensure([], () => r(require("@/pages/home/Index.vue")), "home")
const homeHome = (r) => require.ensure([], () => r(require("@/pages/home/Home.vue")), "index")

const homeRouter = [
  {
    path: "/home",
    name: "home",
    component: home,
    redirect: "/home/index",
    children: [
      {
        path: "index",
        name: "homeHome",
        component: homeHome,
        meta: {
          name: "首页"
        }
      }
    ]
  }
]

export default homeRouter