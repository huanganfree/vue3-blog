import { createApp } from 'vue'
import { router } from './router/index'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import './utils/rem.js'

const app = createApp(App) // 创建应用实例

app.use(router).use(Vant)

app.mount('#app')
