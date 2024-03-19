import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders properly', () => {
    const wrapper = mount(App,{
      data() {
        return {
          isLoading: false,
          modalData: {
            title: 'Tarjeta de crédito',
            show: true
          }
        }
      }})
    
    
    console.log(wrapper.vm.emitEvent)
    console.log(wrapper.vm.modalData)
    console.log(wrapper.vm.isLoading)
    //expect(wrapper.vm.isLoading).toBe(false)
    //expect(wrapper.text()).toContain('Hello Vitest')
  })
})


