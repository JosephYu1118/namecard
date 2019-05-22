<template lang="pug">
#about.namecard_box.inside_page
  .row
    .col-sm-12(v-for="data in aboutPageData")
      h3.sr {{ data.titleEng }}
      h2.sr {{ data.titleCh }}
        .background_ball
      p.sr(:class="{ paragraph: data.content3 }") {{ data.content }}
      p.paragraph.sr(v-if="data.content2") {{ data.content2 }}
      p.paragraph.sr(v-if="data.content3") {{ data.content3 }}
    .col-sm-12
      h3.sr Plan
      h2.sr 學習計畫
        .background_ball
      .journey_box
        .future_line.sr
          .line_box
            svg(v-for="num in 3"
                :id="[`line_0${num}`]"
                viewBox="-50 -50 100 100")
              polyline(points="-40, 0 40, 0")
          .circle_box
            .circle(v-for="num in 4"
                    :id="[`circle_0${num}`]")
              svg(viewBox="-50 -50 100 100")
                circle(cx=0
                        cy=0
                        r=2.5)
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['aboutPageData'])
  }
}
</script>

<style lang="sass">
@import "@/styles/global.sass"

// ====================
//      MAIN
// ==============================
#about
  background: linear-gradient(45deg, $c_blue_01, $c_blue_02)
  .row
    .col-sm-12
      h3
        padding: 0 0 0.5vw 0
        +font($fz_p, 400, rgba($c_white, 0.3))
      h2
        padding: 0 0 1vw 0
        +font($fz_title, 500, $c_white)
      p
        padding: 0 0 2vw 0
        text-indent: 29px
        +font($fz_p, 300, rgba($c_white, 0.8))
        line-height: 180%
        &.paragraph
          padding: 0 0 1vw 0
          &:last-child
            padding: 0 0 2vw 0
      .journey_box
        +size(100%, 25vw)
        .future_line
          +center_position
          transform: translate(-60%, -50%) rotate(60deg)
          +center_flex
          .line_box
            +center_flex
            svg
              +size(8vw)
              polyline
                stroke-width: 2px
                stroke: $c_yellow_01
                stroke-dasharray: 3
                fill: none
          .circle_box
            +center_position
            +center_flex
            .circle
              svg
                +size(8vw)
                circle
                  fill: $c_yellow_02
            @for $c from 1 through 4
              #circle_0#{$c}
                &:before
                  content: "step #{$c}"
                  +font($fz_p, 500, rgba($c_white, 0.8))
                  +center_position
                  top: 90%
                  left: 25%
                  transform: translate(-50%, -50%) rotate(-60deg)
                &:after
                  width: 12vw
                  content: map-get($goal_map, goal_0#{$c})
                  +font(1.4vmin, 300, rgba($c_white, 0.6))
                  line-height: 150%
                  +center_position
                  top: -50%
                  left: 115%
                  transform: translate(-50%, -50%) rotate(-60deg)
            #circle_04
              &:after
                width: 9vw
                top: -20%
                left: 105%

// ====================
//      RWD
// ==============================

// --------------------
//      SMALL DESKTOP
// ------------------------------
@media screen and (min-width: 992px) and (max-width: 1099.98px)
  #about
    .row
      .col-sm-12
        .journey_box
          .future_line
            .circle_box
              @for $c from 1 through 4
                #circle_0#{$c}
                  transform: scale(0.9)
                  &:after
                    +font(1.3vmin, 300, rgba($c_white, 0.6))

// --------------------
//      TABLET
// ------------------------------
@media screen and (max-width: 991.98px)
  #about
    background: linear-gradient(30deg, #BBB, #FFF)
    .row
      .col-sm-12
        h3
          padding: 0 0 2vw 0
          +font($fz_p_mobile, 400, rgba($c_black, 0.3))
        h2
          padding: 0 0 3vw 0
          +font($fz_title_mobile, 500, $c_black)
        p
          padding: 0 0 4vw 0
          text-indent: 16px
          +font($fz_p_mobile, 300, rgba($c_black, 0.8))
          &.paragraph
            padding: 0 0 2vw 0
            &:last-child
              padding: 0 0 4vw 0
        .journey_box
          +size(100%, 90vw)
          margin: 0 0 3vw 0
          .future_line
            transform: translate(-60%, -50%) rotate(65deg)
            .line_box
              svg
                +size(25vw)
                polyline
                  stroke: $c_blue_01
            .circle_box
              .circle
                svg
                  +size(25vw)
                  circle
                    fill: $c_blue_02
              @for $c from 1 through 4
                #circle_0#{$c}
                  &:before
                    content: "step #{$c}"
                    +font($fz_p_mobile, 500, rgba($c_black, 0.8))
                    top: 85%
                    left: 30%
                    transform: translate(-50%, -50%) rotate(-65deg)
                  &:after
                    width: 40vw
                    content: map-get($goal_map, goal_0#{$c})
                    +font(2.9vmin, 300, rgba($c_black, 0.8))
                    top: -45%
                    left: 100%
                    transform: translate(-50%, -50%) rotate(-65deg)
              #circle_04
                &:after
                  width: 27vw
                  top: -15%
                  left: 95%
</style>
