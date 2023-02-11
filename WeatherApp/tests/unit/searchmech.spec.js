import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import  getter  from '@/store/getters'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

const localVue = createLocalVue()
localVue.use(Vuex)

let url = ''

jest.mock("axios", () => ({
    get: (_url) => {
        return new Promise((resolve) => {
            url = _url
            resolve(true)
        })
    }
}))
describe('Weather', () => {
    const expectedResult = {
        "id": "631ebbe55a348d33c81de397",
        "time": "2022-09-30T21:30:28.885489",
        "city": "Bengaluru",
        "humidity": 40.0,
        "dewPoint": 40.0,
        "temperature": 58.24,
        "description": "Climate Unpredictable",
        "icon": "176"
    }

    const cities = [
        "Bengaluru",
        "Chennai",
        "Coimbatore"
    ]

    const expectedWeek = [
        {
            "id": "631eeaa45a348d33c81de399",
            "time": "2022-09-16T21:30:28.885",
            "city": "Bengaluru",
            "humidity": 40.0,
            "dewPoint": 40.0,
            "temperature": 58.24,
            "description": "Climate Unpredictable",
            "icon": "176"
        },
        {
            "id": "630ddd667880404559eabd73",
            "time": "2022-09-17T20:30:28.885",
            "city": "Bengaluru",
            "humidity": 79.89,
            "dewPoint": 30.1,
            "temperature": 23.966360334504955,
            "description": "Light Shower",
            "icon": "353"
        }
    ]

    const newState = {
        cities: [],
        weather: [],
        week: []
    }

    const weatherState = {
        cities: cities,
        weather: expectedResult,
        week: []
    }
    
    const cityState = {
        cities: cities,
        weather: [],
        week: []
    }

    const weekState = 
    {
        cities: cities,
        weather: expectedResult,
        week: expectedWeek
    }

    it('pass and get City Details', async () => {
        const commit = jest.fn()
        await actions.getCityList({ commit })
        expect(url).toBe("http://localhost:8080/weather/get/cities")
        mutations.setCities(newState, cities)
        console.log("Test Print", newState)
        expect(newState).toEqual(cityState)
        expect(getter.getCities(cityState)).toBe(cities)
    })

    it('pass and get Weather Day Details', async () => {
        const commit = jest.fn()
        await actions.getWeatherDetails({ commit }, 'Bengaluru')
        expect(url).toBe("http://localhost:8080/weather/Bengaluru")
        mutations.setWeather(newState, expectedResult)
        console.log("Test Print", newState)
        expect(newState).toEqual(weatherState)
        expect(getter.getWeather(weatherState)).toBe(expectedResult)
    })

    it('pass and get Weather Week Details', async () => {
        const commit = jest.fn()
        await actions.getWeekDetails({ commit }, 'Bengaluru')
        expect(url).toBe("http://localhost:8080/weather/week/Bengaluru")
        mutations.setWeek(newState, expectedWeek)
        console.log("Test Print", newState)
        expect(newState).toEqual(weekState)
        expect(getter.getWeek(weekState)).toBe(expectedWeek)
    })
})









        // const wrapper = shallowMount(SearchBar, { store, localVue, global: {
        //     plugins:[search]
        // }})
        // const input = wrapper.find('input')
        // await input.setValue('Bengaluru')
        // const button = wrapper.find('button')
        // button.trigger('click')