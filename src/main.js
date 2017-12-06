import Vue from 'vue'
import App from './App.vue'
import Moment from 'moment'
var VueDragula = require('vue-dragula');

Vue.use(VueDragula);

global.moment = Moment

Vue.use(Moment)

new Vue({
  el: '#app',
  render: h => h(App)
})
