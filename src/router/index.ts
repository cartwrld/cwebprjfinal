import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/PokemonView.vue'),
  },
  /** *******   Add route item for Student View  ********* */
  {
    path: '/poketeam',
    name: 'PokeTeam',
    component: () => import('../views/PokeTeamView.vue'),
  },
  /** *******   Add route item for Product View  ********* */
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/UserView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
