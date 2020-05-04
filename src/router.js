import Vue from 'vue';
import Router from 'vue-router';
import Login from '_pages/login/index';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/login', name: 'login', component: Login },
  ],
});
