<template lang="pug">
#cover.namecard_box.cover_page
  img.iceberg_desktop(:src="coverPageData.icebergDesktop")
  img.iceberg_mobile(:src="coverPageData.icebergMobile")
  .head(:style="{ 'background-image': 'url(' + coverPageData.head + ')' }")
  Navbar
  .name_box
    h1 {{ coverPageData.nameCh }}
      span {{ coverPageData.nameEng }}
    hr
    h2 {{ coverPageData.position }}
  ContactBox
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar'
import ContactBox from '@/components/ContactBox'

export default {
  components: {
    Navbar, ContactBox
  },
  computed: {
    ...mapState(['coverPageData'])
  }
}
</script>

<style lang="sass">
@import "@/styles/global.sass"

// ====================
//      MAIN
// ==============================
#cover
  .iceberg_desktop
    width: 100%
    +center_position
    top: 25%
    display: block
  .iceberg_mobile
    display: none
  .head
    +size(12vw, 12vw, 50%)
    background-size: cover
    +center_position
    top: 50%
    left: 37%
    box-shadow: -10px 5px 0 rgba($c_black, 0.2)
  .name_box
    +center_position
    top: 73%
    left: 37%
    h1
      +font(3vmin)
      span
        padding: 0 0 0 20px
        +font(2.5vmin)
    hr
      margin: 5px 0 10px 0
    h2
      +font($fz_p, 300)
      text-align: center

// ====================
//      RWD
// ==============================

// --------------------
//      TABLET
// ------------------------------
@media screen and (max-width: 991.98px)
  #cover
    min-height: 90vh
    .iceberg_desktop
      display: none
    .iceberg_mobile
      width: 100%
      border-radius: 5px 5px 0 0
      +center_position
      top: 22%
      display: block
    .head
      +size(35vw, 35vw, 50%)
      top: 42%
      left: 50%
    .name_box
      top: 73%
      left: 50%
      h1
        +font(6vmin)
        span
          padding: 0 0 0 10px
          +font($fz_p_mobile)
      hr
        margin: 10px 0 13px 0
      h2
        +font($fz_p_mobile, 300)

// --------------------
//      MOBILE
// ------------------------------
@media screen and (max-width: 575.98px)
  #cover
    min-height: 70vh
</style>
