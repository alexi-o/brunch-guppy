import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
