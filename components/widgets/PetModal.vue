<template>
  <div class="modal-window-background" @click="emit('close')">

    <div @click.stop  class="modal-window">

      <cross class="modal-window-cross cursor-pointer" @click="emit('close')"></cross>

      <img class="modal-window-image" :src="pet.url" alt="pet in modal window">

      <div class="modal-window-content">

        <h3 class="modal-window-content-name">
          {{ pet.name }}
        </h3>

        <h4 class="modal-window-content-species">
          {{ pet.species }} - {{ pet.breed }}
        </h4>

        <h5 class="modal-window-content-description">
          {{ pet.description }}
        </h5>

        <ul class="modal-window-content-options">

          <li v-for="(option, key) in pet.options" class="modal-window-content-options-el">
            <span class="modal-window-content-options-el-key">{{ key }}: </span><span class="modal-window-content-options-el-value">{{ option }}</span>
          </li>

        </ul>

      </div>

    </div>

  </div>
</template>

<script setup>
import 'assets/scss/components/pet-modal.scss'
import Cross from "../svg/cross"

const emit = defineEmits(['close'])
const props = defineProps({
  pet: {
    type: Object
  }
})

</script>