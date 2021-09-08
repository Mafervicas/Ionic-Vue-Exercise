<template>
 <ion-list>
            <ion-item 
            :router-link="`/pages/${page.id}`" 
            :key="page.id">

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
    
</template>

<script>
import{IonItem, IonThumbnail, IonImg, IonLabel} from "@ionic/vue";
export default {
    props: ["page"],
    components: {
        IonItem, IonThumbnail, IonImg, IonLabel
    }
}
</script>