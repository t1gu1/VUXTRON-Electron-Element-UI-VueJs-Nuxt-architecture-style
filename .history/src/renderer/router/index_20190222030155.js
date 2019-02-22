import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/test',
      name: 'landing-pagetest',
      component: require('@/components/LandingPagetest').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
