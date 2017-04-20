import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import cw from '@/components/cw/cw'
import es from '@/components/es/es'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cw',
      name: 'cw',
      component: cw
    },
    {
      path: '/cwkt',
      name: 'Hello cw',
      component: Hello
    },
    {
      path: '/cwTe',
      name: 'es',
      component: es
    },
    {
      path: '/cwkk:id',
      name: 'es',
      component: es,
      children: [
        {
          path: 'posts',
          component: Hello
        }
      ]
    },

  ]
})
