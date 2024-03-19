<script setup lang="ts">
import {reactive, ref} from 'vue'
import Spinner from './components/Spinner.vue'
//import CardValidation from './components/CardValidation.vue'
import Modal from './components/Modal.vue'

const modalData= reactive({
 show: false,
 title: 'My Título'
})

const isLoading=ref(true)

const emitEvent = ()=>{}
</script>

<template>
<div @emitEvent="emitEvent">sdfsdf
<!--Spinner v-if="isLoading" :msg="'xyz'"></Spinner>
  <Modal  :show="modalData.show" :title="modalData.title">
    <CardValidation>@onHideModal="hideModal"</CardValidation>
    <div>Algo</div>
  </Modal>
  <div v-if="!isLoading" class=" ml-auto mr-auto mt-20">
  </div-->
</div>
</template>


