<template>
    <div ref="refr"></div>
</template>

<script>
import {mount} from 'marketing/MarketingApp'
import { ref, watch, watchEffect , onBeforeMount, onMounted } from "vue";

export default {
    setup(props,context){
        const refr = ref(null);

        watchEffect (() => {
            console.log(refr);
            mount(refr.value)
  });
    return {
         refr
         }
    }
}
</script>