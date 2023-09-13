<template>

  <section class="start-section">

    <header-primary :is-burger-opened="isBurgerOpened" @scrollTo="scrollHandler" @openBurgerMenu="emit('openBurgerMenu')"></header-primary>

    <section class="start-section-body">

      <div class="start-section-content">

        <h2 class="start-section-content-title">
          Not only people <br> need a house
        </h2>

        <span class="start-section-content-description">
            We offer to give a chance to a little and nice puppy with an extremely wide and open heart.
            He or she will love you more than anybody else in the world, you will see!
          </span>

        <nuxt-link to="/ourPets">
          <long-button class="start-section-content-button">Make a friend</long-button>
        </nuxt-link>

      </div>

      <img class="start-section-image" src="../../public/dog.png" alt="dog image">

    </section>

  </section>

</template>

<script setup>
import HeaderPrimary from './HeaderPrimary.vue';
import LongButton from '../ui/LongButton.vue'

const emit = defineEmits(['scrollTo', 'openBurgerMenu'])
const props = defineProps({
  isBurgerOpened: {
    type: Boolean,
    default: false
  }
})

const scrollHandler = (elName) => {
  emit('scrollTo', elName)
}
</script>