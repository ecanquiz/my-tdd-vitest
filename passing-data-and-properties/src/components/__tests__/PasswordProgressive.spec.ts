import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

const Password = {
  template: `
    <div>
      <input v-model="password">
      <div v-if="error">{{ error }}</div>
    </div>
  `,
  data() {
    return {
      password: ''
    }
  },
  props: {
    minLength: {
      type: Number
    }
  },
  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`
      }
      return
    }
  }
}

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

    console.log('Progresive 1 / props.minLength:', wrapper.vm.minLength)
    console.log('Progresive 1 / data.password:', wrapper.vm.password)

    expect(wrapper.html()).toContain('Password must be at least 10 characters')
  })

  test('renders an error if length is too short', async () => {
    const wrapper = mount(Password)

    await wrapper.setData({ password: 'short' })
    await wrapper.setProps({ minLength: 10 })

    console.log('Progresive 2 / props.minLength:', wrapper.vm.minLength)
    console.log('Progresive 2 / data.password:', wrapper.vm.password)

    expect(wrapper.html()).toContain('Password must be at least 10 characters')
  })
  