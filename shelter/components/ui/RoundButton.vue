<template>
  <div
      class="cursor-pointer unselectable"
      :class="isActive ? 'button-round-active' : 'button-round-inactive'"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import '../../assets/scss/buttons.scss'
import '../../assets/scss/helpers.scss'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: true
  }
})

</script>