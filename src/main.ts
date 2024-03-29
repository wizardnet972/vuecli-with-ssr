import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

export function createApp() {
  const router = createRouter();

  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app, router };
}
