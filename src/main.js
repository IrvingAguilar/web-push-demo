require("dotenv").config();
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import FirebaseApp from "./init-firebase";
import FCM from "./init-fcm";

Vue.config.productionTip = false;
Vue.prototype.FirebaseApp = FirebaseApp;
Vue.prototype.FCM = FCM;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
