<template>
 
    <div>
      <h1>Marketing</h1>
      <MarketingHeader/>
    </div>

</template>

<script>
  import {onMounted} from 'vue';
  import MarketingHeader from './MarketingHeader'
  import { useRouter, useRoute } from 'vue-router'

  export default {
    components:{
      MarketingHeader
    },
    setup(props){

      const router = useRouter()
      const route = useRoute()
      onMounted(()=>{
        // console.log(router,props);
      })
    }
  
  }
</script>



