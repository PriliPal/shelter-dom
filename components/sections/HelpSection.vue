<template>
  <section class="help-section">

    <h3 class="help-section-title">
      How you can help <br>
      our shelter
    </h3>

    <div class="help-section-content">

      <div v-for="(svg, key) in icons" class="help-section-content-el">

        <component :is="svg"></component>

        <span class="help-section-content-el-text">{{ key }}</span>
      </div>

    </div>

  </section>
</template>

<script setup>
import petFood from '../svg/petFood.vue'
import transportation from '../svg/transportation.vue'
import toys from '../svg/toys.vue'
import bowls from '../svg/bowls.vue'
import shampoos from '../svg/shampoos.vue'
import medicines from '../svg/medicines.vue'
import vitamins from '../svg/vitamins.vue'
import collars from '../svg/collars.vue'
import sleepingAreas from '../svg/sleepingAreas.vue'

const icons = {
  'Pet food': petFood,
  'transportation': transportation,
  'toys': toys,
  'Bowls and cups': bowls,
  'Shampoos': shampoos,
  'Vitamins': vitamins,
  'Medicines': medicines,
  'Collars / leashes': collars,
  'Sleeping areas': sleepingAreas
}

</script>