# Basic examples

```vue
<date-picker v-model="date" />
```
<ClientOnly>
  <date-picker />
</ClientOnly>


```vue
<date-picker locale="en,fa" format="YYYY/M/D" />
```
<ClientOnly>
  <date-picker locale="en,fa" format="YYYY/M/D" />
</ClientOnly>


```vue
<date-picker simple />
```
<ClientOnly>
  <date-picker simple />
</ClientOnly>


```vue
<date-picker popover auto-submit />
```
<ClientOnly>
  <date-picker popover="right" auto-submit />
</ClientOnly>


```vue
<date-picker v-model="dateRange" range />
```
<ClientOnly>
  <date-picker range />
</ClientOnly>


```vue
<date-picker v-model="dates" multiple />
```
<ClientOnly>
  <date-picker multiple />
</ClientOnly>


```vue
<date-picker v-model="datetime" type="datetime" />
```
<ClientOnly>
  <date-picker type="datetime" />
</ClientOnly>


```vue
<date-picker v-model="time" type="time" />
```
<ClientOnly>
  <date-picker type="time" />
</ClientOnly>

```vue
<date-picker v-model="yearMonth" type="year-month" />
```
<ClientOnly>
  <date-picker type="year-month" />
</ClientOnly>

```vue
<date-picker v-model="year" type="year" />
```
<ClientOnly>
  <date-picker type="year" />
</ClientOnly>

```vue
<date-picker v-model="month" type="month" />
```
<ClientOnly>
  <date-picker type="month" />
</ClientOnly>

