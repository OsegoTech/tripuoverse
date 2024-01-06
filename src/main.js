import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import "./style.css";
import App from "./App.vue";




import "primevue/resources/themes/lara-light-indigo/theme.css"


// primevue components  
import "primevue/resources/primevue.min.css";
import Button from 'primevue/button';
import Menubar from "primevue/menubar";



import router from "./routes/index.js";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(PrimeVue);


// primevue components
app.component('Button', Button);
app.component('Menubar', Menubar);

// end of primevue components
app.mount("#app");
