import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coverPageData: {
      icebergDesktop: require('@/assets/cover_iceberg_desktop.png'),
      icebergMobile: require('@/assets/cover_iceberg_mobile.png'),
      head: require('@/assets/cover_head.png'),
      nameCh: '俞敬聲',
      nameEng: 'Joseph Yu',
      position: '網頁前端工程師',
      phone: '+886 931-332-293',
      email: 'niceyoyo27@gmail.com',
      github: 'https://github.com/JosephYu1118',
      download: 'https://github.com/JosephYu1118/namecard/archive/master.zip'
    },
    aboutPageData: [
      {
        titleEng: 'About',
        titleCh: '關於',
        content: '我是個喜歡創新、喜歡探索新奇新鮮事物的人，對於日新月異的網路及程式設計領域抱持相當大的好奇與熱忱，雖然非資訊類別科系出身，但我相信藉由結合我所擁有的能力，能夠更全方位地思考、完成各執行細節，讓網頁作品增添許多不同的色彩。'
      }, {
        titleEng: 'Education',
        titleCh: '學歷',
        content: '國立政治大學廣告學系'
      }, {
        titleEng: 'Experience',
        titleCh: '經歷',
        content: '先前任職的工作皆屬行銷企劃領域，使我不論在與組員或客戶方的溝通以及事件規劃處理等方面，都有非常大的成長，但我希望自己除了擁有專業知識的能力，更能掌握實際呈現理念的技能，從此展開了我的自學程式之路。',
        content2: '雖然大學時期與上份工作皆有接觸及製作過簡易活動網頁，但都只是蜻蜓點水般的認識，因此我從頭開始紮根打基礎，一步一步訂定目標往前走。',
        content3: '直到現在，歷經一年的時間窺探程式語言，我已能獨力完成一個網頁從架構到動態互動的階段，並且能充分運用前端框架及第三方資料庫來達成網頁的需求。接下來的我希望能在工作之中更深入地探索學習，並期許自己能更精準達成目標並創造最佳的使用者體驗。'
      }
    ],
    skillsPageData: {
      programming: [
        {
          skill: 'HTML / CSS',
          value: 90
        }, {
          skill: 'JavaScript (ES6)',
          value: 80
        }, {
          skill: 'Pug / Sass',
          value: 90
        }, {
          skill: 'jQuery / ajax',
          value: 80
        }, {
          skill: 'axios',
          value: 60
        }, {
          skill: 'Vue.js',
          value: 80
        }, {
          skill: 'Vue Router',
          value: 70
        }, {
          skill: 'Vuex',
          value: 80
        }, {
          skill: 'Bootstrap',
          value: 70
        }, {
          skill: 'RWD',
          value: 70
        }, {
          skill: 'Java',
          value: 50
        }
      ],
      other: [
        {
          skill: 'Vue CLI',
          value: 85
        }, {
          skill: 'Webpack',
          value: 85
        }, {
          skill: 'npm',
          value: 80
        }, {
          skill: 'Git',
          value: 75
        }, {
          skill: 'Adobe Ps',
          value: 90
        }, {
          skill: 'Adobe Ai',
          value: 75
        }
      ]
    },
    portfolioPageData: {
      webDesign: [
        {
          link: 'https://josephyu1118.github.io/yu_style_shop/',
          thumbnail: require('@/assets/thumbnail_yu_style_shop.jpg'),
          title: '購物網站實作',
          text: '以 Vue CLI 3 / Webpack 開發，具備 RWD 特性、後台管理系統、表單驗證、Vue Router、Vuex 模組架構等。',
          repository: 'https://github.com/JosephYu1118/yu_style_shop'
        }, {
          link: 'https://josephyu1118.github.io/jdeating/',
          thumbnail: require('@/assets/thumbnail_jdeating.jpg'),
          title: '部落格網站呈現',
          text: '以 Vue CLI 3 / Webpack 開發，善用 JavaScript 動畫與 Vue.js 動態資料特性，獨力手刻之 RWD 單頁式應用程式網頁。',
          repository: 'https://github.com/JosephYu1118/jdeating'
        }, {
          link: 'https://josephyu1118.github.io/namecard/',
          thumbnail: require('@/assets/thumbnail_namecard.jpg'),
          title: '我的名片',
          text: '結合第三方 JavaScript 動畫庫，注重畫面呈現、動態互動效果，獨力手刻之 RWD 單頁式應用程式網頁。',
          repository: 'https://github.com/JosephYu1118/namecard'
        }
      ],
      practice: [
        {
          link: 'https://github.com/JosephYu1118/aqi_viewer',
          thumbnail: require('@/assets/thumbnail_aqi_viewer.jpg'),
          title: '空氣品質監測',
          technique: ['Vue 元件間互動', 'Vuex 管理資料狀態', 'axios 引入 open API'],
          repository: 'https://github.com/JosephYu1118/aqi_viewer'
        }, {
          link: 'https://josephyu1118.github.io/air_hockey/',
          thumbnail: require('@/assets/thumbnail_air_hockey.jpg'),
          title: '氣墊球',
          technique: ['JavaScript 物件導向', '監聽鍵盤事件'],
          repository: 'https://github.com/JosephYu1118/air_hockey'
        }, {
          link: 'https://josephyu1118.github.io/memory_game/',
          thumbnail: require('@/assets/thumbnail_memory_game.jpg'),
          title: '對對碰',
          technique: ['CSS 基礎動畫', 'CSS transform3D'],
          repository: 'https://github.com/JosephYu1118/memory_game'
        }, {
          link: 'https://josephyu1118.github.io/shopping_cart/',
          thumbnail: require('@/assets/thumbnail_shopping_cart.jpg'),
          title: '購物車介面',
          technique: ['購物車介面實作', 'TweenMax 動畫'],
          repository: 'https://github.com/JosephYu1118/shopping_cart'
        }
      ]
    }
  },
  mutations: {},
  actions: {}
})
