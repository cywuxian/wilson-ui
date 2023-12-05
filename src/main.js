import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import "./assets/theme-chalk/index.css"
import WilsonUI from "./package/index"
Vue.use(WilsonUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
