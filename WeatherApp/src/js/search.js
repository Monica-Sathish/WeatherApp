import WeatherCard from "@/components/WeatherCard.vue";
import CastCard from "@/components/CastCard.vue";
import NotFound from "@/components/NotFound.vue";
import { mapActions, mapGetters } from 'vuex'


export default {
  components: {
    'WeatherCard' : WeatherCard,
    'CastCard' : CastCard,
    'NotFound' : NotFound
  },

  data: function () {
    return {
      search: "",
      search1: "",
      weather: {},
      week: {},
      showComponents: false,
      result: ""
    }
  },

  computed: {
    ...mapGetters([
      'getCities',
      'getWeather',
      'getWeek'
    ])
  },

  methods:{
    ...mapActions([
      'getWeatherDetails',
      'getCityList',
      'getWeekDetails'
    ]),

    trial() {
      console.log("Hi in trial")
      this.search1 = this.search
      console.log("Actions are below")
      this.getWeatherDetails(this.search1)
      this.getWeekDetails(this.search1)
      console.log("getWeather",this.getWeather)
      if(this.getWeather.length == 0) {
        this.result = "empty"
        console.log("Empty")
        this.showComponents = false
      } else {
        this.result = "good"
        this.weather = this.getWeather
        this.week = this.getWeek
        this.showComponents = true
        console.log("Good", this.getWeather)
      }
    }
  }
}