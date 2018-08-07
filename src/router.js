import Vue from 'vue'
import Router from 'vue-router'
import Menus from './views/Menus.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cases from './views/Cases.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cases',
      name: 'cases',
      component: Cases
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/menus',
      name: 'menus',
      component: Menus
    }
  ]
})
