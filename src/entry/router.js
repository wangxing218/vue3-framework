import {createRouter,createWebHashHistory} from 'vue-router'

import Index from '../page/index.vue'
import Info from '../page/info.vue'
import Msg from '../page/msg.vue'

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
      component: Msg,
      name: 'Msg'
    }
  ]
})


export default router