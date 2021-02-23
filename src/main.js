import { createApp } from 'vue'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/solarized-light.css'
import vIcon from 'vue-icon'
import { router } from './routes'
import App from './App'
import VuePersianDatetimePicker from './picker/VuePersianDatetimePicker.vue'
import Card from './components/card.vue'
import './assets/scss/app.scss'

const app = createApp(App)
app.config.globalProperties.$prefix = 'vpd-'
app
  .use(VueHighlightJS)
  .use(vIcon, 'v-icon')
  .use(router)
  .component('card', Card)
  .component('date-picker', VuePersianDatetimePicker)
  .mount('#app')
