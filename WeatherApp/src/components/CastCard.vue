<template>
<div>
    <div class="hourcast" v-if="weather[0].city!=null">
        <h3>Next 6 Hours Forecast</h3><br>
        <div class="hour" v-for="(weat) in weather" :key="weat.id">
            <h6> {{ moment(weat.time).format('LT') }}</h6>
            <img :src="'https://cdn.weatherapi.com/weather/64x64/day/'+weat.icon+'.png'">
            <p>Temperature: {{ weat.temperature.toFixed(0) }}&deg;C</p>
            <p>Humidity: {{ weat.humidity}}</p>
        </div>
    </div>
    <div class="hourcast" v-if="week[0].city!=null">
        <h3>Week Forecast</h3><br>
        <div v-for="(day) in week" :key="day.id">
            <div class = "hour">
                <h6>{{ moment(day.time).format('dddd') }}</h6>
                <img :src="'https://cdn.weatherapi.com/weather/64x64/day/'+day.icon+'.png'">
                <p>Temperature: {{day.temperature.toFixed(0)}}&deg;C</p>
                <p>Humidity: {{day.humidity}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script src="../js/cast.js"></script>
<style>@import "@/styles/Cast.css"</style>
