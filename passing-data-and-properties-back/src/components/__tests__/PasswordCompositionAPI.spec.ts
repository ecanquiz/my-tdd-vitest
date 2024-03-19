import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Password from '../PasswordCompositionAPI.vue'

const minLength = 10
describe('PasswordCompositionAPI too short', () => {
  it('renders an error if length is too short 1', async () => {
    const wrapper = mount(Password, {
      props: { minLength }
    })

    const input = wrapper.find('input')
    await input.setValue('too-short')
   
    // to debug
    // console.log('CompositionAPI 1 / wrapper.vm.$props.minLength:', wrapper.vm.$props.minLength)
    // console.log('CompositionAPI 1 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('CompositionAPI 1 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters`)
  })

  it('renders an error if length is too short 2', async () => {
    const wrapper = mount(Password)

    await wrapper.setProps({ minLength })    
    const input = wrapper.find('input')
    await input.setValue('too-short')
  
    // to debug
    // console.log('CompositionAPI 2 / wrapper.vm.$props.minLength:', wrapper.vm.$props.minLength)
    // console.log('CompositionAPI 2 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('CompositionAPI 2 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters`)
  })
})

describe('PasswordCompositionAPI sufficiently long', async () => {
  it('does not generate an error if the length is sufficiently long 1', async () => {
    const wrapper = mount(Password, {
      props: { minLength },
    })

    const input = wrapper.find('input')
    await input.setValue('sufficiently-long')

    // to debug
    // console.log('CompositionAPI 3 / wrapper.vm.$props.minLength:', wrapper.vm.$props.minLength)
    // console.log('CompositionAPI 3 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('CompositionAPI 3 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).not.toContain(`Password must be at least ${minLength} characters`)
  })

  it('does not generate an error if the length is sufficiently long 2', async () => {
    const wrapper = mount(Password)

    await wrapper.setProps({ minLength })    
    const input = wrapper.find('input')
    await input.setValue('sufficiently-long')
    
    // to debug
    // console.log('CompositionAPI 4 / wrapper.vm.$props.minLength:', wrapper.vm.$props.minLength)
    // console.log('CompositionAPI 4 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // console.log('CompositionAPI 4 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).not.toContain(`Password must be at least ${minLength} characters`)
  })
})
