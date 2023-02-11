import { shallowMount } from '@vue/test-utils'
import SearchBar from "@/components/SearchBar.vue"

test('Search Box Available or Not', async () => {
  const wrapper = shallowMount(SearchBar)
  const input = wrapper.find('input')
  expect(input.attributes().placeholder).toBe('Search..')
})

test('Search Button Present or Not', async () => {
  const wrapper = shallowMount(SearchBar)
  const button = wrapper.find('button')
  expect(button.exists()).toBe(true)
})
