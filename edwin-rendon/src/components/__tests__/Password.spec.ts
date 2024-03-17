import { nextTick } from 'vue'
import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Password from '../Password.vue'

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

  //await nextTick()
  
  await wrapper.setProps({ password: 1234567890 })
  
  console.log(wrapper.vm)
  console.log(wrapper.vm.password)
  console.log(wrapper.vm.minLength)
  expect(wrapper.html()).toContain('Password must be at least 10 characters')
})
