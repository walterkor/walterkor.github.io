import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createApp(App).use(store).use(router).mount("#app");
