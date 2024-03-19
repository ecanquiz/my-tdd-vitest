<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: { minLength: { type: Number } },
  setup(props) {
    const password = ref('')

    const error = computed(()=> {
      if (props.minLength && password.value.length < props.minLength) {
        return `Password must be at least ${props.minLength} characters.`
      }
      return
    })
    
    return { password, error }
  }
})
</script>

<template>
  <div>
    <h1>With Composition API</h1>
    <input v-model="password">
    <div v-if="error">{{ error }}</div>
  </div>
</template>
