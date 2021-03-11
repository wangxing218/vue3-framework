import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import '@css/common.scss'

import {
  Button,
  Toast
} from 'vant'

const app = createApp(App)
app.use(router)
  .use(Button)
  .use(Toast)

app.mount('#app')