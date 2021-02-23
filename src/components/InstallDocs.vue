<template>
  <div>
    <h2>Installation:</h2>
    <!-- eslint-disable -->
    <pre v-highlightjs><code class="bash" v-pre>npm install vue-persian-datetime-picker --save</code></pre>
    <!-- eslint-enable -->
    <p>webpack.config.js:</p>
    <!-- eslint-disable -->
    <pre v-highlightjs><code class="javascript" v-pre>/**
 * configuration for moment to ignore loading locales
 */
module.exports.plugins = [
  //...
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  //...
]</code></pre>
    <hr>
    <!-- eslint-enable -->
    <h1>Usage</h1>
    <p>main.js</p>
    <!-- eslint-disable -->
    <pre v-highlightjs><code class="javascript" v-pre>import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);</code></pre>
    <!-- eslint-enable -->
    <p>Or in component</p>
    <!-- eslint-disable -->
    <pre v-highlightjs><code class="javascript" v-pre>&lt;template&gt;
  &lt;div&gt;
    &lt;date-picker v-model="date"&gt;&lt;/date-picker&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  data(){
    return {
      date: ''
    }
  },
  components: {
    datePicker: VuePersianDatetimePicker
  }
}
&lt;/script&gt;</code></pre>
    <!-- eslint-enable -->
    <h1>Global configuration:</h1>
    <p>main.js</p>
    <!-- eslint-disable -->
    <pre v-highlightjs><code class="javascript" v-pre>import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.use(VuePersianDatetimePicker, {
  name: 'custom-date-picker',
  props: {
    inputFormat: 'YYYY-MM-DD HH:mm',
    format: 'jYYYY-jMM-jDD HH:mm',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#00acc1',
    autoSubmit: false,
    //...
    //... And whatever you want to set as default
    //...
  }
});</code></pre>

    <pre v-highlightjs><code class="html" v-pre>Then use in component
&lt;custom-date-picker v-model="date"&gt;&lt;/custom-date-picker&gt;</code></pre>
    <!-- eslint-enable -->
  </div>
</template>
