# Multiple select

::: warning NOTE:
Multiple selection feature is only supported for `date` type.
:::

```vue
<date-picker
  v-model="dates"
  multiple
  clearable
  format="YYYY-MM-DD"
  display-format="jMMMM jD"
/>
```
```js
export default {
  data() {
    return {
      dates: []
    }
  }
}

```

<script>
export default {
  data() {
    return {
      dates: [],
    }
  }
}
</script>
<ClientOnly>
  <date-picker
    v-model="dates"
    multiple
    clearable
    format="YYYY-MM-DD"
    display-format="jMMMM jD"
  />
</ClientOnly>

`dates = {{ dates }}`
