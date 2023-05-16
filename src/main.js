import { createApp } from "vue";
import App from "./App.vue";
import NavBar from "./components/NavBar.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./css/style.css";

const pinia = createPinia();

const app = createApp(App);
app.component("NavBar", NavBar);
app.directive("email", {
  created(el, biding) {
    el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`;
  },
});

app.use(pinia);
app.use(router);
app.mount("#app");
