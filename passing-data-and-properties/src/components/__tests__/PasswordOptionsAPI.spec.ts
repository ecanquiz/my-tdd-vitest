import { nextTick } from 'vue'
import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Password from '../PasswordOptionsAPI.vue'

test('renders an error if length is too short', () => {
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

  console.log('OptionsAPI 1 / props.minLength:', wrapper.vm.minLength)
  console.log('OptionsAPI 1 / data.password:', wrapper.vm.password)

  expect(wrapper.html()).toContain('Password must be at least 10 characters')
})

test('renders an error if length is too short', async () => {
  const wrapper = mount(Password)

  await wrapper.setData({ password: 'short' })
  await wrapper.setProps({ minLength: 10 })

  console.log('OptionsAPI 2 / props.minLength:', wrapper.vm.minLength)
  console.log('OptionsAPI 2 / data.password:', wrapper.vm.password)

  expect(wrapper.html()).toContain('Password must be at least 10 characters')
})
