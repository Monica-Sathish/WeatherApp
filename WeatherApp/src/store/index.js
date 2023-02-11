import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = {
    state,
    getters,
    mutations,
    actions
}
export default store

//const api = "http://localhost:8080/weather"

// const store = {
//     state: {
//         cities: [],
//         weather: {},
//         week: {}
//     },
//     getters: {
//         getCities(state) {
//             return state.cities;
//         },
//         getWeather(state) {
//             console.log("get",state.weather)
//             return state.weather;
//         },
//         getWeek(state){
//             return state.week;
//         }
//     },
//     mutations: {
//         setCities(state, val) {
//             state.cities = val;
//         },
//         setWeather(state, val) {
//             state.weather = val;
//             console.log("Set",state.weather)
//         },
//         setWeek(state, val) {
//             state.week = val;
//         }
//     },
//     actions: {
//         getCityList({ commit }) {
//             axios.get(api + '/get/cities').then(res => {
//                 commit('setCities',res.data)
//             })
//         },
//         getWeatherDetails({ commit }, city) {
//             console.log("Hello in action", city)
//             axios.get(api + '/' + city).then(res => {
//                 commit('setWeather', res.data)
//                 console.log("Response",res.data)
//             })
//         },
//         getWeekDetails({ commit }, city) {
//             axios.get(api+ '/week/' + city).then(res => {
//                 commit('setWeek', res.data)
//             })
//         }
//     }
// }
// export default store