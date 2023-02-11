import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const api = "http://localhost:8080/weather"

const actions = {
    getCityList({ commit }) {
        axios.get(api + '/get/cities').then(res => {
            commit('setCities',res.data)
        })
    },
    getWeatherDetails({ commit }, city) {
        console.log("Hello in action", city)
        axios.get(api + '/' + city).then(res => {
            commit('setWeather', res.data)
        })
    },
    getWeekDetails({ commit }, city) {
        axios.get(api+ '/week/' + city).then(res => {
            commit('setWeek', res.data)
        })
    }
}
export default actions