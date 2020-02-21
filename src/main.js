import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.css";

require("./components/index.js");
Vue.config.productionTip = false;
window.$ = window.jQuery = require('jquery');
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
