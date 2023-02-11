import { mapActions, mapGetters } from 'vuex'

export default {
    name: "AddWeather",
    data() {
      return {
        weather: {},
        weatherRes: {},
        submitted: false,
      };
    },
    computed: {
        ...mapGetters([
            'getWeatherRes',
        ])
    },

    methods: {
     ...mapActions([
        'addWeather',
     ]),

      saveProduct() {
        var data = {
          city: this.weather.city,
          time: this.weather.time,
          humidity: this.weather.humidity,
          dewPoint: this.weather.dewPoint,
        };
        console.log(data);
        this.addWeather(data);

        console.log(this.getWeatherRes)
        this.weatherRes = this.getWeatherRes
        this.submitted = true
        
      },
  
      newProduct() {
        this.submitted = false;
        this.weather = {};
      },
    },
  };