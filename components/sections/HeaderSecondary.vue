<template>
  <section>

    <div class="header-secondary-burger-menu" :class="isBurgerOpened ? 'header-secondary-burger-menu-opened' : ''">

      <div v-if="isBurgerOpened" class="header-secondary-burger-menu-background" @click="emit('openBurgerMenu')"></div>

      <div class="header-primary">
        <div>
          <h3 class="header-primary-title">Cozy House</h3>
          <span class="header-primary-description">Shelter for pets in Boston</span>
        </div>

        <div class="header-secondary-burger cursor-pointer" @click="emit('openBurgerMenu')" ref="burgerButton">
          <primary-burger></primary-burger>
        </div>
      </div>

      <nav class="header-secondary-burger-menu-list">
        <nuxt-link to="/" exact active-class="header-secondary-nav-list-el-active">
          <div class="header-secondary-burger-menu-el cursor-pointer unselectable">
            About the shelter
          </div>
        </nuxt-link>
        <nuxt-link to="/ourPets" active-class="header-secondary-nav-list-el-active">
          <div class="header-secondary-burger-menu-el cursor-pointer unselectable">
            Our pets
          </div>
        </nuxt-link>
        <div class="header-secondary-burger-menu-el cursor-pointer unselectable" @click="handlePush('helpSection')">
          Help the shelter
        </div>
        <div class="header-secondary-burger-menu-el cursor-pointer unselectable" @click="handlePush('contacts')">
          Contacts
        </div>
      </nav>
    </div>

    <header class="header-secondary">

      <div :class="isBurgerOpened ? 'invisible' : ''">
        <h3 class="header-secondary-title">Cozy House</h3>
        <span class="header-secondary-description">Shelter for pets in Boston</span>
      </div>

      <nav>
        <ul class="header-secondary-nav-list">
          <li class="header-secondary-nav-list-el cursor-pointer unselectable">
            <nuxt-link to="/" exact active-class="header-secondary-nav-list-el-active">
              About the shelter
            </nuxt-link>
          </li>
          <li class="header-secondary-nav-list-el cursor-pointer unselectable">
            <nuxt-link to="/ourPets" active-class="header-secondary-nav-list-el-active">
              Our pets
            </nuxt-link>
          </li>
          <li class="header-secondary-nav-list-el cursor-pointer unselectable" @click="handlePush('helpSection')">
            Help the shelter
          </li>
          <li class="header-secondary-nav-list-el cursor-pointer unselectable" @click="handlePush('contacts')">
            Contacts
          </li>
        </ul>
      </nav>

      <div class="header-secondary-burger cursor-pointer" @click="emit('openBurgerMenu')">
        <secondary-burger></secondary-burger>
      </div>

    </header>

  </section>
</template>

<script setup>
import SecondaryBurger from "../svg/secondaryBurger"
import PrimaryBurger from "../svg/primaryBurger"

import { useRouter } from 'nuxt/app'

const emit = defineEmits(['scrollTo', 'openBurgerMenu'])
const props = defineProps({
  isBurgerOpened: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
const handlePush = scrollTo => {
  router.push('/homePageScroll/' + scrollTo)
}

</script>