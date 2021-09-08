
<template>
    <base-layout page-title="Countries to Travel">
        <h2>Hello world, I´m just playing</h2>
        <h3>This is my top 10 </h3>
        <br/>
        <pages-list :pages="pages"></pages-list>

       

    </base-layout>
</template>

<script>

import PagesList from '../components/base/memories/PagesList.vue';

export default{
    components:{
        PagesList
    },
    computed: {
        pages(){
            return this.$store.getters.pages;
        }
    }

};

</script>

<style scoped>
h2, h3{
    text-align: center;
}
</style>