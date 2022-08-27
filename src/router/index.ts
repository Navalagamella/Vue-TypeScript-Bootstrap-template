import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

import ListaNavegacion from "@/NAVEGACION/Nav_Interfaces_Conf";

const routes: Array<RouteRecordRaw> = [
  //RUTAS COMUNES
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  //RUTAS DINÁMICAS
  {
    path: ListaNavegacion[0].routerTo,
    name: ListaNavegacion[0].displayName,
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
