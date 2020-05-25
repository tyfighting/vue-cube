import Vue from "vue";
import "./cube-ui";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import interceptor from "./interceptor";
import { createAPI } from "cube-ui";
import CartAnim from "@/components/CartAnim";
import create from "./utils/create";

Vue.config.productionTip = false;
createAPI(Vue, CartAnim, ['transitionend']);
Vue.prototype.$create = create;

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");

//执行拦截器的初始化操作
interceptor(app);
