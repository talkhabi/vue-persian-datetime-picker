# Formatting

```vue
<date-picker
  v-model="date"
  format="jYYYY jMMMM jDD"
/>
```

<ClientOnly>
  <date-picker format="jYYYY jMMMM jDD" />
</ClientOnly>


::: details Click to view more info
```js
"format"
type: String
default:
  HH:mm                //for time
  jYYYY/jMM/jDD HH:mm  //for datetime
  jYYYY/jMM/jDD        //for date
  jYYYY                //for year
  jMM                  //for month
example:
  jYY-jMM-jDD                      //00-07-24
  jYY/jMM/jDD                      //00/07/24
  jYY jMMMM jDD                    //00 مهر 24
  jYYYY jMMMM jDD                  //1400 مهر 24
  dddd jDD jMMMM jYYYY             //شنبه 24 مهر 1400
  dddd jDD jMMMM jYYYY ساعت HH:mm  //شنبه 24 مهر 1400 ساعت 00:54
```
:::

- Also see [moment](https://momentjs.com/docs/#/displaying/format/) and [moment-jalaali](https://github.com/jalaali/moment-jalaali)

## Format only for display

```vue
<input type="text" v-model="user.name" placeholder="Name" />

<input type="tel" v-model="user.tel" placeholder="Tel" />

<date-picker
  v-model="user.birthday"
  format="YYYY-MM-DD HH:mm:ss"
  display-format="dddd jDD jMMMM jYYYY"
/>
```

```js
export default {
  data() {
    return {
      user: {
        name: '',
        tel: '',
        birthday: '',
      }
    }
  }
}
```

<ClientOnly>
  <input type="text" v-model="user.name" placeholder="Name" class="form-control" style="margin-bottom: 10px" />
</ClientOnly>

<br />

<ClientOnly>
  <input type="tel" v-model="user.tel" placeholder="Tel" class="form-control" />
</ClientOnly>

<br />

<ClientOnly>
  <date-picker
    v-model="user.birthday"
    format="YYYY-MM-DD HH:mm:ss"
    display-format="dddd jDD jMMMM jYYYY"
  />
</ClientOnly>

- `user = {{ user }}`

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        tel: '',
        birthday: '',
      }
    }
  }
}
</script>
