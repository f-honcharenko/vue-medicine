import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HW from './components/HelloWorld'
import HW2 from './components/2'

Vue.prototype.$nodeLink = 'http://localhost:5000'; //DEV
// Vue.prototype.$nodeLink = 'https://fit-backend.ew.r.appspot.com'; //PRODUCTION
// Vue.prototype.$nodeLink = 'https://5000-406f94e5-eb8f-4565-b444-cf62b5a42181.europe-west4.cloudshell.dev/'; //DEV_PRODUCTION

Vue.config.productionTip = false
Vue.use(VueRouter);
const routes = [
  { path: '/hw', component: HW },
  { path: '/hw2', component: HW2 },

];

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  el: '#app',
  router,
  render: h => {
    return h(App)
  }
});