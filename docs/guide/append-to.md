# Append to container

- With this option you can specify where to append the picker

::: warning
This will also work in `inline` mode!
So be careful when using these options together.
:::

```vue
<date-picker append-to="body" />
```
<ClientOnly>
  <date-picker append-to="body" />
</ClientOnly>


```vue
<date-picker append-to="body" />
<date-picker append-to="#app" />
<date-picker append-to=".my-custom-container" />
```
