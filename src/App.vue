<template>
  <img alt="Vue logo" height="50" src="./assets/logo.png">
  <div id="main-menu">
    <router-link to="/" active-class="active">Home</router-link>
    |
    <router-link to="/persons" active-class="active">Persons</router-link>
  </div>
  <div id="page-content">
    <router-view></router-view>
  </div>
</template>

<script>
import '@/styles/index.css'
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#main-menu {
  margin-top: 10px;
}

#page-content {
  padding-top: 20px;
}
</style>
