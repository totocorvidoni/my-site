import Vue from "vue";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import "normalize.css";
import i18n from "./i18n";

Vue.use(VeeValidate, {
  classes: true
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
