import Vue from 'vue'
import App from './App.vue'

import VueHighlightJS from 'vue-highlight.js'

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS)
import 'highlight.js/styles/github.css'

/**
 * Define some global variables
 */
Vue.use({
  install (Vue, options) {
    Vue.prototype.$prefix = 'vpd-' // shorted to reduce the css size
  }
})

/**
 * Import datepicker and define component
 */
import VuePersianDatetimePicker from './picker/VuePersianDatetimePicker.vue'
Vue.component('date-picker', VuePersianDatetimePicker)

import Card from './components/card.vue'
Vue.component('card', Card)

Vue.config.ignoredElements = [
  'date-picker'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
