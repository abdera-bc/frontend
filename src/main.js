import Vue from 'vue'
import App from './App.vue'
import './index'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

import "@/assets/scss/index.scss"

Vue.use(VueAnalytics, {
  id: 'UA-155634377-4',
  disabled: true,
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
