<template>
  <section class="slider-section">

    <h3 class="slider-section-title">
      Our friends who <br>
      are looking for a house
    </h3>

    <carousel class="slider-section-carousel" ref="myCarousel" :items-to-show="3">
      <slide v-for="pet in pets" :key="pet.id">
        <pet-card :pet="pet" @buttonClick="handleModalShow"></pet-card>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <div class="slider-section-button">
      <nuxt-link to="/ourPets">
        <long-button>Get to know the rest</long-button>
      </nuxt-link>
    </div>

  </section>
</template>

<script setup>
import '../../assets/scss/carousel-owerwrite.scss'

import { Carousel, Slide, Navigation } from 'vue3-carousel'

import LongButton from '../../components/ui/LongButton.vue'
import PetCard from '../widgets/PetCard.vue'

import {onMounted, ref} from "vue"

const emit = defineEmits(['modalShow'])
const props = defineProps({
  pets: {
    type: Array,
    default: []
  }
})

const handleModalShow = petId => {
  emit('modalShow', petId)
}

// breakpoints(and some other features) for vue-carousel don't work in nuxt, and I made a simple function to update the count of slides and slides width

const myCarousel = ref()

const breakpoints = {
  1: [0, 768],
  2: [769, 1280],
  3: [1281, 10000]
}

onMounted(() => {
  myCarousel.value.data.config.snapAlign = 'start'
  myCarousel.value.restartCarousel()
  changeCarouselConfig()
  window.addEventListener('resize', debounce(changeCarouselConfig, 400))
})

const debounce = (func, delay) => {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  }
}

const changeCarouselConfig = () => {
  myCarousel.value.data.config.snapAlign = 'start'

  for (const key in breakpoints) {
    if (window.innerWidth >= breakpoints[key][0] && window.innerWidth <= breakpoints[key][1]) {
      myCarousel.value.data.config.itemsToShow = Number(key)
      myCarousel.value.updateSlideWidth()
    }
  }

}

</script>