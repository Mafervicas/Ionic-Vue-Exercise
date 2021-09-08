
<template>
    <base-layout page-title="Countries to Travel">
        <template v-slot:actions-end>
            <ion-button>
                <ion-icon slot="icon-only"
                :icon="add"></ion-icon>
            </ion-button>
        </template>
       
        <h2>Hello world, I´m just playing</h2>
        <h3>This is my top 10 </h3>
        <br/>
        <pages-list :pages="pages"></pages-list>

       

    </base-layout>
</template>

<script>
import{ IonButton, IonIcon } from '@ionic/vue';
import {add} from 'ionicons/icons';
import PagesList from '../components/base/memories/PagesList.vue';

export default{
    components:{
        PagesList,
        IonButton,
        IonIcon
    },
    data(){
        return {add};
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