<template lang="pug">
nav#menu
  a.hamburger
    i.fas.fa-bars
    i.fas.fa-times
  a.option.option_home(@click="moveToAnchor(0)")
    i.fas.fa-home
  a.option.option_about(@click="moveToAnchor(1)")
    i.fas.fa-user
  a.option.option_skills(@click="moveToAnchor(2)")
    i.fas.fa-code
  a.option.option_portfolio(@click="moveToAnchor(3)")
    i.fas.fa-briefcase
</template>

<script>
export default {
  methods: {
    moveToAnchor (anchor) {
      let offsets = [
        0,
        $('#about').offset().top,
        $('#skills').offset().top,
        $('#portfolio').offset().top
      ]
      $('html, body').animate({
        scrollTop: offsets[anchor]
      }, 700)
    }
  }
}
</script>

<style lang="sass">
@import "@/styles/global.sass"

// ====================
//      MAIN
// ==============================
#menu
  width: 100%
  position: fixed
  top: 5%
  z-index: 5
  display: none
  a
    +size(10vmin, 10vmin, 50%)
    background-color: white
    +center_flex
    box-shadow: 5px 5px 10px rgba(black, 0.1)
    cursor: pointer
    &:hover
      i
        color: $c_yellow_03
    &.hamburger
      +size(13vmin, 13vmin, 50%)
      left: 80%
      z-index: 7
      &.active
        background-color: $c_yellow_01
        .fa-bars
          display: none
        .fa-times
          display: block
      &:not(.active)
        .fa-bars
          display: block
        .fa-times
          display: none
    &.option
      +center_position
      z-index: 6
      left: 85.5%
      &.option_home
        top: 170%
      &.option_about
        top: 270%
      &.option_skills
        top: 370%
      &.option_portfolio
        top: 470%
    i
      +font(4.5vmin, 700, $c_blue_01)
      +center_position
      transition: 0.3s

// ====================
//      RWD
// ==============================

// --------------------
//      TABLET
// ------------------------------
@media screen and (max-width: 991.98px)
  #menu
    display: block
</style>
