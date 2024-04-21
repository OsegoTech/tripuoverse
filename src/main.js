import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Toast from "vue-toastification";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

import "vue-toastification/dist/index.css";
import "./style.css";
import App from "./App.vue";

// primevue components
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/mdc-light-deeppurple/theme.css";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import router from "./routes/index.js";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(PrimeVue);
app.use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: false,
  icon: true,
  rtl: false,
});
app.use(vuetify);

// primevue components
app.component("FloatLabel", FloatLabel).component("InputText", InputText).component("Menubar", Menubar).component("Button", Button)

// end of primevue components
app.mount("#app");
