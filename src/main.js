import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/plugins/element.js"
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/global.css";
import "./assets/fonts/iconfont.css";
import axios from 'axios';
import TreeTable from 'vue-table-with-tree-grid';

// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";
axios.interceptors.request.use(config => {
  config.headers.Authorization = sessionStorage.getItem("token")
  return config;
})

Vue.prototype.$http = axios;
Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
