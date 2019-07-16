import Vue from 'vue'
import App from './App.vue'
//store.js를 불러와
import {store} from './store'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  //Vue 인스턴스에 등록한다.
  store
}).$mount('#app')
