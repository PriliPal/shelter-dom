<template>
  <footer class="footer-section">

    <div class="footer-section-contacts">

      <h3 class="footer-section-contacts-title">
        For questions and suggestions
      </h3>

      <div class="footer-section-contacts-email">

        <mail></mail>

        <a href="mailto:email@shelter.com">
          <h4 class="footer-section-contacts-email-text">email@shelter.com</h4>
        </a>

      </div>

      <div class="footer-section-contacts-phone">

        <phone></phone>

        <a href="tel:+136745677554">
          <h4 class="footer-section-contacts-phone-text">+13 674 567 75 54</h4>
        </a>

      </div>

    </div>

    <div class="footer-section-locations">

      <h3 class="footer-section-locations-title">
        We are waiting <br> for your visit
      </h3>

      <div class="footer-section-locations-boston">

        <point></point>

        <a href="https://goo.gl/maps/PkgPjjbJiELt9WXN7" target="_blank">
          <h4 class="footer-section-locations-boston-text">1 Central Street, Boston <br> (entrance from the store)</h4>
        </a>

      </div>

      <div class="footer-section-locations-london">

        <point></point>

        <a href="https://goo.gl/maps/K8nZFS58UdcvgUfY7" target="_blank">
          <h4 class="footer-section-locations-london-text">18 South Park, London </h4>
        </a>

      </div>

    </div>


    <img class="footer-section-image" src="../../public/footer-puppy.png" alt="footer-puppy">

  </footer>
</template>

<script setup>
import Mail from "../svg/mail"
import Phone from "../svg/phone"
import Point from "../svg/point"

</script>