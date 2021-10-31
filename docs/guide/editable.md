# Editable input

```vue
<date-picker
  v-model="date"
  editable
  format="jYYYY/jMM/jDD"
  placeholder="YYYY/MM/DD"
/>
```
```css
input.is-editable {
  direction: ltr;
  text-align: left;
}
```
<ClientOnly>
  <date-picker
    format="jYYYY/jMM/jDD"
    placeholder="YYYY/MM/DD"
    editable
  />
</ClientOnly>
