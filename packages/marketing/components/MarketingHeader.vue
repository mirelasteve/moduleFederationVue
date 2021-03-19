<template>
    <div>
        <div v-for='item in items' :key='item'>
            <p>{{item}}</p>
        </div>
        <h3 class="alert alert-primary" >{{$store.state.MainMarketing.marketingProducts[0]}}</h3>
    </div>
</template>

<script>
export default {
    name:'marketing-header',
    data(){
        return {
            items:[1,2,3,4,5]
        }
    }
}
</script>