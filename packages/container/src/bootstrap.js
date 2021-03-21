import { createApp } from 'vue';
// import router from '../router/index';
// import store from '../components/vuex/store/index';
// import CoreuiVue from '@coreui/vue';
import App from '../components/App.vue';

const app = createApp(App);
// app.use(router)
app.mount(document.querySelector('#root'))
