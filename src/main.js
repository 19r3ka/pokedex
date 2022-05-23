import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from "primevue/config";

import "primeflex/primeflex.css";
import "primevue/resources/themes/nova-vue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.mount("#app");
