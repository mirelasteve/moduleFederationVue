import { createApp } from 'vue';
import store from '../components/vuex/store/index';
import CoreuiVue from '@coreui/vue';
import Marketing from '../components/Marketing.vue';


const mount = (el) => {
    console.log(store.state.MainMarketing.marketingProducts[0]);
    
    const app = createApp(Marketing);
    app.use(CoreuiVue)
    app.use(store);
    app.mount(el)
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#_marketing-dev');
    if(el){
        mount(el)
    }
}

export {mount}