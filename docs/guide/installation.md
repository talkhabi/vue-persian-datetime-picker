# Installation

## Install in a browser (umd)
```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/moment"></script>
<script src="https://cdn.jsdelivr.net/npm/moment-jalaali@0.9.2/build/moment-jalaali.js"></script>
<script src="/dist/vue-persian-datetime-picker.umd.min.js"></script>
<div id="app">
  <date-picker v-model="date"></date-picker>
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    date: '1397/02/02'
  },
  components: {
    DatePicker: VuePersianDatetimePicker
  }
});
</script>
```

## Install with npm
```bash
npm install vue-persian-datetime-picker --save
```

Configuration for moment to ignore loading locales
```js
// webpack.config.js:
module.exports.plugins = [
  //...
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  //...
]

// vue.config.js:
module.exports = {
  //..
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  },
  //...
}
```

### Usage
```js
// main.js
//...
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.component('date-picker', VuePersianDatetimePicker);
//...
```
Or in component
```html
<template>
  <div>
    <date-picker v-model="date" />
  </div>
</template>
 
<script>
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
</script>
```


## Global setup 
```js
// main.js
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.use(VuePersianDatetimePicker, {
  name: 'custom-date-picker',
  props: {
    format: 'YYYY-MM-DD HH:mm',
    displayFormat: 'jYYYY-jMM-jDD HH:mm',
    editable: false,
    inputClass: 'form-control my-custom-class-name',
    placeholder: 'Please select a date',
    altFormat: 'YYYY-MM-DD HH:mm',
    color: '#00acc1',
    autoSubmit: true,
    //...  
    //... And whatever you want to set as default.
    //... 
  }
});
```
Then use in component
```html
<custom-date-picker v-model="date" />
```
