import Vue from 'vue';
import VueRouter, { RouteConfig, NavigationGuard } from 'vue-router';
import LoginView from '../views/LoginView.vue';

Vue.use(VueRouter);

const requireReadAccess: NavigationGuard = (to, from, next) => {
  const authToken = localStorage.getItem('authToken');
  const allowedReadTokens = ['iHaveReadAccess', 'iHaveWriteAccess', 'iHaveAdminAccess']; // Adjust with your allowed read tokens

  if (authToken && allowedReadTokens.includes(authToken)) {
    // User has the required read access token, allow navigation
    next();
  } else {
    // User doesn't have the required read access, redirect to login
    next('/login');
  }
};

const requireAdminAccess: NavigationGuard = (to, from, next) => {
  const authToken = localStorage.getItem('authToken');
  const allowedTokens = ['iHaveAdminAccess']; // Adjust with your allowed tokens

  if (authToken && allowedTokens.includes(authToken)) {
    // User has the required access token, allow navigation
    next();
  } else {
    // User doesn't have the required access, redirect to login
    next('/login');
  }
};

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/HomeView.vue'),
    beforeEnter: requireReadAccess,

  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/PokemonView.vue'),
    beforeEnter: requireReadAccess,
  },
  /** *******   Add route item for Student View  ********* */
  {
    path: '/poketeam',
    name: 'PokeTeam',
    component: () => import('../views/PokeTeamView.vue'),
    beforeEnter: requireReadAccess,
  },
  /** *******   Add route item for Product View  ********* */
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/UserView.vue'),
    beforeEnter: requireAdminAccess,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
