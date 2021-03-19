import { createApp } from 'vue';
// import store from '../components/vuex/store/index';
// import CoreuiVue from '@coreui/vue';
import App from '../components/App.vue';

const app = createApp(App);
app.mount(document.querySelector('#root'))
