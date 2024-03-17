<script setup lang="ts">
const props = defineProps<{
  show: Boolean;
  title: string
}>()
</script>

<template>
  <div>Modal
    <span>{{props.show}}</span>
    <span>{{props.title}}</span>
  </div>
</template>
