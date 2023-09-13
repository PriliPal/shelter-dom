<template>
  <div class="container">

    <pet-modal
        v-if="modal.visibility.value"
        :pet="petInModal"
        @close="modal.hide()"
    ></pet-modal>

    <header-secondary
        :is-burger-opened="burger.isBurgerOpened.value"
        @openBurgerMenu="openBurgerMenu"
    ></header-secondary>

    <pets-list-section
        :pets="pets"
        @modalShow="handleModalShow"
    ></pets-list-section>

    <footer-primary></footer-primary>

  </div>
</template>

<script setup>
import '../assets/scss/container.scss'

import FooterPrimary from '../components/sections/FooterPrimary'
import HeaderSecondary from '../components/sections/HeaderSecondary'
import PetsListSection from '../components/sections/PetsListSection'

import PetModal from '../components/widgets/PetModal.vue'

import useBurger from '../composables/burger.js'
import useModal from '../composables/modal.js'
import usePets from '../composables/pets'

import { ref } from 'vue'

const burger = useBurger()

const openBurgerMenu = () => {
  burger.hideOrOpenBurger()
}

// modal window

const modal = useModal()

const petInModal = ref()

const handleModalShow = petId => {

  pets.value.forEach(pet => {
    if (pet.id === petId) {
      petInModal.value = pet
    }
  })

  modal.show()
}

// pets data

const api_key = 'Qs9ECZh6FAn6+GJ89ZYbRA==Hb7TBoU7n6IGXTla'

const api_url = 'https://api.api-ninjas.com/v1/'

const pets = usePets({api_key, api_url}).pets

</script>