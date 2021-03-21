<template>
    <div>
        <Header/>
        <marketing-app></marketing-app>
    </div>
</template>

<script>
import Header from '../components/Header'
import MarketingApp from './MarketingApp'
export default {
    components:{
        MarketingApp,
        Header
    }
}
</script>