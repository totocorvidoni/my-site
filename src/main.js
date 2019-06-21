import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import "normalize.css";

Vue.use(VeeValidate, {
  classes: true
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
