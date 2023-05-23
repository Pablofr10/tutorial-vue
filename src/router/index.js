import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
const lazyLoad = (view) => () => import(`../pages/${view}.vue`);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/equipe",
    name: "Equipe",
    component: lazyLoad("Equipe"),
  },
  {
    path: "/equipe/:id",
    name: "Funcionario",
    component: lazyLoad("Funcionario"),
  },
  {
    path: "/:pathMatch(.*)",
    component: lazyLoad("PaginaNaoEncontrada"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
