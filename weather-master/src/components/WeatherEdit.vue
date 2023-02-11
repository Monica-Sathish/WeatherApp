<template>
  <div v-if = "message==''">
    <div v-if="currentWeather" class="edit-form">
      <h4>-: Edit Weather Details :-</h4>
      <br />
      <form>
        <div class="form-group">
          <label for="city">City:</label>
          <input
            type="text"
            class="form-control"
            id="city"
            v-model="currentWeather.city"
          />
        </div>
        <br />
  
        <div class="form-group">
          <label for="time">Time:</label>
          <input
            type="datetime-local"
            class="form-control"
            id="time"
            v-model="currentWeather.time"
          />
        </div>
        <br />
  
        <div class="form-group">
          <label for="humidity">Humidity:</label>
          <input
            type="number"
            step=0.01
            class="form-control"
            id="humidity"
            v-model="currentWeather.humidity"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="dewPoint">Dew Point:</label>
          <input
            type="number"
            step=0.01
            class="form-control"
            id="dewPoint"
            v-model="currentWeather.dewPoint"
          />
        </div>
        <br />
        <br />
      </form>
  
      <button
        type="submit"
        class="btn btn-warning"
        style="margin: 10px"
        @click="updateWeather"
      >
        Update
      </button>
    </div>
    <div v-else>
      <br />
      <p>Click on Weather's to view details..</p>
    </div>
  </div>
  <div v-else>
    <p>{{ message }}</p>
  </div>
  </template>
  
  <script src="@/js/weatheredit">
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>