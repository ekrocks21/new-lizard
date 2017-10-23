import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import FaroeIslands from '@/components/Articles/faroeIslands'
import Iceland from '@/components/Articles/iceland'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faroeIslands',
      name: 'FaroeIslands',
      component: FaroeIslands
    },  
    {
      path: '/iceland',
      name: 'Iceland',
      component: Iceland
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
