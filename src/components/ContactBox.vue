<template lang="pug">
#contact_box
  .contact_item
    input.toggle#phone(type="radio"
                        name="item_group")
    label.expander(for="phone")
      i.fas.fa-mobile-alt
      span.contact_text {{ coverPageData.phone }}
  .contact_item
    input.toggle#email(type="radio"
                        name="item_group")
    label.expander(for="email")
      i.fas.fa-envelope
      span.contact_text {{ coverPageData.email }}
  .contact_item
    input.toggle#github(type="radio"
                        name="item_group")
    label.expander(for="github")
      i.fab.fa-github
      a(:href="coverPageData.github"
        target="_blank")
        span.contact_text GitHub
  .contact_item
    input.toggle#download(type="radio"
                          name="item_group")
    label.expander(for="download")
      i.fas.fa-file-download
      a(:href="coverPageData.download"
        target="_blank")
        span.contact_text Download
</template>

<script>
import { mapState } from 'vuex'

export default {
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
#contact_box
  width: 80%
  +center_position
  top: 95%
  +center_flex
  .contact_item
    margin: 0 0.5rem
    display: block
    float: left
    white-space: nowrap
    &:nth-child(2)
      transform: translate(-3px, 0)
    &:nth-child(4)
      transform: translate(3px, 0)
    .toggle
      display: none
      &:checked
        +.expander
          max-width: 30rem
          i
            +font(2.6vmin, 700, $c_yellow_03)
            animation: none
          .contact_text
            color: $c_black
          a
            &:hover
              .contact_text
                color: $c_yellow_03
    .expander
      max-width: 2.8vmin
      overflow: hidden
      transition: all ease-in-out 233ms
      &:hover
        i
          color: lighten($c_black, 50)
          animation: jiggling ease-in-out 400ms infinite
      i
        margin: 0 0.5rem 0 0
        padding: 0 0 0 0.05rem
        +font(2.6vmin, 700, $c_black)
        vertical-align: middle
        display: inline-block
        cursor: pointer
        transition: color ease-in-out 80ms
    .contact_text
      +font($fz_p, 400, transparent)
      vertical-align: middle
      display: inline-block
      user-select: auto
      transition: color ease-out 333ms

// ====================
//      RWD
// ==============================

// --------------------
//      TABLET
// ------------------------------
@media screen and (max-width: 991.98px)
  #contact_box
    .contact_item
      .toggle
        &:checked
          +.expander
            i
              +font(5vmin, 700, $c_yellow_03)
      .expander
        max-width: 5.5vmin
        transition: all ease-in-out 233ms
        i
          +font(5vmin, 700, $c_blue_01)
          transition: color ease-in-out 80ms
      .contact_text
        +font(3.5vmin, 400, transparent)
        transition: color ease-out 333ms
</style>
