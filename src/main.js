import { createApp } from 'vue'
import {createPinia} from "pinia"
import './style.css'
import App from './App.vue'

// import the fontawesome core
import {library} from "@fortawesome/fontawesome-svg-core"

// import the fontawesome icon component
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"

// import specific icons
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faUserSecret} from "@fortawesome/free-solid-svg-icons";

// add icons to the library
library.add(faTwitter, faUserSecret)

import router from "./routes/index.js"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
