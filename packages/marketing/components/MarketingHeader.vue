<template>
    <div>
        <div v-for='item in items' :key='item'>
            <p>{{item}}</p>
        </div>
        <h3 class="alert alert-primary" >{{$store.state.MainMarketing.marketingProducts[0]}}</h3>
        <button @click="navigateTo">Cl8ick</button>
    </div>
</template>

<script>
import { useLink, useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'

export default {
    name:'marketing-header',
    setup(){
        const items = reactive([1,2,3,4,5])
        const router = useRouter()
        const route = useRoute()
        const navigateTo = () => {
            
            router.push({path:'/sales'})
            
            console.log('clicked',router.options.routes);
        }
        return {
            items,
            navigateTo
        }
    }
    }

</script>