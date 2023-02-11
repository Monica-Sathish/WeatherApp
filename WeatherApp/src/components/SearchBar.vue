<template>
  <div>
    <div class = "search"><input v-model = "search" placeholder = "Search.."/></div>
    <div class = "icon"><button @click = "trial"><i class = "fas fa-search"></i></button></div>
    <div v-if = "result == 'good'">
      <WeatherCard v-if = "showComponents" :weather=weather></WeatherCard>
      <CastCard v-if = "showComponents" :weather=weather :week=week></CastCard>
    </div>
    <div v-else-if = "result == 'empty' && search1 != ''">
      <NotFound v-if = "!showComponents"></NotFound>
    </div>
  </div>
</template>

  <script src="../js/search.js"></script>
<style>
@import "@/styles/Search.css"
</style>