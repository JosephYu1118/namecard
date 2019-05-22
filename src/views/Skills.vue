<template lang="pug">
#skills.namecard_box.inside_page
  h3.sr Programming Skills
  h2.sr 程式技能
    .background_ball
  ul.list_programming
    li.skill.sr(v-for="data in skillsPageData.programming")
      label {{ data.skill }}
      .bar
        .value(:class="'v_' + data.value")
  h3.sr Other Skills
  h2.sr 其他技能
    .background_ball
  ul.list_other
    li.skill.sr(v-for="data in skillsPageData.other")
      label {{ data.skill }}
      svg(viewBox="-10 -10 220 220")
        circle.base(cx="100"
                    cy="100"
                    r="100")
        circle.progress(cx="100"
                        cy="100"
                        r="100"
                        :style="{ 'stroke-dashoffset': getCircleValue(data.value) }")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['skillsPageData'])
  },
  methods: {
    getCircleValue (value) {
      let r = 100
      let c = Math.PI * (r * 2)
      return ((r - value) / r) * c
    }
  }
}
</script>

<style lang="sass">
@import "@/styles/global.sass"

// ====================
//      MAIN
// ==============================
#skills
  background: linear-gradient(120deg, $c_green_01, $c_green_02)
  h3
    padding: 0 0 0.5vw 0
    +font($fz_p, 400, rgba($c_white, 0.3))
  h2
    padding: 0 0 1vw 0
    +font($fz_title, 500, $c_white)
  .list_programming
    padding: 0 0 2vw 0
    li
      padding: 0.5vw 1vw
      +center_flex(flex-start, center)
      label
        flex: 1
        +font($fz_p, 400, rgba($c_white, 0.8))
      .bar
        +size(100%, 0.8vw, 3px)
        flex: 1
        border: 2px solid $c_yellow_01
        .value
          +size(100%)
          background-color: $c_yellow_01
          @for $c from 5 through 9
            &.v_#{$c}0
              width: 10% * $c
  .list_other
    +center_flex(flex-start)
    flex-wrap: wrap
    li
      padding: 1vw 1.2vw
      +center_flex
      flex-direction: column
      label
        padding: 0 0 1vw 0
        +font($fz_p, 400, rgba($c_white, 0.8))
      svg
        +size(7vw)
        transform: rotate(-90deg)
        circle
          stroke-width: 20
          fill: transparent
          stroke: $c_yellow_01
          stroke-dasharray: 628
          &.base
            opacity: 0.2

// ====================
//      RWD
// ==============================

// --------------------
//      TABLET
// ------------------------------
@media screen and (max-width: 991.98px)
  #skills
    background: linear-gradient(150deg, #BBB, #FFF)
    h3
      padding: 0 0 2vw 0
      +font($fz_p_mobile, 400, rgba($c_black, 0.3))
    h2
      padding: 0 0 3vw 0
      +font($fz_title_mobile, 500, $c_black)
    .list_programming
      padding: 0 0 4vw 0
      li
        padding: 1.5vw 3vw
        label
          +font($fz_p_mobile, 400, rgba($c_black, 0.8))
        .bar
          +size(100%, 2.5vw, 3px)
          border: 1px solid $c_blue_01
          .value
            background-color: $c_blue_01
    .list_other
      li
        padding: 2vw 2.3vw
        label
          padding: 0 0 4vw 0
          +font($fz_p_mobile, 400, rgba($c_black, 0.8))
        svg
          +size(20vw)
          circle
            stroke: $c_blue_01
</style>
