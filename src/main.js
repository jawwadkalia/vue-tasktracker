import Vue from 'vue'
import App from './App.vue'
//import router from './router'

//Vue(App).use(router).mount('#app')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
