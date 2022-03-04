# vue-persian-datetime-picker

[![npm version](https://badge.fury.io/js/vue-persian-datetime-picker.svg)](https://www.npmjs.com/package/vue-persian-datetime-picker)

> A vue plugin to select jalali date and time

See documentation and demo at [vue-persian-datetime-picker](https://talkhabi.github.io/vue-persian-datetime-picker)

If you are using vuejs 3, please refer to [this repository](https://github.com/talkhabi/vue3-persian-datetime-picker).


## Installation
### browser
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

### npm
```bash
npm install vue-persian-datetime-picker --save
```

Configuration for moment to ignore loading locales
```javascript
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
```javascript
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
    <date-picker v-model="date"></date-picker>
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


## You can also set default values: 
```javascript
// main.js
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
```
Then use in component
```html
<custom-date-picker v-model="date" />
```

### [Click to see full documentation and demo](https://talkhabi.github.io/vue-persian-datetime-picker)

## Built With
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [moment-jalaali](https://github.com/jalaali/moment-jalaali) - A Jalaali (Jalali, Persian, Khorshidi, Shamsi) calendar system plugin for moment.js.


## License

This project is licensed under the MIT License


## Change log

### 2.10.4 (2022-03-04)
 * Fixed [change the time with keyboard in popover mode](https://github.com/talkhabi/vue-persian-datetime-picker/issues/214)
 * Fixed popover configuration

### 2.10.3 (2022-01-06)
 * Fixed [popover position in rtl pages](https://github.com/talkhabi/vue-persian-datetime-picker/issues/204)
 * Fixed [keep the selected day in simple mode](https://github.com/talkhabi/vue-persian-datetime-picker/issues/207)

### 2.10.2 (2021-12-24)
 * Fixed [popover mode when using custom input](https://github.com/talkhabi/vue-persian-datetime-picker/issues/200)
 * Fixed [change jump-minute by muse wheel](https://github.com/talkhabi/vue-persian-datetime-picker/issues/198)

### 2.10.1 (2021-11-12)
 * Fixed build problem #191 #190 #188

### 2.10.0 (2021-11-03)
 * Feat: Added support for display format when using [`custom-input`](https://talkhabi.github.io/vue-persian-datetime-picker/guide/custom-input.html)

### 2.9.1 (2021-10-31)
 * Fixed: [Using jumpMinute and roundMinute together](https://github.com/talkhabi/vue-persian-datetime-picker/issues/182)

### 2.9.0 (2021-09-27)
 * Feat: [Added simple-mode](https://talkhabi.github.io/vue-persian-datetime-picker/guide/simple-mode.html)
 * Feat: [Added `input-attrs`](https://github.com/talkhabi/vue-persian-datetime-picker/issues/170)
 * Feat: [Added `@next-month` and `@prev-month` events](https://github.com/talkhabi/vue-persian-datetime-picker/issues/176)
 * Feat: Added `@year-change` and `@month-change` events
 * Fixed: [Mouse wheel in Firefox](https://github.com/talkhabi/vue-persian-datetime-picker/issues/174)
 * Fixed: Prevent selected dates from being reset

### 2.8.0 (2021-08-01)
 * Feat: [Added ability to control route in show/close action](https://talkhabi.github.io/vue-persian-datetime-picker/guide/use-router.html)
 * Fixed Date change animation and transition

### 2.7.0 (2021-07-23)
 * Fixed [moment.parseZone](https://github.com/talkhabi/vue-persian-datetime-picker/issues/156)
 * Fixed Unwanted change of date when using `auto-submit` and `multiple` together
 * Feat: [Added slots for next-month and prev-month button](https://github.com/talkhabi/vue-persian-datetime-picker/issues/147)
 * Feat: [Ability to change the time using the keyboard](https://github.com/talkhabi/vue-persian-datetime-picker/issues/159)

### 2.6.1 (2021-05-17)
 * Fixed [year-month](https://github.com/talkhabi/vue-persian-datetime-picker/issues/150)

### 2.6.0 (2021-02-05)
 * Added [multiple selection](https://talkhabi.github.io/vue-persian-datetime-picker/guide/multiple.html) (for type `date` only)
 * Added [popover mode](https://talkhabi.github.io/vue-persian-datetime-picker/guide/popover.html)
 * Close picker with `escape` key, fixes [#141](https://github.com/talkhabi/vue-persian-datetime-picker/issues/141)
 
### 2.5.0 (2021-01-30)
 * Added [range option](https://talkhabi.github.io/vue-persian-datetime-picker/guide/range.html) (for type `date` only)
 * Fixed [#136](https://github.com/talkhabi/vue-persian-datetime-picker/issues/136)

### 2.4.1 (2020-11-13)
 * Fixed [#131](https://github.com/talkhabi/vue-persian-datetime-picker/issues/131)
 * Fixed [#128](https://github.com/talkhabi/vue-persian-datetime-picker/issues/128)

### 2.4.0 (2020-10-17)
 * Added `compat-time` to display time on the front page (in datetime mode)
 * Fixed clear value [#125](https://github.com/talkhabi/vue-persian-datetime-picker/issues/125)
 * Fixed disabling in datetime mode [#123](https://github.com/talkhabi/vue-persian-datetime-picker/issues/123)
 * Fixed timezone in the first and second half of the year [#108](https://github.com/talkhabi/vue-persian-datetime-picker/issues/108)

### 2.3.0 (2020-08-30)
 * Added [`convert-numbers`](https://github.com/talkhabi/vue-persian-datetime-picker/pull/117) prop that converts numbers to persian in fa locale: `<date-picker convert-numbers />`

### 2.2.0 (2020-08-02)
 * [Custom localization](https://talkhabi.github.io/vue-persian-datetime-picker/guide/localization.html) is now supported
 * Added some [slots](https://talkhabi.github.io/vue-persian-datetime-picker/guide/slots.html)

### 2.1.6 (2020-07-13)
 * Fixed `locale-config` prop [#116](https://github.com/talkhabi/vue-persian-datetime-picker/issues/116)
 * Added `show-now-btn` prop [#109](https://github.com/talkhabi/vue-persian-datetime-picker/issues/109)

### 2.1.5 (2020-04-19)
 * Fixed wrong date in Safari browsers
 * Fixed scroll to element (year section)

### 2.1.4 (2020-01-30)
 * Fixed initial locale value

### 2.1.2 (2019-09-08)
 * Fixed jumpMinute and roundMinute in datetime mode
 * Fixed time animation effect

### 2.1.1 (2019-09-07)
 * Fixed JumpMinute and hour change

### 2.1.0 (2019-08-19)
 * Added "year-month" type `<date-picker type="year-month" />`. fixed [#70](https://github.com/talkhabi/vue-persian-datetime-picker/issues/70)
 * Timezone support `<date-picker type="datetime" :timezone="true" />`. fixed [#33](https://github.com/talkhabi/vue-persian-datetime-picker/issues/33)

### 2.0.2 (2019-07-17)
 * Flipped month change buttons in rtl direction
 * Added label to locales. fixed [#67](https://github.com/talkhabi/vue-persian-datetime-picker/issues/67)
 * Added display format to each locale. fixed [#68](https://github.com/talkhabi/vue-persian-datetime-picker/issues/68)
 * Fixed wrong date on date-time picker mode 
 
### 2.0.1 (2019-05-11)

 * Fixed [#53](https://github.com/talkhabi/vue-persian-datetime-picker/issues/53)
 * Show the next step on submit button click, instead of submitting immediately [#41](https://github.com/talkhabi/vue-persian-datetime-picker/issues/41)

### 2.0.0 (2019-01-16)

 * Added gregorian support `<date-picker locale="en" />`
 * Added locale configuration support 
 * Improved css transitions
 * Fixed min-max in time picker

### 1.1.7 (2018-12-31)

 * Fixed [critical error](https://github.com/talkhabi/vue-persian-datetime-picker/issues/39)

### 1.1.6 (2018-12-29)

 * Added jumpMinute and roundMinute to time-picker `<date-picker type="time" :jumpMinute="5" :roundMinute="true" />`
 * Added clear button `<date-picker :clearable="true" />`
 * Added inline mode `<date-picker :inline="true" />`
 * Fixed `tab` key press problem
 * Fixed responsive mode
 * Fixed watching to `min-max` changes
 
### 1.1.5 (2018-09-01)

 * Added emit on open 
 * Added feature to highlight items and dates

### 1.1.4 (2018-08-12)

 * Added label for display
 * Added feature to disable some dates
 * Added feature to disable or enable the datepicker
 * Icons and css styles optimization
 * Load component via script tag


### 1.1.3 (2018-05-22)

 * Fixed "min-date" bug

### 1.1.2 (2018-05-12)

 * Updated "moment-jalaali" version to 0.7.3
 * Fixed "display-format" when is editable
 * Reset "view" value

### 1.1.1 (2018-05-03)

  * Added "append-to"
  * Added "display format"

### 1.1.0 (2018-05-01)

  * Added default settings feature
  

### 1.0.9 (2017-12-25)

  * Clear input value
  * Fixed editable input bug
  * Added "Initial value"
  * Package keywords
  * Fixed css class name
  * Fixed some other bugs

### 1.0.7 (2017-12-14)

  * Avoid submitting form
  * Auto submit on wrapper click

### 1.0.5 (2017-12-04)

  * Fixed default value for "value"
