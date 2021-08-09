import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login"
  },{
    path: "/login",
    component: () => import("@/views/Login")
  },{
    path: "/home",
    component: () => import("@/views/Home"),
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        component: () => import("@/views/Welcome")
      },{
        path: "/users",
        component: () => import("@/views/Users")
      },{
        path: "/rights",
        component: () => import("@/views/Power/Rights")
      },{
        path: "/roles",
        component: () => import("@/views/Power/Roles")
      },{
        path: "/categories",
        component: () => import("@/views/Goods/Cate")
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  if(to.path === '/login') {
    next();
    return;
  }
  const tokenStr = sessionStorage.getItem('token');
  if(!tokenStr) {
    next('/login')
    return
  }
  next();
  // from 代表从哪个路径来
  // next 表示放行， next('/xxx')强制跳转某个路径
})
export default router
