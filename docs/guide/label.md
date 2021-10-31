# Label

<script>
export default {
  data() {
    return {
      start: '',
      end: '',
    }
  }
}
</script>

```vue
<date-picker v-model="start" label="START" />
<date-picker v-model="end" :disabled="!start" :min="start">
  <div slot="label">
    <span style="font-size: 20px">«</span>
    <span>END</span>
    <span style="font-size: 20px">»</span>
  </div>
</date-picker>
```
```js
export default {
 data() {
   return {
     start: '',
     end: '',
   }
  }
}
```
<ClientOnly>
  <date-picker v-model="start" label="START" />
</ClientOnly>

<br />

<ClientOnly>
  <date-picker v-model="end" :disabled="!start" :min="start">
    <div slot="label">
      <span style="font-size: 20px">«</span>
      <span>END</span>
      <span style="font-size: 20px">»</span>
    </div>
  </date-picker>
</ClientOnly>
