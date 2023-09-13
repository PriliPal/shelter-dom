<template>
  <div class="container">

    <pet-modal
        v-if="modal.visibility.value"
        :pet="petInModal"
        @close="modal.hide()"
    ></pet-modal>

    <start-section
        :is-burger-opened="burger.isBurgerOpened.value"
        @openBurgerMenu="openBurgerMenu"
        @scrollTo="scrollTo"
    ></start-section>

    <about-section></about-section>

    <slider-section
        @modalShow="handleModalShow"
        :pets="pets"
    ></slider-section>

    <help-section
        ref="helpSection"
    ></help-section>

    <donate-section></donate-section>

    <footer-primary
        ref="contacts"
    ></footer-primary>

  </div>
</template>

<script setup>
import '../assets/scss/container.scss'

import StartSection from '../components/sections/StartSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import SliderSection from '../components/sections/SliderSection.vue'
import HelpSection from '../components/sections/HelpSection.vue'
import DonateSection from '../components/sections/DonateSection'
import FooterPrimary from '../components/sections/FooterPrimary'

import PetModal from '../components/widgets/PetModal.vue'

import useBurger from '../composables/burger.js'
import useModal from '../composables/modal.js'
import usePets from '../composables/pets.js'

import {useRouter} from 'nuxt/app'

import {onMounted, ref} from 'vue'

// navigation

const burger = useBurger()

const openBurgerMenu = () => {
  burger.hideOrOpenBurger()
}

const helpSection = ref()
const contacts = ref()

const scrollTo = el => {

  if (el === 'helpSection') {
    helpSection.value.$el.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  if (el === 'contacts') {
    contacts.value.$el.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  if (burger.isBurgerOpened.value) {
    openBurgerMenu()
  }

}

const router = useRouter()

onMounted(() => {

  setTimeout(() => {
    if (router.options.history.state.back === '/homePageScroll/helpSection') {
      scrollTo('helpSection')
    }
    if (router.options.history.state.back === '/homePageScroll/contacts') {
      scrollTo('contacts')
    }
  }, 0)

})

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
