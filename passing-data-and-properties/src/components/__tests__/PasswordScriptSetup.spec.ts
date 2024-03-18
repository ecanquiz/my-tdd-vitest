//https://test-utils.vuejs.org/
import { nextTick } from 'vue'
import { describe, test, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import Password from '../PasswordScriptSetup.vue'

test('renders an error if length is too short', async () => {
  const wrapper = mount(Password, {
    props: {
      minLength: 10
    },
    data() {
      return {
        password: 'short'
      }
    }
  })

 // await wrapper.setData({ password: 'short123' })
  await (wrapper.vm as any).$nextTick();
  console.log('ScripSetup 1 / props.minLength:', wrapper.vm.$props.minLength)
  console.log('ScripSetup 1 / data.password:', wrapper.vm.$data.password)
  console.log('ScripSetup 1 / data.password:', wrapper.vm.$data)

  console.log(wrapper.html())

  flushPromises()


  expect(wrapper.html()).toContain('Password must be at least 10 characters')
})

/*test('renders an error if length is too short', async () => {
  const wrapper = mount(Password)

  await wrapper.setData({ password: 'short' })
  await wrapper.setProps({ minLength: 10 })

  console.log('ScripSetup 2 / props.minLength:', wrapper.vm)
  console.log('ScripSetup 2 / data.password:', wrapper.vm)

  expect(wrapper.html()).toContain('Password must be at least 10 characters')
})*/
