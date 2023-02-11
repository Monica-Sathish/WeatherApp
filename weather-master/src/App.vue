<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/weathers" class="navbar-brand" style="margin-left: 22%;">Weather Master</router-link>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>


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
}
</style>
