// import Vue from "vue";
// import VueRouter from "vue-router";

import vcRouterView from "../vue-components/RouterView.vue";

Vue.use(VueRouter);

const vcHome = (resolve) => import("../vue-components/Home.vue").then(resolve);
const vcIconCategory = (resolve) => import("../vue-components/IconCategories.vue").then(resolve);
const vcFavorites = (resolve) => import("../vue-components/Favorites.vue").then(resolve);

const routes = [{
  path: "/",
  component: vcHome
}, {
  path: "/category/:category",
  component: vcIconCategory
}, {
  path: "/favorites",
  component: vcFavorites
}];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(vcRouterView)
});

export {router};