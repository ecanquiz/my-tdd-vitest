import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Password from '../PasswordOptionsAPI.vue'

const minLength = 10
describe('PasswordOptionsAPI too short', () => {
  it('renders an error if length is too short 1', () => {
    const wrapper = mount(Password, {
      props: { minLength },
      data() { return { password: 'too-short' } }
    })
  
    // to debug
    // console.log('OptionsAPI 1 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('OptionsAPI 1 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters`)
  })
  
  it('renders an error if length is too short 2', async () => {
    const wrapper = mount(Password)
    await wrapper.setProps({ minLength })
    await wrapper.setData({ password: 'too-short' })
  
    // to debug
    // console.log('OptionsAPI 2 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('OptionsAPI 2 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters`)
  })
})

describe('PasswordOptionsAPI sufficiently long', () => {
  it('does not generate an error if the length is sufficiently long 1', () => {
    const wrapper = mount(Password, {
      props: { minLength },
      data() { return { password: 'sufficiently-long' } }
    })
  
    // to debug
    // console.log('OptionsAPI 3 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('OptionsAPI 3 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).not.toContain(`Password must be at least ${minLength} characters`)
  })

  it('does not generate an error if the length is sufficiently long 2', async () => {
    const wrapper = mount(Password)
    await wrapper.setProps({ minLength })
    await wrapper.setData({ password: 'sufficiently-long' })
  
    // to debug
    // console.log('OptionsAPI 4 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('OptionsAPI 4 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).not.toContain(`Password must be at least ${minLength} characters`)
  })
})
  









