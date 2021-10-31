# View at startup
- Show a specific section at startup

```vue
<date-picker v-model="date" view="year" />
```
<ClientOnly>
  <date-picker view="year" />
</ClientOnly>


```js
/**
* Show 'year', 'month', 'day', or 'time' at startup
*/
"view"
type: String
default: day
example: year | month | day | time
```

```vue
<date-picker view="year" />
<date-picker view="month" />
<date-picker view="time" type="datetime" />
```
