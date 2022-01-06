# Popover mode

```vue
<date-picker auto-submit popover="right" />
```
<ClientOnly>
  <date-picker auto-submit popover="right" />
</ClientOnly>


```vue
<date-picker auto-submit popover="bottom-left" />
```
<ClientOnly>
  <date-picker auto-submit popover="bottom-left" />
</ClientOnly>

```vue
<date-picker
  auto-submit
  :popover="{
    placement: 'right',
    offsetX: 10,
    offsetY: 10
  }"
/>
```
<ClientOnly>
  <date-picker auto-submit :popover="{ placement: 'right', offsetX: 10, offsetY: 10 }" />
</ClientOnly>


accepted:

  `true` | `false`

  `top` | `bottom` | `right` | `left`

  `top-left` | `top-right` | `bottom-right` | `bottom-left`

  `{ offsetX: Number, offsetY: Number }`

  `{ placement: String, offsetX: Number, offsetY: Number }`

