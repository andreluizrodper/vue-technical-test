import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Intern from '../views/Intern.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:index,:section,:guid',
    name: 'intern',
    component: Intern,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
