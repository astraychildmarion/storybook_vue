import Vue from 'vue'
import App from './App.vue'
import XycloudUiKit from '../dist/xycloud-ui-kit.common.js'

Vue.use(XycloudUiKit)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')