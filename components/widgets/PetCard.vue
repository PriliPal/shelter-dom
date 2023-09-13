<template>
  <div class="pet-card">

    <img class="pet-card-image" :src="pet.url" alt="pet card image">

    <h4 class="pet-card-name">{{ pet.name }}</h4>

    <long-button class="pet-card-button" :is-primary="false" @click="emit('buttonClick', pet.id)">Learn more</long-button>

  </div>
</template>

<script setup>
import LongButton from "../ui/LongButton"
import 'assets/scss/components/pet-card.scss'

const emit = defineEmits(['buttonClick'])
const props = defineProps({
  pet: {
    type: Object,
  }
})
</script>