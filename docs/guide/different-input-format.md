# Different input and output format

```vue
<date-picker
  value="2017-05-10"
  input-format="YYYY-MM-DD"
  format="jYYYY/jMM/jDD"
  @input="date=$event"
/>
```
<ClientOnly>
  <date-picker
    value="2017-05-10"
    input-format="YYYY-MM-DD"
    format="jYYYY/jMM/jDD"
    @input="date=$event"
  />
</ClientOnly>

```js
/**
* Different input and output format
* 1: set input by          value="..."
* 2: set input format by   input-format="..."
* 3: set output format by  format="..."
* 4: get output by         @input="date=$event"
*/
"$event"
type: String
returns formatted datetime
```

```vue
<date-picker
  value="2017/10/03"
  input-format="YYYY/MM/DD"
  format="jYYYY/jMM/jDD"
  @input="date=$event"
/>
<date-picker
  value="1396-05-05"
  input-format="jYYYY-jMM-jDD"
  format="YYYY/MM/jDD"
  @input="date=$event"
/>
```
