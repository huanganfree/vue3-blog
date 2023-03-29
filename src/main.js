import { createApp } from 'vue'
import { router } from './router/index'
import App from './App.vue'
import Vant, { Icon } from 'vant';
import 'vant/lib/index.css';
import './assets/style/main.scss';
import './utils/rem.js'

const app = createApp(App)

app.use(router).use(Vant).use(Icon)

app.mount('#app')
