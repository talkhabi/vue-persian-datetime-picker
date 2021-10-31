# Disabling

## Disable datepicker

```vue
<date-picker :disabled="true" />
```

<script>
export default {
  data() {
    return {
      disabled: true
    }
  },
  methods: {
    checkDate(formatted, dateMoment, checkingFor) {
      return (
        formatted === '1397/04/03' ||
        dateMoment.jMonth() === 4  ||
        dateMoment.locale('en').format('dddd') === 'Friday'
      )
    }
  }
}
</script>

<label>
<input type="checkbox" v-model="disabled" />
Disabled
</label>

`disabled = {{ disabled }}`

<ClientOnly>
  <date-picker :disabled="disabled" />
</ClientOnly>


## Disable dates
- String
```vue
<date-picker disable="1397/05/09" />
```
<ClientOnly>
  <date-picker disable="1397/05/09" initial-value="1397/05/09" />
</ClientOnly>

- Day name
```vue
<date-picker disable="Friday" />
```
<ClientOnly>
  <date-picker disable="Friday" />
</ClientOnly>

- Array of strings
```vue
<date-picker :disable="['1397/05/07', '1397/05/08', 'Friday']" />
```
<ClientOnly>
  <date-picker :disable="['1397/05/07', '1397/05/08', 'Friday']" initial-value="1397/05/01" />
</ClientOnly>

- Regular expression
```vue
<date-picker :disable="/1397\/05\/1(.*)/" />
```
<ClientOnly>
  <date-picker :disable="/1397\/05\/1(.*)/" initial-value="1397/05/01" />
</ClientOnly>

- Array of strings and RegExp
```vue
<date-picker :disable="['1397/05/06', /1397\/05\/1(.*)/]" />
```
<ClientOnly>
  <date-picker :disable="['1397/05/06', /1397\/05\/1(.*)/]" initial-value="1397/05/01" />
</ClientOnly>

- Function
```vue
<date-picker :disable="checkDate" />
<script>
export default {
  methods: {
    checkDate(formatted, dateMoment, checkingFor) {
      return (
        formatted === '1397/04/03' ||
        dateMoment.jMonth() === 4  ||  // means "mordad"
        dateMoment.locale('en').format('dddd') === 'Friday'
      )
    }
  }
}
</script>
```
<ClientOnly>
  <date-picker :disable="checkDate" initial-value="1397/04/01" />
</ClientOnly>


- Datetime examples
```vue
String
<date-picker type="datetime" disable="1397/05/06 22:00" />

Array of strings
<date-picker type="datetime" :disable="['1397/05/05', '1397/05/06 22:05', 'Friday']" />

Regular Expressions
<date-picker type="datetime" :disable="/1397\/05\/0[1-9] 12:(.*)/" />

Array of strings and RegExp
<date-picker type="datetime" :disable="['1397/05/06 12:00', /(.*)22:(.*)/]" />
```

- Time examples
```vue
String
<date-picker type="time" disable="22:00" />

Array of strings
<date-picker type="time" :disable="['22:00', '22:05', '22:10']" />

Regular Expressions
<date-picker type="time" :disable="/22:(.*)/" />

Array of strings and RegExp
<date-picker type="time" :disable="['22:00', /22:1[0-5]/]" />
```
