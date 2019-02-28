import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chain from './views/Chain.vue'
import Product from './views/Product.vue'
import Form from './views/Form.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/chain',
      name: 'chain',
      component: Chain
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ]
})
