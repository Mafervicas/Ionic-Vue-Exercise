<template>
<ion-list>
<page-list-item 
  v-for="page in pages"
  :key="page.id"
  :page="page">
</page-list-item>
</ion-list>
    
</template>

<script>
import {IonList} from '@ionic/vue';
import PageListItem from './PageListItem.vue';
export default {
    props: ["pages"],
    components: {
        IonList,
        PageListItem
    },
};
</script>