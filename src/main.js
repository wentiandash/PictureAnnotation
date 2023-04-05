import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'; // 启用路由
import { Button } from 'vant';
// import mocke form '@/router'
import '@/mock/index'

import './assets/main.css'
import 'vant/lib/index.css';

const app = createApp(App)
app.use(router)
   .use(Button)
app.mount('#app')
