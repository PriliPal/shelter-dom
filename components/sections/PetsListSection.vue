<template>
  <section class="pets-list-section">

    <h3 class="pets-list-section-title">
      Our friends who <br>
      are looking for a house
    </h3>

    <div class="pets-list-section-cards">

      <div v-for="pet in displayedPets" class="pets-list-section-card">
        <pet-card :pet="pet" @buttonClick="handleModalShow"></pet-card>
      </div>

    </div>

    <div class="pets-list-section-nav">

      <round-button
          class="pets-list-section-nav-button"
          :is-inactive="0 === pageNumber"
          :is-nav="true"
          @click="changeCurrentPage(0, 0 === pageNumber)"
      >&lt&lt</round-button>

      <round-button
          class="pets-list-section-nav-button"
          :is-inactive="0 === pageNumber"
          :is-nav="true"
          @click="changeCurrentPage(pageNumber - 1, 0 === pageNumber)"
      >&lt</round-button>

      <div
          v-if="Math.ceil(pets.length/displayedPetsCount) !== Infinity"
          class="pets-list-section-nav-block"
      >
        <round-button
            v-for="page in Math.ceil(pets.length/displayedPetsCount)"
            class="pets-list-section-nav-button"
            :is-nav="!(pageNumber === page-1)"
            @click="pageNumber = page-1"
        >{{ page }}</round-button>
      </div>

      <round-button
          class="pets-list-section-nav-button"
          :is-inactive="Math.ceil(pets.length/displayedPetsCount) - 1 === pageNumber"
          :is-nav="true"
          @click="changeCurrentPage(pageNumber + 1, Math.ceil(pets.length/displayedPetsCount) - 1 === pageNumber)"
      >&gt</round-button>

      <round-button
          class="pets-list-section-nav-button"
          :is-inactive="Math.ceil(pets.length/displayedPetsCount) - 1 === pageNumber"
          :is-nav="true"
          @click="changeCurrentPage(Math.ceil(pets.length/displayedPetsCount) - 1, Math.ceil(pets.length/displayedPetsCount) - 1 === pageNumber)"
      >&gt&gt</round-button>

    </div>

  </section>
</template>

<script setup>
import PetCard from "../widgets/PetCard"

import {computed, onMounted, ref} from "vue"
import RoundButton from "../ui/RoundButton";

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

// pets displaying

const changeCurrentPage = (to, isInactive) => {
  if (!isInactive) {
    pageNumber.value = to
  }
}

const displayedPets = computed(() => {
  return props.pets.slice(pageNumber.value * displayedPetsCount.value, (pageNumber.value + 1) * displayedPetsCount.value)
})

const displayedPetsCount = ref(0)

const pageNumber = ref(0)

const breakpoints = {
  3: [0, 768],
  6: [769, 1280],
  8: [1281, 10000]
}

onMounted(() => {
  changeDisplayedPetsCount()
  window.addEventListener('resize', debounce(changeDisplayedPetsCount, 400))
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

const changeDisplayedPetsCount = () => {

  for (const key in breakpoints) {
    if (window.innerWidth >= breakpoints[key][0] && window.innerWidth <= breakpoints[key][1]) {
      displayedPetsCount.value = key
      pageNumber.value = 0
    }
  }

}

</script>