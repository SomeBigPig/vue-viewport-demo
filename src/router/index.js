import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Flexible from '@/components/Flexible'
import ScssSyntax from '@/components/ScssSyntax'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/flexible',
      component: Flexible
    },
    {
      path: '/scssSyntax',
      component: ScssSyntax
    }
  ]
})
