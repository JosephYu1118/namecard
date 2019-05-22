<template lang="pug">
nav#navbar.navbar
  ul.navbar-nav
    li.nav-item(@mouseenter="showPage(0)"
                @click="choosePage(0)")
      h3(data-hover="ABOUT") ABOUT
    li.nav-item(@mouseenter="showPage(1)"
                @click="choosePage(1)")
      h3(data-hover="SKILLS") SKILLS
    li.nav-item(@mouseenter="showPage(2)"
                @click="choosePage(2)")
      h3(data-hover="PORTFOLIO") PORTFOLIO
</template>

<script>
export default {
  data () {
    return {
      pageEl: document.getElementsByClassName('inside_page'),
      insidePages: [],
      nowPage: '',
      timer: null
    }
  },
  methods: {
    showPage (index) {
      if (this.nowPage.length === 0) {
        this.insidePages = [...this.pageEl]
        this.insidePages.forEach(page => page.classList.add('disappeared'))
        this.insidePages[index].classList.remove('disappeared')
      }
    },
    unfoldPage (index) {
      $('#cover').addClass('unfolded')
      this.insidePages = [...this.pageEl]
      this.insidePages.forEach(page =>
        page.classList.remove('unfolded', 'animated')
      )
      this.insidePages[index].classList.add('unfolded', 'animated')
      this.nowPage = this.insidePages[index]
    },
    changePage (index) {
      if (this.insidePages[index] === this.nowPage) {
        $('#cover').removeClass('unfolded')
        this.insidePages[index].classList.remove('unfolded', 'animated')
        this.nowPage = ''
      } else {
        this.insidePages.forEach(page => {
          page.classList.remove('unfolded', 'animated')
          page.classList.add('disappeared')
        })
        this.insidePages[index].classList.add('unfolded', 'animated')
        this.insidePages[index].classList.remove('disappeared')
        this.nowPage = this.insidePages[index]
      }
    },
    choosePage (index) {
      if ($(window).width() >= 950) {
        if (this.nowPage.length === 0) {
          this.unfoldPage(index)
        } else if (this.nowPage.length !== 0) {
          this.changePage(index)
        }
        if (this.nowPage === this.insidePages[0]) {
          this.showFutureLine()
        } else {
          clearInterval(this.timer)
        }
      }
    },
    showFutureLine () {
      let number = 1
      this.timer = setInterval(() => {
        $('#circle_0' + number).animate({
          opacity: 1
        }, {
          duration: 400,
          complete: function () {
            $('#line_0' + number).animate({
              opacity: 1
            }, 400)
            number++
          }
        })
      }, 800)
    }
  }
}
</script>

<style lang="sass">
@import "@/styles/global.sass"

// ====================
//      MAIN
// ==============================
#navbar
  padding: 0
  position: absolute
  top: 55%
  right: -5px
  .navbar-nav
    +center_flex
    flex-direction: column
    *
      transition: 0.35s ease
    .nav-item
      width: 100%
      margin: 0 0 1.2vw 0
      padding: 0.2vw 1vw 0.2vw 0
      list-style: outside none none
      +center_flex(flex-end)
      overflow: hidden
      cursor: pointer
      &:hover
        h3
          transform: translateY(-100%)
          &:before
            +size(100%, 3px)
      h3
        padding: 0.3rem 0
        +font(1.8vmin, 400)
        display: inline-block
        &:before, &:after
          position: absolute
          top: 100%
          transition: 0.35s ease
        &:before
          +size(100%, 1px)
          background-color: rgba($c_black, 0.3)
          content: ""
          display: block
        &:after
          padding: 0.3rem 0
          content: attr(data-hover)
          color: $c_black
          white-space: nowrap
          left: 0

// ====================
//      RWD
// ==============================

// --------------------
//      TABLET
// ------------------------------
@media screen and (max-width: 991.98px)
  #navbar
    display: none
</style>
