import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from './firebaseInit'
require('firebase/auth')
require('firebase/firestore')
import store from './store'

Vue.config.productionTip = false

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
