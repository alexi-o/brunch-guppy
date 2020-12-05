<template>
    <div id="map" ref="map"></div>
</template>
<script>
export default {
    data: () => ({
        map: null
    }),
    mounted() {
        this.map = new window.google.maps.Map(this.$refs["map"], {
            center: { lat: 39.75963977962454, lng: -105.0133786 },
            zoom: 15
        })
        new window.google.maps.Marker({
            position: { lat: 39.75963977962454, lng: -105.0133786 },
            map: this.map
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