import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chain from './views/Chain.vue'
import Product from './views/Product.vue'
import Form from './views/Form.vue'
import Login from './views/Login.vue'
import Table from './views/Table.vue'
import DashSupplier from './views/Dash/DashSupplier.vue'
import DashTrader from './views/Dash/DashTrader.vue'
import DashManufacturer from './views/Dash/DashManufacturer.vue'
import DashDistributor from './views/Dash/DashDistributor.vue'
import DashRetailer from './views/Dash/DashRetailer.vue'


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
    {
      path: '/dashsupplier',
      name: 'dashSupplier',
      component: DashSupplier
    },
    {
      path: '/dashtrader',
      name: 'dashtrader',
      component: DashTrader
    },
    {
      path: '/dashmanufacturer',
      name: 'dashmanufacturer',
      component: DashManufacturer
    },
    {
      path: '/dashdistributor',
      name: 'dashdistributor',
      component: DashDistributor
    },
    {
      path: '/dashretailer',
      name: 'dashretailer',
      component: DashRetailer
    },
    {
      path: '/InventoryTable',
      name: 'InventoryTable',
      component: Table
    },

  ]
})
