// main.js
import { createApp } from 'vue'
import App from './App.vue'
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import router from './router'
import store from './store/auth'
import './firebase'




createApp(App).use(store).use(router).mount("#app");
