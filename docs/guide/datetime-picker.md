# Datetime picker

- Simple datetime picker
```vue
<date-picker v-model="datetime" type="datetime" />
```

<ClientOnly>
  <date-picker type="datetime" />
</ClientOnly>


 - Compact mode
 ```vue
<date-picker
  type="datetime"
  compact-time
  auto-submit
/>
```
<ClientOnly>
  <date-picker
    type="datetime"
    compact-time
    auto-submit
  />
</ClientOnly>

- Datetime minimum and maximum

```vue
<date-picker
  type="datetime"
  v-model="datetime"
  min="1396/08/08 08:00"
  max="1396/08/10 20:00"
/>
```
<ClientOnly>
  <date-picker
    type="datetime"
    min="1396/08/08 08:00"
    max="1396/08/10 20:00"
  />
</ClientOnly>

