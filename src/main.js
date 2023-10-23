import { createApp } from 'vue'
import {createPinia} from "pinia"
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from "vue-query"
import "bootstrap/dist/css/bootstrap.min.css"
import 'mosha-vue-toastify/dist/style.css'
import "bootstrap"
import router from "./routes/index.js"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(VueQueryPlugin)

app.mount('#app')
