<!--script setup lang="ts">
import {reactive, ref, computed} from 'vue'

const password = ref('123')

const props = defineProps<{
  minLength: number
}>()

const error = computed(()=> {
  if (password.value.length < props.minLength) {
    return `Password must be at least ${props.minLength} characters.`
  }
  return
})
</script-->

<!--script lang="ts">
import {reactive, ref, computed} from 'vue'

export default {
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
}
</script-->

<script lang="ts">
export default {
  data() {
    return {
      password: '123'
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
</script>

<template>
  <div>
      <input v-model="password">
      <div v-if="error">{{ error }}</div>
    </div>
</template>
