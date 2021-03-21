import { createApp } from 'vue';
import router from '../router/index';
import store from '../components/vuex/store/index';
import CoreuiVue from '@coreui/vue';
import Marketing from '../components/App.vue';


const mount = (el) => {
    
    const app = createApp(Marketing);
    app.use(CoreuiVue)
    app.use(store);
    app.use(router)
    app.mount(el)
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_marketing-dev');
    if(el){
        mount(el)
    }
}

export {mount}