<template lang="pug">
#home
  Cover
  About
  Skills
  Portfolio
  Menu
</template>

<script>
import Cover from '@/views/Cover'
import About from '@/views/About'
import Skills from '@/views/Skills'
import Portfolio from '@/views/Portfolio'
import Menu from '@/components/Menu'

export default {
  components: {
    Cover, About, Skills, Portfolio, Menu
  }
}
</script>

<style lang="sass">
@import "@/styles/global.sass"

// ====================
//      MAIN
// ==============================
#home
  width: 100%
  min-height: 100vh
  padding: 5vw 0
  +center_flex
  flex-direction: column
  overflow: hidden
</style>
