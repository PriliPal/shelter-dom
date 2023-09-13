<template>
  <div
      class="cursor-pointer unselectable"
      :class="isPrimary ? 'button-primary-long' : 'button-secondary-long '"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import '../../assets/scss/components/buttons.scss'

const props = defineProps({
  isPrimary: {
    type: Boolean,
    default: true
  }
})

</script>