
// import {render} from '@testing-library/vue'
import { mount } from '@vue/test-utils'
import HeaderSection from "@/components/HeaderSection"

test('App Name at the Header Section', async () => {
  const wrapper = mount(HeaderSection)
  expect(wrapper.text()).toBe('VEATHER')
})
