import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../views/Game.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue")
  },
  {
    path: "/gameOver",
    name: "GameOver",
    component: () =>
      import(/* webpackChunkName: "gameOver" */ "../views/GameOver.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
