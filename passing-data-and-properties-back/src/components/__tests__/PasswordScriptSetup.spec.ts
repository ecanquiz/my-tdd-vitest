import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Password from '../PasswordScriptSetup.vue'

const minLength = 10
describe('PasswordScripSetup too short', () => {
  it('renders an error if length is too short', async () => {
    const wrapper = mount(Password, {
      props: { minLength }
    })

    // await wrapper.setProps({ minLength })
    const input = wrapper.find('input')
    await input.setValue('too-short')
   
    // to debug
    // console.log('ScripSetup 1 / wrapper.vm.$props.minLength:', wrapper.vm.$props.minLength)
    // console.log('ScripSetup 1 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // // @ts-ignore
    // console.log('ScripSetup 1 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters`)
  })
})

describe('PasswordCompositionAPI sufficiently long', async () => {
  it('does not generate an error if the length is sufficiently long', async () => {
    const wrapper = mount(Password, {
      props: { minLength },
    })

    // await wrapper.setProps({ minLength })
    const input = wrapper.find('input')
    await input.setValue('sufficiently-long')

    // to debug
    // console.log('CompositionAPI 3 / wrapper.vm.$props.minLength:', wrapper.vm.$props.minLength)
    // console.log('CompositionAPI 3 / wrapper.vm.minLength:', wrapper.vm.minLength)
    // // @ts-ignore
    // console.log('CompositionAPI 3 / wrapper.vm.password:', wrapper.vm.password)
    // console.log(wrapper.html())
  
    expect(wrapper.html()).not.toContain(`Password must be at least ${minLength} characters`)    
  })
})
