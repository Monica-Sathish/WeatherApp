const mutations = {
    setCities(state, val) {
        state.cities = val;
    },
    setWeather(state, val) {
        state.weather = val;
        console.log("Set",state.weather)
    },
    setWeek(state, val) {
        state.week = val;
    }
}
export default mutations