<script setup lang="ts">
import {ref} from "vue"
import axios from "axios"

const arr = ref([])
 


 axios.get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    arr.value = response.data
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
  
  
</script>

<template>
<div>{{ arr }}</div>
</template>