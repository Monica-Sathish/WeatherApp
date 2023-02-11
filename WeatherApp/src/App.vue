<template>
  <div id="app">
    <HeaderSection/>
    <SearchBar/>
  </div>
  </template>
  
  <script>
  //import HelloWorld from './components/HelloWorld.vue'
  import HeaderSection from './components/HeaderSection.vue';
  import SearchBar from './components/SearchBar.vue';
  
  export default {
    name: 'App',
  
    components: {
      HeaderSection,
      SearchBar
  },
  
    data: () => ({
      //
    }),
  }
  </script>
  
  <style>
  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
  }
  </style>
  