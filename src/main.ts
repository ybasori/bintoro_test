import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createStore } from "vuex";
import articleModule from "./store/article/article";
import type { IStore } from "./store/store.type";

const app = createApp(App);

const store = createStore<IStore>({
  modules: {
    article: articleModule,
  },
});

app.use(store);
app.use(router);

app.mount("#app");
