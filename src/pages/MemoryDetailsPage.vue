<template>
     <base-layout :page-title="loadedMemory ? loadedMemory.title: 'Loading...'" 
     page-default-back-link="/pages">
     <h2 v-if="!loadedMemory"> Could not find a page for the given id</h2>
   
    <page-overview v-else 
       :title="loadedMemory.title" 
       :image="loadedMemory.image"
       :description="loadedMemory.description"></page-overview>
     </base-layout>

</template>
    
<script>
import PageOverview from '../components/base/memories/PageOverview.vue'
export default {
     components: {
          PageOverview
     },
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
