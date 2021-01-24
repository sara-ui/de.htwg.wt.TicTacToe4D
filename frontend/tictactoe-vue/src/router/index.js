import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/startGaming",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "../views/Game.vue")
  },
  {
    path: "/gameOver",
    name: "GameOver",
    component: () =>
      import(/* webpackChunkName: "gameOver" */ "../views/GameOver.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
