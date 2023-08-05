import VueRouter from 'vue-router';
import Vue from 'vue';

import UserLayout from './page/user/index.vue';
import Login from './page/user/login/index.vue';
import Register from './page/user/register/index.vue';
import Reset from './page/user/reset/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      },
      {
        path: 'reset',
        component: Reset
      }
    ]
  }
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;