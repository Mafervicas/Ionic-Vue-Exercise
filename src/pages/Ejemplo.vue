
<template>
    <base-layout page-title="Vista 1">
        <h2>Hello world</h2>
        <h3>I´m just playing</h3>

        <ion-list>
            <ion-item v-for="page in pages" :router-link="`/pages/${page.id}`" :key="page.id">

                <ion-thumbnail>
                    <slot one="start">
                        <ion-img :src="page.image" :alt="page.title">
                        </ion-img>
                    </slot>
                </ion-thumbnail>
                <ion-label>
                    {{page.title}}
                </ion-label>
            </ion-item>
        </ion-list>

    </base-layout>
</template>

<script>

import {
    IonList,
    IonItem,
    IonImg, 
    IonThumbnail,
    IonLabel
    } from '@ionic/vue';


export default{
    components:{
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel
    },
    computed: {
        pages(){
            return this.$store.getters.pages;
        }
    }

};

</script>

<style scoped>
ion-title{
    text-align: center;
}
</style>