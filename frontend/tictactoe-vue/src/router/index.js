import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/game",
    name: "Game",
    component: () =>
        import(/* webpackChunkName: "game" */ "../views/Game.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
