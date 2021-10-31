# Custom input

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

<script>
export default {
  data() {
    return {
      date: '',
      date2: '',
      show: false
    }
  }
}
</script>

<input
  id="my-custom-input"
  v-model="date"
  type="text"
  class="form-control"
  placeholder="select date"
/>

<ClientOnly>
  <date-picker
    v-model="date"
    format="jYYYY/jMM/jDD"
    element="my-custom-input"
  />
</ClientOnly>

::: danger
Custom input does not support `display-format`.

You have to create a specific component for this purpose or use a computed property.

See the following example:
:::

```vue
<input
  id="my-custom-input"
  v-model="dateFormatted"
  type="text"
  class="form-control"
  placeholder="select date"
/>

<date-picker
  v-model="date"
  format="YYYY-MM-DD"
  element="my-custom-input"
/>
```
```js
import moment from 'moment-jalaali'
export default {
  data() {
    return {
      date: ''
    }
  },
  computed: {
    dateFormatted() {
      return moment(this.date, 'YYYY-MM-DD').format('jYYYY/jMM/jDD')
    }
  }
}
```

### Custom editable input
```vue
<button
  type="button"
  class="btn btn-primary"
  @click="show=true"
>
  Show Datepicker
</button>

<input
  id="my-custom-editable-input"
  v-model="date"
  type="text"
  class="form-control is-editable"
  placeholder="YYYY/MM/DD"
/>

<date-picker
  v-model="date"
  format="jYYYY/jMM/jDD"
  element="my-custom-editable-input"
  :editable="true"
  :show="show"
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
  v-model="date2"
  id="my-custom-editable-input"
/>

<ClientOnly>
  <date-picker
    v-model="date2"
    format="jYYYY/jMM/jDD"
    element="my-custom-editable-input"
    :editable="true"
    :show="show"
    @close="show=false"
  />
</ClientOnly>

</div>

