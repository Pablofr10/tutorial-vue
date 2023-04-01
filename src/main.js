import { createApp } from "vue";
import App from "./App.vue";
import NavBar from "./components/NavBar.vue";

const app = createApp(App);
app.component("NavBar", NavBar);
app.directive("email", {
  created(el, biding) {
    el.innerHTML = `<a href="mailto:${biding.value}">${biding.value}</a>`;
  },
});
app.mount("#app");
