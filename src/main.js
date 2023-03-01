import { createApp } from "vue";
import App from "./App.vue";
import NavBar from "./components/NavBar.vue";

const app = createApp(App);
app.component("NavBar", NavBar);
app.mount("#app");
