# Range select

::: warning NOTE:
Range selection feature is only supported for `date` type.
:::

```vue
<date-picker
  v-model="range"
  range
  clearable
  format="YYYY-MM-DD"
  display-format="jMMMM jD"
/>
```
<script>
export default {
  data() {
    return {
      range: [],
      range2: [],
    }
  }
}
</script>
<ClientOnly>
  <date-picker
    v-model="range"
    range
    clearable
    format="YYYY-MM-DD"
    display-format="jMMMM jD"
    style="margin-bottom:0"
  />
</ClientOnly>

`range = {{ range }}`

::: tip
Sometimes you need to range starts from 00:00 AM and ends in 23:59 PM,

for example: `start = "2021-02-08 00:00", end = "2021-02-11 23:59"`

so just set format according to the following config:
:::

```vue
<date-picker
  v-model="range"
  range
  clearable
  auto-submit
  locale="en,fa"
  min="2021-02-05"
  max="2021-02-20"
  format="YYYY-MM-DD HH:mm"
  display-format="jYYYY/jM/jD"
/>
```
```js
data() {
  return {
    range: []
  }
}
```

<ClientOnly>
  <date-picker
    v-model="range2"
    range
    clearable
    auto-submit
    locale="en,fa"
    min="2021-02-05"
    max="2021-02-20"
    format="YYYY-MM-DD HH:mm"
    display-format="jYYYY/jM/jD"
  />
</ClientOnly>

`range = {{ range2 }}`
