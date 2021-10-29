# Input settings

- Set `name`, `placeholder`, `class` or other attributes for input.

```vue
<date-picker
  id="my-datepicker"
  v-model="date"
  format="jYYYY/jMM/jDD"
  name="my_date"
  placeholder="Select a date"
  :input-attrs="{ foo: 'foo' }"
  input-class="form-control form-control-lg"
/>

output:
<span class="vpd-input-group">
  <label class="vpd-icon-btn">...</label>
  <input
    id="vpd-my-datepicker"
    type="text"
    name="my_date"
    placeholder="Select a date"
    foo="foo"
    class="form-control form-control-lg"
  >
</span>
```

<ClientOnly>
  <date-picker
    id="my-datepicker"
    format="jYYYY/jMM/jDD"
    name="my_date"
    placeholder="Select a date"
    :input-attrs="{ foo: 'foo' }"
    input-class="form-control form-control-lg"
  />
</ClientOnly>

## Alt field

::: warning NOTE
An alternate field will only be created when you enter the `alt-name`.

`<date-picker alt-name="..." />`
:::

```vue
<date-picker
  v-model="date"
  alt-name="date_alt"
  alt-format="YYYY-MM-DD HH:mm:ss"
/>
output:
<span class="vpd-input-group">
  <label class="vpd-icon-btn">...</label>
  <input type="text" class="..." value="1396/09/09"/>
  <input type="hidden" name="date_alt" value="2017-11-30 00:00:00">
</span>
```
<ClientOnly>
  <date-picker
    alt-name="date_alt"
    alt-format="YYYY-MM-DD HH:mm:ss"
  />
</ClientOnly>
