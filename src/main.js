import Vue from 'vue'
import $ from 'jquery'
import ScrollReveal from 'scrollreveal'
import { TweenMax, TimelineMax, Power2, Elastic } from 'gsap/TweenMax'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    window.sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay: 0,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 0.9,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      container: window.document.documentElement,
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.2,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
      beforeReveal: function (domEl) {
        if (domEl.classList.contains('skill')) {
          domEl.classList.add('animated')
        }
      },
      afterReveal: function (domEl) {
        ScrollReveal().clean(domEl)
      }
    })
  },
  mounted () {
    if ($(window).width() >= 950) {
      $('.cover_page').animate({
        left: '-=30px'
      }, {
        duration: 1000,
        delay: -100,
        easing: 'linear'
      })
    } else if ($(window).width() < 950) {
      window.sr.reveal('.sr')
    }
  },
  render: h => h(App)
}).$mount('#app')

{
  const tl = new TimelineMax({ paused: true })
  const tlBack = new TimelineMax({ paused: true })

  tl
    .set('.hamburger', {
      className: '+=active'
    })
    .set('.option', {
      scale: 1
    })
    .to('.hamburger', 0.1, {
      scale: 1.2,
      yoyo: true,
      repeat: 1
    })
    .to('.hamburger', 0.3, {
      x: -5,
      y: 5,
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0)
    .staggerFrom('.option', 0.7, {
      left: '85%',
      top: '100%',
      autoAlpha: 0,
      scale: 0.5,
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0.03)

  tlBack
    .set('.hamburger', {
      className: '-=active'
    })
    .staggerTo('.option', 0.7, {
      left: '85%',
      top: '100%',
      autoAlpha: 0,
      scale: 0.5,
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0.1)
    .to('.hamburger', 0.3, {
      x: 0,
      y: 0,
      ease: Power2.easeOut
    }, 0.2)

  $(document).on('click', '.hamburger:not(.active)', function (e) {
    event.preventDefault()
    tl.play(0)
  })
  $(document).on('click', '.hamburger.active, .item', function (e) {
    event.preventDefault()
    TweenMax.to($(this), 0.1, {
      scale: 1.2,
      yoyo: true,
      repeat: 1,
      onComplete: function () {
        tlBack.play(0)
      }
    })
  })
}
