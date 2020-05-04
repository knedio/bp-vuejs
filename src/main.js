import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '_assets/css/tailwind.css'
import '_assets/css/styles.css'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
