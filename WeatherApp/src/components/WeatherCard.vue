<template>
    <div class="card">
      <div class="container">
        <h3>{{weather[0].city}}</h3>
        <img :src="'https://cdn.weatherapi.com/weather/64x64/day/'+weather[0].icon+'.png'">
          <p>{{ moment(weather[0].time).format('LL') }}</p>
          <h3>{{ weather[0].temperature.toFixed(0) }}&deg;C</h3>
      </div>
    </div>
</template>

<script src ="../js/card.js"></script>

<style> @import "@/styles/Card.css"</style>