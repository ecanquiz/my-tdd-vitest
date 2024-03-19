<script setup lang="ts">
import {ref, computed} from 'vue'

const password = ref('')

const props = defineProps<{ minLength: number }>()

const error = computed(()=> {
  if (password.value.length < props.minLength) {
    return `Password must be at least ${props.minLength} characters.`
  }
  return
})
</script>

<template>
  <div>
    <input v-model="password">
    <div v-if="error">{{ error }}</div>
  </div>
</template>
