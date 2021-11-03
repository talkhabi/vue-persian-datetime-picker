# Custom input

- #### Using `custom-input` prop
```vue
<input
  type="text"
  class="custom-input"
  placeholder="select date"
/>
<span>date = {{ date }}</span>

<date-picker
  v-model="date"
  format="YYYY-MM-DD"
  display-format="jYYYY-jMM-jDD"
  custom-input=".custom-input"
/>
```
```js
export default {
  data() {
    return {
      date: ''
    }
  }
}
```

<script>
export default {
  data() {
    return {
      date: '',
      date1: '',
      date2: '',
      show: false
    }
  }
}
</script>

<input
  type="text"
  class="custom-input form-control"
  placeholder="select date"
/>

<code>date = {{ date }}</code>

<ClientOnly>
  <date-picker
    v-model="date"
    format="YYYY-MM-DD"
    display-format="jYYYY-jMM-jDD"
    custom-input=".custom-input"
  />
</ClientOnly>


- #### Method B: Using `element` prop (deprecated)

:::details show example
```vue
<input
  id="my-custom-input"
  v-model="date"
  type="text"
  class="form-control"
  placeholder="select date"
/>

<date-picker
  v-model="date"
  format="jYYYY/jMM/jDD"
  element="my-custom-input"
/>
```
```js
export default {
  data() {
    return {
      date: ''
    }
  }
}
```

<input
  id="my-custom-input"
  v-model="date1"
  type="text"
  class="form-control"
  placeholder="select date"
/>

<ClientOnly>
  <date-picker
    v-model="date1"
    format="jYYYY/jMM/jDD"
    element="my-custom-input"
  />
</ClientOnly>

:::


::: danger
`element` does not support `display-format`.

please use `custom-input`.
:::


### Custom editable input
```vue
<button type="button" class="btn btn-primary" @click="show = true">
  Show Datepicker
</button>

<input
  id="my-custom-editable-input"
  type="text"
  placeholder="YYYY/MM/DD"
/>

<date-picker
  v-model="date"
  :show="show"
  :editable="true"
  format="YYYY-MM-DD"
  display-format="jYYYY/jMM/jDD"
  custom-input="#my-custom-editable-input"
  @close="show=false"
/>
```
```js
export default {
  data() {
    return{
      date: '',
      show: false
    }
  }
}
```

<div>
<button type="button" @click="show=true">
Show Datepicker
</button>

<input
  type="text"
  class="form-control is-editable"
  placeholder="YYYY/MM/DD"
  id="my-custom-editable-input"
/>

<code>date = {{ date2 }}</code>

<ClientOnly>
  <date-picker
    v-model="date2"
    :show="show"
    :editable="true"
    format="YYYY-MM-DD"
    display-format="jYYYY/jMM/jDD"
    custom-input="#my-custom-editable-input"
    @close="show=false"
  />
</ClientOnly>

</div>

