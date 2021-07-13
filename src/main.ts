import Vue from 'vue';
import App from './App.vue';
import { customDirective } from './customDirective';

Vue.config.productionTip = false

Vue.directive('custom-directive', customDirective);

new Vue({
  render: h => h(App),
}).$mount('#app')
