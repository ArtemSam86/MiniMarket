import Vue from 'vue'
import App from './App.vue'
import store from './store'
import $modal from 'vue-js-modal'

Vue.use($modal)

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    }
    window.addEventListener('scroll', f);
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
