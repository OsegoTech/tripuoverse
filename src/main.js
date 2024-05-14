import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-blue/theme.css";

import "vue-toastification/dist/index.css";
import "./style.css";
import "../src/assets/styles/app.css";
import App from "./App.vue";

// primevue components

import router from "./routes/index.js";

const app = createApp(App);
const pinia = createPinia();

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Carousel from "primevue/carousel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";

app
  .component("Button", Button)
  .component("InputText", InputText)
  .component("Carousel", Carousel)
  .component("DataTable", DataTable)
  .component("Column", Column)
  .component("Tag", Tag);

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

app.mount("#app");
