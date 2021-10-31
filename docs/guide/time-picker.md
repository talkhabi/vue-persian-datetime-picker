# Time picker

- Simple time picker
```vue
<date-picker v-model="time" type="time" />
```
<ClientOnly>
  <date-picker type="time" />
</ClientOnly>

- Time minimum and maximum
```vue
<date-picker
  type="time"
  v-model="time"
  min="08:08"
  max="22:00"
/>
```
<ClientOnly>
  <date-picker
    type="time"
    min="08:08"
    max="22:00"
  />
</ClientOnly>

- Advance time picker
```vue
<date-picker
  v-model="time"
  type="time"
  :jump-minute="15"
  :round-minute="true"
/>
```
<ClientOnly>
  <date-picker
    type="time"
    :jump-minute="15"
    :round-minute="true"
  />
</ClientOnly>
