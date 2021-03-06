import Vue from 'vue'
import axios from 'axios'
import routes from 'vue-auto-routing'

import App from './App'
import router from './router'
import store from './store'


import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

// element-ui style
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale });

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
