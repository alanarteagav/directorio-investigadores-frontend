/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import Search from '@/components/Search'
import MexicoMap from '@/components/MexicoMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/map',
      name: 'MexicoMap',
      component: MexicoMap
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
