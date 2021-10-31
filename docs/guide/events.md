# Available events

<br />
<br />

- `@input` event
```vue
<date-picker
  value="1396/05/02"
  format="jYYYY/jMM/jDD"
  @input="date=$event"
/>
<span>date = {{ date }}</span>
```

<script>
import moment from 'moment-jalaali';
export default {
  data() {
    return {
      date: '',
      date2: '1396/05/03',
      dateMoment: moment('1396/05/03', 'jYYYY/jMM/jDD'),
    }
  }
}
</script>

<ClientOnly>
  <date-picker
    value="1396/05/02"
    format="jYYYY/jMM/jDD"
    style="margin-bottom:0"
    @input="date = $event"
  />
</ClientOnly>

<code>date = {{ date }}</code>

<br />
<br />

- `@change` event
```vue
<date-picker
  v-model="date"
  format="jYYYY/jMM/jDD"
  @change="dateMoment=$event"
/>
<span>dateMoment = {{ dateMoment.format('dddd jDD jMMMM jYYYY') }}</span>
<span>date = {{ date }}</span>
```
```js
import moment from 'moment-jalaali';
export default {
  data() {
    return {
      date: '1396/05/03',
      dateMoment: moment('1396/05/03', 'jYYYY/jMM/jDD'),
    }
  }
}
```

<ClientOnly>
 <date-picker
   v-model="date2"
   format="jYYYY/jMM/jDD"
   style="margin-bottom:0"
   @change="dateMoment=$event"
 /> 
</ClientOnly>

<code>dateMoment = {{ dateMoment.format('dddd jDD jMMMM jYYYY') }}</code>
<br />
<code>date = {{ date2 }}</code>

<br />
<br />

- `@open` | `@close` events
```vue
<date-picker @open="onOpen" @close="onClose" />
```
```js
export default {
  methods: {
    onOpen(picker) {
      console.log('The datepicker is open');
    },
    onClose(picker) {
      console.log('The datepicker was closed');
    }
  }
}
```

<br />
<br />

- `@localeChange` event
```vue
<date-picker @localeChange="onLocaleChange" />
```
```js
export default {
  methods: {
    onLocaleChange(localeData) {
      console.log('locale-change', localeData);
    }
  }
}
```

<br />
<br />

- `@next-month` | `@prev-month` events
```vue
<date-picker @next-month="onNextMonth" @prev-month="onPrevMonth" />
```
```js
export default {
  methods: {
    onNextMonth(date) {
      console.log('next-month', date);
    },
    onPrevMonth(date) {
      console.log('prev-month', date);
    }
  }
}
```

<br />
<br />

- `@year-change` | `@month-change` events
```vue
<date-picker @year-change="onYearChange" @month-change="onMonthChange" />
```
```js
export default {
  methods: {
    onYearChange(year) {
      console.log('year-change', year);
    },
    onMonthChange(month) {
      console.log('month-change', month);
    }
  }
}
```
