import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Tophead from '@/components/Tophead.vue'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.component('Tophead',Tophead)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
