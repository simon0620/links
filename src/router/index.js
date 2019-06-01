import Vue from 'vue'
import Router from 'vue-router'
import JieShao from '@/components/JieShao'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/jieshao',
      name: 'JieShao',
      component: JieShao
    },
    {
      path: '/',
      name: 'Links',
      component: () => import('@/view/link/Links.vue')
    }
  ]
})
