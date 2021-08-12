import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import "@/plugins/element.js";
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/css/global.css";
import "./assets/fonts/iconfont.css";
import axios from 'axios';
import TreeTable from 'vue-table-with-tree-grid';
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
// 导入富文本编辑器的样式
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
// 将富文本编辑器注册为全局可用组件
Vue.use(VueQuillEditor)

// 导入NProgress包对应的js和css
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 配置请求的根路径
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/";
// 在request拦截器中，展示进度条
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers.Authorization = sessionStorage.getItem("token")
  return config;
})

// 在response拦截器中，隐藏进度条
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

Vue.prototype.$http = axios;
Vue.config.productionTip = false

// 注册树形表格
Vue.component('tree-table', TreeTable)

Vue.filter('dateFormat', function(originVal) {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, '0');
  const d = (dt.getDate() + '').padStart(2, '0');
  const hh = (dt.getHours() + '').padStart(2, '0');
  const mm = (dt.getMinutes() + '').padStart(2, '0');
  const ss = (dt.getSeconds() + '').padStart(2, '0');
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
