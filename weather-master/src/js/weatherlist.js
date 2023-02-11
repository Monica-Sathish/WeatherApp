import { mapActions, mapGetters } from 'vuex'

export default {
    name: "WeatherList",
    data() {
      return {
        weathers: [],
        currentWeather: null,
        isWeatherDeleted: null,
        currentIndex: -1,
        name: "",
      };
    },

    computed: {
        ...mapGetters([
            'getWeatherRes'
        ])
    },

    methods: {
     ...mapActions([
        'getWeatherAll',
        'deleteWeatherObj',
        'getWeatherData'
     ]),

      retrieveWeathers() {
        this.getWeatherAll()
        this.weathers = this.getWeatherRes;
        console.log("retrieveWeathers", this.weathers);
      },
  
      refreshList() {
        this.retrieveWeathers();
        this.currentWeather = null;
        this.currentIndex = -1;
        this.isWeatherDeleted = null;
        console.log("refresh list")
      },
  
      setActiveWeather(weather, index) {
        this.currentWeather = weather;
        this.currentIndex = index;
      },
  
      deleteWeather(id) {
            this.deleteWeatherObj(id)
            // this.$router.push({ name: "WeatherList" });
            this.retrieveWeathers();
            this.currentWeather = null;
            this.currentIndex = -1;
            this.isWeatherDeleted = 1;
      },
  
      searchWeatherName(city) {
        console.log("city search", city)
        this.getWeatherData(city)
        this.weathers = this.getWeatherRes
        console.log("search", this.weathers)
      },
    },
    // mount() {
    //   this.retrieveWeathers();
    //   this.refreshList();
    // },
  };