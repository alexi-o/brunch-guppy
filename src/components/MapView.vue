<template>
    <div id="map" ref="map"></div>
</template>
<script>
import firebase from 'firebase'
const db = firebase.firestore()

export default {
    data: () => ({
        map: null,
        restaurantsData: []
    }),
    methods: {
        getRestaurants() {
            this.restaurantsData = []
            db.collection('restaurants')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.restaurantsData.push({
                            id: doc.id,
                            name: doc.data().name,
                            location: doc.data().location
                        })
                    })
                })
        }
    },
    mounted() {
        console.log("bleh", this.getRestaurants())
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