import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Tophead from '@/components/Tophead.vue'
import LoginTop from '@/components/LoginTop.vue';



Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
axios.defaults.url = 'http://localhost:81'
Vue.component('Tophead', Tophead);

Vue.component('logintop', LoginTop);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')