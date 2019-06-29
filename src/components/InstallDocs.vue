<template>
  <div>
    <h2>Installation:</h2>
    <!-- eslint-disable -->
      <highlight-code lang="bash" v-pre>
        npm install vue-persian-datetime-picker --save
      </highlight-code>
    <!-- eslint-enable -->
    <p>webpack.config.js:</p>
    <!-- eslint-disable -->
      <highlight-code lang="javascript" v-pre>
        /**
         * configuration for moment to ignore loading locales
         */
        module.exports.plugins = [
          //...
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
          //...
        ]
      </highlight-code>
    <hr >
    <!-- eslint-enable -->
    <h1>Usage</h1>
    <p>main.js</p>
    <!-- eslint-disable -->
      <highlight-code lang="javascript" v-pre>
        import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
        Vue.component('date-picker', VuePersianDatetimePicker);
      </highlight-code>
    <!-- eslint-enable -->
    <p>Or in component</p>
    <!-- eslint-disable -->
    <highlight-code lang="javascript" v-pre>
      &lt;template&gt;
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
      &lt;/script&gt;
    </highlight-code>
    <!-- eslint-enable -->
    <h1>Global configuration:</h1>
    <p>main.js</p>
    <!-- eslint-disable -->
    <highlight-code lang="javascript" v-pre>
      import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
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
      });
    </highlight-code>
    <highlight-code lang="html" v-pre>
      Then use in component
      &lt;custom-date-picker v-model="date"&gt;&lt;/custom-date-picker&gt;
    </highlight-code>
    <!-- eslint-enable -->
  </div>
</template>
