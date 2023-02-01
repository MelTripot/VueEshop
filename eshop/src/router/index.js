import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogueView from "../views/CatalogueView.vue";
import PanierView from "../views/PanierView.vue";
import AllView from "../views/AllView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/catalogue",
      name: "catalogue",
      component: CatalogueView,
    },
    {
      path: "/panier",
      name: "panier",
      component: PanierView,
    },
    {
      path: "/all",
      name: "all",
      component: AllView,
    },
  ],
});

export default router;
