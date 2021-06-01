import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Programm = () => Promise.resolve(import('../views/Program.vue'));
const Page = () => Promise.resolve(import('../views/Page.vue'));
const Event = () => Promise.resolve(import('../views/Event.vue'));
const NotFound = () => Promise.resolve(import('../views/NotFound.vue'));

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/programm',
    name: 'Programm',
    component: Programm
  },
  {
    path: '/event/:id',
    component: Event
  },
  {
    path: '/abbe',
    name: 'Das Abdera',
    component: Page
  },
  {
    path: '/besuch',
    name: 'Der Besuch',
    component: Page
  },
  {
    path: '/mitmachen',
    name: 'Mitmachen',
    component: Page
  },
  {
    path: '/:slug',
    component: Page
  },
  {
    path: '/404', 
    name: '404',
    component: NotFound
  },
  {
    path: '*', redirect: '/404' 
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }   
})

export default router
