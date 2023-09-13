<template>
  <div
      class=" unselectable"
      :class="{
      'button-round-pag-inactive' : isInactive,
      'button-round-pag-active' : !isInactive,
      'button-round-nav' : !isNav,
      'cursor-pointer' : !isInactive,
      }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import '../../assets/scss/components/buttons.scss'

const props = defineProps({
  isInactive: {
    type: Boolean,
    default: false
  },
  isNav: {
    type: Boolean,
    default: false
  }
})

</script>