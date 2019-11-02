import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import vuetify from '@/plugins/vuetify'

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import axios from 'axios'
Vue.prototype.$http = axios;

import 'expose-loader?$!expose-loader?jQuery!jquery'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(BootstrapVue)




Vue.config.productionTip = false

new Vue({
  router,
  store,
  // vuetify,
  render: h => h(App)
}).$mount('#app')

