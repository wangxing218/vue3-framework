import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '../page/index.vue'
import Info from '../page/info.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index,
      name: 'Index',
    },
    {
      path: '/info',
      component: Info,
      name: 'Info'
    },
    {
      path: '/msg',
      component: () => import('../page/msg.vue'),
      name: 'Msg'
    }
  ]
})


export default router