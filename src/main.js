import Vue from 'vue'
import App from './App.vue'
import Moment from 'moment'

global.moment = Moment

Vue.use(Moment)

new Vue({
  el: '#app',
  render: h => h(App)
})
