import {createApp} from 'vue'
import Element from 'element-plus'
import "u-reset.css"
import 'element-plus/lib/theme-chalk/index.css';
import "./assets/css/index.scss"
import App from './App.vue'
import route from './router/router'
import store from './store'

const app = createApp(App)

app.use(route).use(store).use(Element)

app.mount('#app')
