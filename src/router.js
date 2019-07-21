import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BreweriesList from './views/BreweriesList.vue'
import Brewery from './views/Brewery.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/breweries',
      name: 'breweries',
      component: BreweriesList
    },
    { 
      path: '/breweries/:id',
      name: 'brewery',
      component: Brewery 
    },
  ]
})
