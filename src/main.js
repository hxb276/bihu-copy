import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from './vue-router'
import router from './routers/index'
Vue.prototype.$axios = axios;
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
