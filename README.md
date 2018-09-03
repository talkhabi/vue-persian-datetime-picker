# vue-persian-datetime-picker

[![npm version](https://badge.fury.io/js/vue-persian-datetime-picker.svg)](https://www.npmjs.com/package/vue-persian-datetime-picker)

> A vue plugin to select jalali date and time

See documentation and demo at [vue-persian-datetime-picker](https://talkhabi.github.io/vue-persian-datetime-picker)


## Installing
### browser
```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/moment"></script>
<script src="https://cdn.jsdelivr.net/npm/moment-jalaali@0.7.4/build/moment-jalaali.js"></script>
<script src="dist/vue-persian-datetime-picker-browser.js"></script>
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

webpack.config.js:
```javascript
/**
 * configuration for moment to ignore loading locales
 */
module.exports.plugins = [
    //...
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    //...
]
```

### Usage

main.js
```javascript
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
main.js
```javascript
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
<custom-date-picker v-model="date"></custom-date-picker>
```

## Built With
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework.
* [Moment.js](https://momentjs.com/) - Parse, validate, manipulate, and display dates and times in JavaScript.
* [moment-jalaali](https://github.com/jalaali/moment-jalaali) - A Jalaali (Jalali, Persian, Khorshidi, Shamsi) calendar system plugin for moment.js.


## License

This project is licensed under the MIT License


## Change log


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