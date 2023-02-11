import { mapActions, mapGetters } from 'vuex'

export default {
    name: "WeatherEdit",
    data() {
      return {
        currentWeather: null,
        message: "",
      };
    },

    computed: {
        ...mapGetters([
            'getWeatherRes'
        ])
    },

    methods: {
     ...mapActions([
        'getWeatherId',
        'updateWeatherObj'
     ]),

      getWeather(id) {
        console.log("getWeather", id)
        this.getWeatherId(id)
        this.currentWeather = this.getWeatherRes
        console.log("get weather",this.currentWeather)
      },

      updateWeather() {
        this.updateWeatherObj(this.currentWeather)
        console.log(this.getWeatherRes);
        this.message = "Updated Successfully"
      }

    },
    mounted() {
      this.message = "";
      this.getWeather(this.$route.params.id);
    },

  };