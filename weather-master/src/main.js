import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import VueMoment from 'vue-moment'
import moment from 'moment'

Vue.use(Vuex)
Vue.use(VueMoment)
Vue.use(VueAxios, axios)
Vue.prototype.moment = moment
Vue.config.productionTip = false

new Vue({
  store : new Vuex.Store(store),
  router,
  render: h => h(App)
}).$mount('#app')
