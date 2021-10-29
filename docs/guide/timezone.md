# Timezone

```vue
<date-picker
  v-model="datetime"
  type="datetime"
  format="YYYY-MM-DD HH:mm"
  display-format="jYYYY-jMM-jDD HH:mm"
  :timezone="true"
/>
UTC: {{ datetime }}
```

```js
import moment from 'moment-jalaali'
export default {
  data() {
    return {
      // moment().utc().format('YYYY-MM-DD HH:mm')
      datetime: '2021-10-21 20:26'
    }
  }
}
```

<script>
import moment from 'moment-jalaali';
export default {
  data() {
    return {
      datetime: moment().utc().format('YYYY-MM-DD HH:mm')
    }
  }
}
</script>

<ClientOnly>
  <date-picker
    v-model="datetime"
    type="datetime"
    format="YYYY-MM-DD HH:mm"
    display-format="jYYYY-jMM-jDD HH:mm"
    :timezone="true"
    style="margin-bottom: 0"
  />
</ClientOnly>

<code>UTC: {{ datetime }}</code>


