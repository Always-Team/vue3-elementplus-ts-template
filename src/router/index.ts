import { createRouter, createWebHashHistory } from "vue-router";
const { VITE_TITLE } = import.meta.env;
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      meta: {
        title: "首页",
      },
      component: () => import("../views/IndexView.vue"),
    },
    {
      path: "/404",
      name: "404",
      meta: {
        title: "404",
      },
      component: () => import("../views/NotFound.vue"),
    },
    {
      path: "/:pathMatch(.*)",
      redirect: "/404",
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | ${VITE_TITLE}`;
  next();
});
export default router;
