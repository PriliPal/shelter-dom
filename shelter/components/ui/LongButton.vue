<template>
  <div
      class="cursor-pointer unselectable"
      :class="isPrimary ? 'button-primary-long' : 'button-secondary-long '"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import '../../assets/scss/buttons.scss'
import '../../assets/scss/helpers.scss'

const props = defineProps({
  isPrimary: {
    type: Boolean,
    default: true
  }
})

</script>