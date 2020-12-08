import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')
import store from './store'

Vue.config.productionTip = false

const configOptions = {
    apiKey: "AIzaSyBnO2n1WdEXJegoEesD1C6MSyk9u6ufxec",
    authDomain: "brunchguppy.firebaseapp.com",
    databaseURL: "https://brunchguppy.firebaseio.com",
    projectId: "brunchguppy",
    storageBucket: "brunchguppy.appspot.com",
    messagingSenderId: "212701320607",
    appId: "1:212701320607:web:8ba1415b06a9a9c885d9aa",
    measurementId: "G-NMWKFVL55P"
}

firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user)
})

const restaurantsCollection = firebase.firestore().collection('restaurants')

restaurantsCollection.onSnapshot((restaurantsRef) => {
  const restaurants = []
  restaurantsRef.forEach((doc) => {
    const restaurant = doc.data()
    restaurant.id = doc.id
    restaurants.push(restaurant)
  })
  store.restaurantsInFeed = restaurants
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
