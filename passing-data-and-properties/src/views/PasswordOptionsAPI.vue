<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() { return { password: '' } },
  props: { minLength: { type: Number } },
  computed: {
    error() {
      if (this.minLength && this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`
      }
      return
    }
  }
})
</script>

<template>
  <div>
    <h1>With Options API</h1>
    <input v-model="password">
    <div v-if="error">{{ error }}</div>
  </div>
</template>
