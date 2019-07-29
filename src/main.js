import Vue from "vue";
import VeeValidate, { Validator } from "vee-validate";
import es from "vee-validate/dist/locale/es";
import App from "./App.vue";
import "normalize.css";
import i18n from "./i18n";

Vue.use(VeeValidate, {
  classes: true
});

Validator.localize("es", es);

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App)
}).$mount("#app");
