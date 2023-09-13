<template>
  <div class="header-primary-burger-menu" :class="isBurgerOpened ? 'header-primary-burger-menu-opened' : ''">

    <div v-if="isBurgerOpened" class="header-primary-burger-menu-background" @click="emit('openBurgerMenu')"></div>

    <div class="header-primary">
      <div>
        <h3 class="header-primary-title">Cozy House</h3>
        <span class="header-primary-description">Shelter for pets in Boston</span>
      </div>

      <div class="header-primary-burger cursor-pointer" @click="emit('openBurgerMenu')" ref="burgerButton">
        <primary-burger></primary-burger>
      </div>
    </div>

    <nav class="header-primary-burger-menu-list">
      <nuxt-link to="/" exact active-class="header-primary-nav-list-el-active">
        <div class="header-primary-burger-menu-el cursor-pointer unselectable">
          About the shelter
        </div>
      </nuxt-link>
      <nuxt-link to="/ourPets" active-class="header-primary-nav-list-el-active">
        <div class="header-primary-burger-menu-el cursor-pointer unselectable">
          Our pets
        </div>
      </nuxt-link>
      <div class="header-primary-burger-menu-el cursor-pointer unselectable" @click="emit('scrollTo', 'helpSection')">
        Help the shelter
      </div>
      <div class="header-primary-burger-menu-el cursor-pointer unselectable" @click="emit('scrollTo', 'contacts')">
        Contacts
      </div>
    </nav>
  </div>

  <header class="header-primary">

    <div :class="isBurgerOpened ? 'invisible' : ''">
      <h3 class="header-primary-title">Cozy House</h3>
      <span class="header-primary-description">Shelter for pets in Boston</span>
    </div>

    <nav>
      <ul class="header-primary-nav-list">
        <li class="header-primary-nav-list-el cursor-pointer unselectable">
          <nuxt-link to="/" exact active-class="header-primary-nav-list-el-active">
            About the shelter
          </nuxt-link>
        </li>
        <li class="header-primary-nav-list-el cursor-pointer unselectable">
          <nuxt-link to="/ourPets" active-class="header-primary-nav-list-el-active">
            Our pets
          </nuxt-link>
        </li>
        <li class="header-primary-nav-list-el cursor-pointer unselectable" @click="emit('scrollTo', 'helpSection')">
          Help the shelter
        </li>
        <li class="header-primary-nav-list-el cursor-pointer unselectable" @click="emit('scrollTo', 'contacts')">
          Contacts
        </li>
      </ul>
    </nav>

    <div class="header-primary-burger cursor-pointer" @click="emit('openBurgerMenu')">
      <primary-burger></primary-burger>
    </div>

  </header>
</template>

<script setup>
import PrimaryBurger from "../svg/primaryBurger";

const emit = defineEmits(['scrollTo', 'openBurgerMenu'])
const props = defineProps({
  isBurgerOpened: {
    type: Boolean,
    default: false
  }
})

</script>