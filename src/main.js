import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

Vue.loadScript("src/assets/js/jquery-2.1.4.min.js")
Vue.loadScript("src/assets/js/jquery.vide.min.js")

new Vue({
  el: '#app',
  render: h => h(App)
})
