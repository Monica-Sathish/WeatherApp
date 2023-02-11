<template>
    <div class="list row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search by City"
            v-model="city"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchWeatherName(city)"
            >
              Search
            </button>
  
            <a
              href="/add"
              class="btn btn-primary"
              style="margin-left: 32px"
              role="button"
            >
              + Add</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <br />
        <h4 v-if="city">Weather List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(weat, index) in weathers"
            :key="index"
            @click="setActiveWeather(weat, index)"
          >
            {{ moment(weat.time).format('LLL') }}
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentWeather">
          <br /><br />
          <h4>Weather Details:</h4>
          <div>
            <label><strong>City:</strong></label> {{ currentWeather.city }}
          </div>
          <div>
            <label><strong>Date & Time:</strong></label> {{ moment(currentWeather.time).format('LLL') }}
          </div>
          <div>
            <label><strong>Temperature:</strong></label> {{ currentWeather.temperature }}
          </div>
          <div>
            <label><strong>Humidity:</strong></label> {{ currentWeather.humidity }}
          </div>
          <div>
            <label><strong>Dew Point:</strong></label>
            {{ currentWeather.dewPoint }}
          </div>
  
          <br />
          <router-link :to="'/weathers/' + currentWeather.id" class="btn btn-info"
            >Edit</router-link
          >
  
          <button
            class="btn btn-danger"
            style="margin: 10px"
            @click="deleteWeather(currentWeather.id)"
          >
            Delete
          </button>
        </div>
        <div v-else>
          <br />
          <p>Search & Click on Weather to view details..</p>
        </div>
  
        <div v-if="isWeatherDeleted">
          <br />
          <p>Weather deleted successfully.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script src="@/js/weatherlist">
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>