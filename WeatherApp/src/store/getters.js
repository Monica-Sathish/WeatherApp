const getters = {
    getCities(state) {
        return state.cities;
    },
    getWeather(state) {
        console.log("get",state.weather)
        return state.weather;
    },
    getWeek(state){
        return state.week;
    }
}
export default getters