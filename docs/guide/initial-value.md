# Initial value

```vue
<date-picker
  v-model="date"
  format="jYYYY/jMM/jDD"
/>
```
```js
data() {
  return {
    date: '1396/05/03'
  }
}
```

<ClientOnly>
  <date-picker
    value="1396/05/03"
    format="jYYYY/jMM/jDD"
  />
</ClientOnly>

::: details View more
```js
/**
* Show datepicker with initial value
* v-bind:value="..."
* or v-model="..."
*/
"value"
type: String
default: Null
example: 20:20  |  1396/08/08 20:20  |   1396/08/08
```

```vue
<date-picker value="1396/05/05" format="jYYYY/jMM/jDD" />
<date-picker value="1396-05-05" format="jYYYY-jMM-jDD" />
<date-picker value="2017/10/03" format="YYYY/MM/DD" />
<date-picker value="2017/10/03" input-format="YYYY/MM/DD" format="jYYYY/jMM/jDD" />
```
:::

## Startup initial value
- With initial value for start if `value` is empty

```vue
<date-picker v-model="date" initial-value="1370/01/01" />
```
<ClientOnly>
  <date-picker initial-value="1370/01/01" />
</ClientOnly>


```vue
<date-picker v-model="datetime" type="datetime" initial-value="1370/01/01 20:45" />
```
<ClientOnly>
  <date-picker type="datetime" initial-value="1370/01/01 20:45" />
</ClientOnly>


```vue
<date-picker v-model="time" type="time" initial-value="20:45" />
```
<ClientOnly>
  <date-picker type="time" initial-value="20:45" />
</ClientOnly>


```vue
<date-picker v-model="year" type="year" initial-value="1360" />
```
<ClientOnly>
  <date-picker type="year" initial-value="1360" />
</ClientOnly>


```vue
<date-picker v-model="month" type="month" initial-value="05" />
```
<ClientOnly>
  <date-picker type="month" initial-value="05" />
</ClientOnly>


```js
data() {
  return {
    date: '',
    time: '',
    datetime: '',
    year: '',
    month: '',
  }
}
```
