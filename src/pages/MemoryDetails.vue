<template>
     <base-layout :page-title="loadedMemory ? loadedMemory.title: 'Loading...'" 
     page-default-back-link="/pages">
     <h2 v-if="!loadedMemory"> Could not find a page for the given id</h2>
     <h2 v-else>Loaded it</h2>
     </base-layout>

</template>
    
<script>
export default {
     data(){
          return{
       pageId: this.$route.params.id,
     }
     },
     computed: {
          loadedMemory(){
               return this.$store.getters.page(this.pageId);
          }

     },
    /*  watch: {
          $route(currentRoute){
               this.pageId= currentRoute.params.id;
          }
     } */
};
</script>
