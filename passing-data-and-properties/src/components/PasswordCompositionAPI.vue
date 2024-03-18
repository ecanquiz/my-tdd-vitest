<script lang="ts">
import {defineComponent, ref, computed} from 'vue'

export default defineComponent({
  props: {
    minLength: {
      type: Number
    }
  },
  setup(props) {
    const password = ref('123')

    const error = computed(()=> {
      if (password.value.length < props.minLength) {
        return `Password must be at least ${props.minLength} characters.`
      }
      return
    })
    
    return {
      password,
      error
    }
  }
})
</script>

<template>
  <div>
      <input v-model="password">
      <div v-if="error">{{ error }}</div>
    </div>
</template>
