<template>
    <div id="map" ref="map">
        <template v-if="!!this.google && !!this.map">
            <map-provider
                :google="google"
                :map="map"
            >
                <slot />
            </map-provider>
        </template>
    </div>
</template>
<script>
import MapProvider from './MapProvider'
import firebase from '../firebaseInit'
const db = firebase.firestore()

export default {
    name: 'MapView',
    props: {
        mapConfig: Object,
        apiKey: String
    },
    components: { 
      MapProvider 
    },
    data: () => ({
        map: null,
        google: null,
        restaurantsData: []
    }),
    methods: {
        getRestaurants() {
            db.collection('restaurants')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.restaurantsData.push({
                            id: doc.id,
                            name: doc.data().name,
                            location: doc.data().location
                        })
                        console.log({id: doc.id,
                            name: doc.data().name,
                            location: doc.data().location})
                    })
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }
    },
    mounted() {
        this.getRestaurants()
        this.map = new window.google.maps.Map(this.$refs["map"], {
            center: { lat: 39.75963977962454, lng: -105.0133786 },
            zoom: 15
        })
    }
}
</script>
<style scoped>
    #map {
        height: 600px;
        background: grey;
    }
</style>