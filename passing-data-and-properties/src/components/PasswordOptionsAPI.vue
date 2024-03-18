<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
})
</script>

<template>
  <div>
      <input v-model="password">
      <div v-if="error">{{ error }}</div>
    </div>
</template>
