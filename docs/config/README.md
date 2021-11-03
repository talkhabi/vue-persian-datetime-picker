---
sidebar: auto
---

# Config

## value

Default input value
- Type: `String` | `Array` | `Number` | `Date`
- Default: `''`
- Example: `1396/08/01 22:45` | `2017/07/07 20:45` | `1500838200` | `20:45` | `new Date()`


## initialValue

Initial value of picker (if value is empty)
- Type: `String` | `Number`
- Default: `'''`
- Example: `1396/08/01 22:45` | `2017/07/07 20:45` | `1500838200` | `20:45`


## inputFormat

Format for `value`
- Type: `String`
- Default: `''`
- Example: `jYYYY/jMM/jDD HH:mm` | `YYYY/MM/DD HH:mm` | `x` | `HH:mm`
- See [moment-jalaali](https://github.com/jalaali/moment-jalaali)


## displayFormat

Format only to display the date in the field
- Type: `String`
- Default: `''`
- Example: `jYYYY/jMM/jDD HH:mm` | `YYYY/MM/DD HH:mm` | `x` | `HH:mm`
- See [moment-jalaali](https://github.com/jalaali/moment-jalaali)


## format

Format for input and output value
- Type: `String`
- Default: `''`
- Example: `jYYYY/jMM/jDD HH:mm` | `YYYY/MM/DD HH:mm` | `x` | `date` | `HH:mm`
- If empty, it will be built according to the type of picker:
     * --- `time`:     `HH:mm`
     * --- `datetime`: `jYYYY/jMM/jDD HH:mm`
     * --- `date`:     `jYYYY/jMM/jDD`
     * --- `year`:     `jYYYY`
     * --- `month`:    `jMM`
- See [moment-jalaali](https://github.com/jalaali/moment-jalaali)


## view

Step to view on startup
- Type: `String`
- Default: `day`
- Accepted: `day` | `month` | `year` | `time`


## type

The picker type
- Type: `String`
- Default: `date`
- Accepted: `date` | `datetime` | `year` | `month` | `time`


## min

The minimum of selectable period
- Based on `inputFormat` or `format`
- Type: `String`
- Default: `''`
- Example: `1396/08/01 22:45` | `22:45`


## max

The maximum of selectable period
- Type: `String`
- Default: `''`
- Example: `1396/08/01 22:45` | `22:45`


## editable

Editable input or just readonly
- Type: `Boolean`
- Default: `false` 


## element
Deprecated, Use [customInput](/config/#custominput)

Sometimes you don't want to use picker default input,
so you can use our own input element with `id` attribute
- Type: `String`
- Default: `undefined`
- Example: `the-id-of-custom-input`


## customInput
New version of `element`
use this instead of `element`, this custom input does not need v-model, and it will be automatically updated
also supports `display-format`
- Type: String (DOMString containing a selector list)
- Default: `undefined`
- Example: `.my-custom-input`
- Version: `>= 2.10.0`


## name

The form input name (when you are not using `element`)
- Type: `String`
- Default: `undefined`
- Example: `my-input-name`


## inputClass

The form input className (when you are not using `element`)
- Type: `String`
- Default: `form-control`
- Example: `my-custom-class`


## placeholder

The form input placeholder (when you are not using `element`)
- Type: `String`
- Default: `''`
- Example: `select date`


## altName

Hidden input element name
- Type: `String`
- Default: `''`
- Example: `birthday`
- If empty, the hidden input will not be created


## altFormat

Format for hidden input
- Type: `String`
- Default: `''`
- Example: `YYYY-MM-DD HH:mm:ss [GMT]ZZ`
- If empty, it will be built according to the type of picker:
   * --- `time`:     `HH:mm:ss [GMT]ZZ`
   * --- `datetime`: `YYYY-MM-DD HH:mm:ss [GMT]ZZ`
   * --- `date`:     `YYYY-MM-DD`
   * --- `year`:     `YYYY`
   * --- `month`:    `MM`
- See [moment-jalaali](https://github.com/jalaali/moment-jalaali)


## show

Show or hide the picker
- Type: `Boolean`
- Default: `false`


## color

Primary color of picker
- Type: `String`
- Default: `#417df4`
- Example: `red` | `#417df4`


## autoSubmit

Auto submit and hide picker After a date is selected
- Type: `Boolean`
- Default: `false`


## wrapperSubmit

Auto submit when clicking the wrapper
- Type: `Boolean`
- Default: `fals`


## appendTo

Place to append picker
- Type: `String`
- Default: `null`
- Example: `#app` | `#my-container`
- If you want to append picker to another container like `body`,
  pass the container as `append-to="body"`.


## disabled

Disable or enable the datepicker
- Type: `Boolean`
- Default: `false`


## disable

Disabling some dates or items
- Type: `Array` | `String` | `Function` | `RegExp`
- Default: `undefined`
- Example: `['1397/02/02', '1390/10/10']` | `1397/05/20` | `/1397\/05\/(.*)/`


## label

The input label
- Type: `String`
- Default: `''`
- Example: `date` | `birthday`


## highlight

Highlighting items
- Type: `Function`
- Default: `null`
- This option only accepts function that must return an object of attributes.


## jumpMinute

Change minutes by step
- Type: `Number`
- Default: `1`
- Example: `1` | `5` | `15`


## roundMinute

Round minutes when jumpMinute is greater than 1
- Type: `Boolean`
- Default: `false`
- Example: when `jumpMinute = 15`, will result: `13:00`, `13:15`, `13:30`, `13:45` ...


## clearable

Show clear button
- Type: `Boolean`
- Default: `false`


## inline

Inline mode
- Type: `Boolean`
- Default: `false`


## locale

Locales config (`fa` for jalali and `en` for gregorian)
- Type: `String`
- Default: `fa`
- Accepted: `fa` | `en` | `fa,en` | `en,fa`
- If you need other locales like `ar` or `fr`... see [localization](/guide/localization.html)


## localeConfig

Locales configuration
- Type: `Object`
- Default: `{}`
- Example: see [localization](/guide/localization.html)


## timezone

Timezone configuration
- Type: `String` | `Boolean` | `Function`
- Default: `fase`
- Example: `true` | `false` | `+03:30` | `+04:30`


## showNowBtn

Show or hide `now` button
- Type: `Boolean`
- Default: `true`


## convertNumbers

Convert to locale numbers or not
- Type: `Boolean`
- Default: `false`


## compactTime

Display the time on the front page
- Type: `Boolean`
- Default: `false`


## range

Enable or disable range mode
- Type: `Boolean` | `` | ``
- Default: `false`


## multiple

Enable or disable multiple mode
- Type: `Boolean`
- Default: `false`


## popover

Enable or disable popover mode
- Type: `Boolean` | `String`
- Default: `false`
- Accepted: 
    * `true` | `false`
    * `top-left` | `top-right`
    * `bottom-right` | `bottom-left`
    * `left-top` | `left-bottom`
    * `right-top` | `right-bottom`


## useRouter

If you want to change route address in open/close action, then enable this option.
- Type: `Boolean` | `String`
- Default: `false`
- Example: `true` | `false` | `foo`


## simple

Enable or disable simple mode
- Type: `Boolean`
- Default: `false`


## inputAttrs

Additional attributes for input element
- Type: `Object`
- Default: `null`
- Example: `{ 'data-foo': 'bar' }`
