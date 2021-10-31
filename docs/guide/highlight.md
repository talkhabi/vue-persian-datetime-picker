# Highlight dates

- How to highlight some dates:

```vue
<date-picker :highlight="highlight" />
<script>
export default {
  methods: {
    highlight(formatted, dateMoment, checkingFor) {
      let attributes = {'title': 'Today is ' + formatted};
      if (checkingFor === 'day' && formatted === '1397/12/28'){
        attributes['class'] = 'highlighted-1';
        attributes['title'] = 'جشن چهارشنبه سوری';
      }
      if (checkingFor === 'day' && formatted === '1397/12/29'){
        attributes['class'] = 'highlighted-2';
        attributes['title'] = 'روز ملی شدن صنعت نفت';
      }
      return attributes;
    }
  }
}
</script>
```

```scss
.highlighted-1 {
  > span {
    color: #EF6C00 !important;
  }
  .vpd-day-effect {
    background-color: #f9e1be !important;
    border: solid 1px #EF6C00;
  }
  // for simple mode:
  &.vpd-addon-list-item {
    color: #ef6c00 !important;
    &.vpd-selected {
      background-color: #f9e1be;
    }
  }
}
.highlighted-2 {
  color: #E91E63;
  .vpd-day-effect {
    background-color: #E91E63 !important;
  }
  // for simple mode:
  &.vpd-addon-list-item {
    color: #e91e63 !important;
    &.vpd-selected {
      background-color: #f1d4de;
    }
  }
}
```

<script>
export default {
  methods: {
    highlightDay(formatted, dateMoment, checkingFor) {
      let attributes = { title: 'Today is ' + formatted }
      if (checkingFor === 'day' && formatted === '1397/12/28') {
        attributes['class'] = 'highlighted-1'
        attributes['title'] = 'جشن چهارشنبه سوری'
      }
      if (checkingFor === 'day' && formatted === '1397/12/29') {
        attributes['class'] = 'highlighted-2'
        attributes['title'] = 'روز ملی شدن صنعت نفت'
      }
      return attributes
    },
  }
}
</script>
<style lang="scss">
.highlighted-1 {
  > span {
    color: #ef6c00 !important;
  }
  .vpd-day-effect {
    background-color: #f9e1be !important;
    border: solid 1px #ef6c00;
  }
  &.vpd-addon-list-item {
    color: #ef6c00 !important;
    &.vpd-selected {
      background-color: #f9e1be;
    }
  }
}
.highlighted-2 {
  color: #e91e63;
  .vpd-day-effect {
    background-color: #e91e63 !important;
  }
  &.vpd-addon-list-item {
    color: #e91e63 !important;
    &.vpd-selected {
      background-color: #f1d4de;
    }
  }
}
</style>

<ClientOnly>
  <date-picker initial-value="1397/12/12" :highlight="highlightDay" />
</ClientOnly>

- Example for `time`
```vue
<date-picker type="time" :highlight="highlight" />
```
```js
export default {
  methods: {
    highlight(formatted, dateMoment, checkingFor) {
      if (dateMoment.hour() === dateMoment.minutes()) 
        return {
          style: { color: '#00BCD4 !important' }
        };
      return {}
    }
  }
}
```

- Example for `month`
```vue
<date-picker type="month" :highlight="highlight" />
```
```js
export default {
  methods: {
    highlight(formatted, dateMoment, checkingFor) {
      if (formatted === '05') 
        return {
          style: { color: 'red !important' },
          class: 'highlighted',
        }
      return {}
    }
  }
}
```

- Example for `year`
```vue
<date-picker type="year" :highlight="highlight" />
```
```js
export default {
  methods: {
    highlight(formatted, dateMoment, checkingFor) {
      if (checkingFor === 'year' && formatted === '1396')
        return {
          style: { color: 'red !important' },
          class: 'highlighted',
          'data-info': '1396',
        };
      return {}
    }
  }
}
```
