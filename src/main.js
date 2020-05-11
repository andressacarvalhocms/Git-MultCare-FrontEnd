import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// BootstrapVue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Font Awersome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faHome, faCheck, faExclamationTriangle, faTachometerAlt, faNotesMedical, faCapsules, faStethoscope, faClipboardList, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VeeValidate from 'vee-validate';

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
library.add(faPlus, faHome, faCheck, faExclamationTriangle, faTachometerAlt, faNotesMedical, faCapsules, faStethoscope, faClipboardList, faCloudDownloadAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
