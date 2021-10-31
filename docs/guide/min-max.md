# Minimum and maximum

```vue
<date-picker
  v-model="date"
  min="1396/08/08"
  max="1396/09/09"
/>
```

<ClientOnly>
  <date-picker
    min="1396/08/08"
    max="1396/09/09"
  />
</ClientOnly>

```js
/**
 * Limit datetime picker minimum and maximum
 */
"min"
type: String
default: Null
example:
  20:20             //for time
  1396/08/08 20:20  //for datetime
  1396/08/08        //for date
/*******************************/
"max"
type: String
default: Null
example: same as "min"
```
