<template>
    <div class="submit-form">
      <div v-if="!submitted">
        <h3>-: Weather Details :-</h3>
        <br />
  
        <div class="form-group">
          <label for="city">City:</label>
          <input
            type="text"
            class="form-control"
            id="city"
            required
            v-model="weather.city"
            name="city"
          />
        </div>
        <br />
  
        <div class="form-group">
          <label for="time">Time:</label>
          <input
            type="datetime-local"
            class="form-control"
            id="time"
            required
            v-model="weather.time"
            name="time"
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
            required
            v-model="weather.humidity"
            name="humidity"
          />
        </div>
        <br />

        <div class="form-group">
          <label for="dewPoint">Dew point:</label>
          <input
            type="number"
            step="0.01"
            class="form-control"
            id="dewPoint"
            required
            v-model="weather.dewPoint"
            name="dewPoint"
          />
        </div>
        <br />
  
        <br />
        <button @click="saveProduct" class="btn btn-primary">Submit</button>
      </div>
  
      <div v-else>
        <br /><br /><br />
        <h5>Weather added successfully :)</h5>
      </div>
    </div>
  </template>
  
<script src="@/js/addweather"></script>

  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>