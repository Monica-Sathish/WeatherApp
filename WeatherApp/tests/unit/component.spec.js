import { shallowMount } from "@vue/test-utils"
import '@testing-library/jest-dom'
import SearchBar from "@/components/SearchBar"
import WeatherCard from "@/components/WeatherCard.vue";
import CastCard from "@/components/CastCard.vue";

describe("SearchBar", () => {
    const wrapper = shallowMount(SearchBar)

  it("does not render a Weather Card component", () => {
    expect(wrapper.findComponent(WeatherCard).exists()).toBe(false)
    expect(wrapper.findComponent(CastCard).exists()).toBe(false)
  })

  it("renders a Weather Card component", () => {
    const wrapper = shallowMount(SearchBar, {
        data() {
            return { showComponents: true }
        }
    })    
    expect(wrapper.findComponent({ name: "WeatherCard" }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: "CastCard" }).exists()).toBe(true)
    })
})