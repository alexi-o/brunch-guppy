<template>
  <div id="app">
    <div id="nav">
      <div v-if="user.loggedIn">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <a href="" @click.prevent="signOut">Sign Out</a>
      </div>
      <div v-else>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/map">Map</router-link> ||
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>

import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          })
        })
    }
  }  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
