import Vue from 'vue'
import App from './App.vue'
import commonComponents from '../dist/commonComponents.common.js'

Vue.use(commonComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')