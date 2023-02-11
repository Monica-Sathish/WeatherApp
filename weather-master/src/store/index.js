import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const api = "http://localhost:8080/weather"

const store = {
    state: {
        weather: {},
        weatherRes: {}
    },

    getters: {
        getWeatherRes(state) {
            console.log("get res",state.weatherRes)
            return state.weatherRes
        },
        getWeather(state) {
            return state.weather
        }
    },

    mutations: {
        setWeatherResponse(state, val) {
            state.weatherRes = val
            console.log("state Res",state.weatherRes)
        },
        setWeather(state, val) {
            state.weather = val;
        }
    },

    actions: {
        addWeather ({ commit }, weatherObj) {
            axios.post(api + '/add', weatherObj).then(res => {
                commit('setWeatherResponse', res.data)
            })
        },
        updateWeatherObj ({ commit }, weatherObj) {
            axios.put(api + '/update',weatherObj).then( res => {
                commit('setWeatherResponse', res.data)
            })
        },
        getWeatherId ({ commit }, id) {
            axios.get(api + '/weather/weatherid/'+id).then(res => {
                commit('setWeatherResponse', res.data)
                console.log("respo",res.data)
            })
        },
        getWeatherAll ({ commit }) {
            axios.get(api + '/get/all').then(res => {
                commit('setWeatherResponse', res.data)
                console.log("getWeat all",res.data)
            })
        },
        deleteWeatherObj(id) {
            axios.delete(api + '/delete/' + id)
        },
        getWeatherData ( {commit}, city) {
            axios.get(api + '/'+ city).then(res => {
                commit('setWeatherResponse', res.data)
            })
        }
    }
}
export default store