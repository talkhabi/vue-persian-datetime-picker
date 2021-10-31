# Using vue-router

::: tip
This option helps users to close the picker without changing the screen
when pressing the back button.
:::

```vue
<date-picker use-router />
```
<ClientOnly>
  <date-picker use-router />
</ClientOnly>

```vue
<date-picker use-router="foo" />
```
<ClientOnly>
  <date-picker use-router="foo" />
</ClientOnly>

```vue
<date-picker id="bar" use-router />
```
<ClientOnly>
  <date-picker id="bar" use-router />
</ClientOnly>


```vue
example <date-picker use-router />          => example.com/home?vpd-75454=active
example <date-picker use-router="foo" />    => example.com/home?vpd-foo=active
example <date-picker id="bar" use-router /> => example.com/home?vpd-bar=active
```
