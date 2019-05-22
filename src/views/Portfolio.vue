<template lang="pug">
#portfolio.namecard_box.inside_page
  h3.sr Web Design Works
  h2.sr 網頁開發作品
    .background_ball
  ul.web_works
    li.works_item.sr(v-for="work in portfolioPageData.webDesign")
      a.btn_work(:href="work.link"
                  target="_blank")
        .effect_box
          img.thumbnail(:src="work.thumbnail")
          .text_box
            h4 {{ work.title }}
            h5 {{ work.text }}
      a.btn_github(:href="work.repository"
                    target="_blank")
        i.fab.fa-github
        h5 GitHub
  h3.sr Practice Works
  h2.sr 練習作品
    .background_ball
  ul.web_practice
    li.practice_item.sr(v-for="work in portfolioPageData.practice")
      a.btn_practice(:href="work.link"
                      target="_blank")
        .effect_box
          img.thumbnail(:src="work.thumbnail")
          .text_box
            h5 {{ work.title }}
      .description
        h4 {{ work.title }}
        .technique(v-for="tech in work.technique")
          h5 ◍ {{ tech }}
        a.btn_github(:href="work.repository"
                      target="_blank")
          i.fab.fa-github
          h5 GitHub
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['portfolioPageData'])
  }
}
</script>

<style lang="sass">
@import "@/styles/global.sass"

// ====================
//      MAIN
// ==============================
#portfolio
  background: linear-gradient(120deg, $c_yellow_02, $c_yellow_03)
  h3
    padding: 0 0 0.5vw 0
    +font($fz_p, 400, rgba($c_black, 0.3))
  h2
    padding: 0 0 1vw 0
    +font($fz_title, 500, rgba($c_black, 0.8))
  .web_works
    margin: 0 0 1vw 0
    padding: 1vw 0 3vw 0
    +center_flex(flex-start)
    flex-direction: column
    .works_item
      margin: 2vw 0
      +center_flex
      .btn_work
        +size(90%, 17vw)
        text-decoration: none
        box-shadow: 0 10px 20px rgba($c_black, 0.5)
        .effect_box
          +hover_effect
      .btn_github
        position: absolute
        right: 5%
        bottom: -12%
        +center_flex(flex-end)
        text-decoration: none
        &:hover
          i, h5
            color: lighten($c_black, 50)
        i, h5
          +font(1.4vmin)
        i
          margin: 0 0.25rem 0 0
  .web_practice
    +center_flex(center, flex-start)
    flex-direction: column
    .practice_item
      width: 100%
      margin: 1.5vw 0
      +center_flex(flex-start)
      .btn_practice
        +size(10vw)
        min-width: 10vw
        max-width: 10vw
        margin: 0 0 0 1vw
        text-decoration: none
        box-shadow: 0 10px 20px rgba($c_black, 0.5)
        .effect_box
          +hover_effect(0 1vw 1.5vw 1vw, $fz_p, 500)
      .description
        margin: 0 0 0 5vw
        +center_flex(center, flex-start)
        flex-direction: column
        h4
          margin: 0 0 0.5rem 0
          +font(2vmin, 500, $c_black)
        .technique
          margin: 0.25rem 0
          h5
            +font($fz_p, 400, rgba($c_black, 0.8))
            line-height: 150%
        .btn_github
          margin: 5px 0 0 0
          +center_flex
          text-decoration: none
          &:hover
            i, h5
              color: lighten($c_black, 50)
          i, h5
            +font(1.4vmin)
          i
            margin: 0 0.25rem 0 0

// ====================
//      RWD
// ==============================

// --------------------
//      TABLET
// ------------------------------
@media screen and (max-width: 991.98px)
  #portfolio
    margin: 1vw 0 3vw 0
    background: linear-gradient(30deg, #BBB, #FFF)
    h3
      padding: 0 0 2vw 0
      +font($fz_p_mobile, 400, rgba($c_black, 0.3))
    h2
      padding: 0 0 3vw 0
      +font($fz_title_mobile, 500, rgba($c_black, 0.8))
    .web_works
      margin: 0 0 4vw 0
      padding: 2vw 0 10vw 0
      .works_item
        margin: 6vw 1.5vw
        .btn_work
          +size(90%, 42vw)
          .effect_box
            +hover_effect(0 2vw 3vw 2vw, 3vmin, 400, 4.5vmin, 500)
        .btn_github
          bottom: -15%
          &:hover
            i, h5
              color: lighten($c_black, 50)
          i, h5
            +font(3.3vmin)
    .web_practice
      .practice_item
        margin: 6vw 1.5vw
        .btn_practice
          +size(30vw)
          min-width: 30vw
          max-width: 30vw
          .effect_box
            +hover_effect(0 2vw 3vw 2vw, $fz_p_mobile, 500)
        .description
          margin: 0 0 0 8vw
          h4
            margin: 0 0 0.25rem 0
            +font($fz_p_mobile, 500, $c_black)
          .technique
            margin: 0.25rem 0
            h5
              +font(3.3vmin, 400, rgba($c_black, 0.8))
          .btn_github
            &:hover
              i, h5
                color: lighten($c_black, 50)
            i, h5
              +font(3.3vmin)
</style>
