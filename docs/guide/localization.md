# Localization

## Gregorian datepicker
```vue
<date-picker locale="en" />
```
<ClientOnly>
  <date-picker locale="en" />
</ClientOnly>

```vue
<date-picker locale="en,fa" format="YYYY/M/D" />
```
<ClientOnly>
  <date-picker locale="en,fa" format="YYYY/M/D" />
</ClientOnly>

```vue
<date-picker
  locale="fa,en"
  :locale-config="{
    fa: {
      displayFormat: 'jYYYY/jMM/jDD',
      lang: { label: 'شمسی' }
    },
    en: {
      displayFormat: 'YYYY/MM/DD',
      lang: { label: 'Gregorian' }
    }
  }"
/>
```
<ClientOnly>
  <date-picker
    locale="fa,en"
    :locale-config="{
      fa: {
        displayFormat: 'jYYYY/jMM/jDD',
        lang: { label: 'شمسی' }
      },
      en: {
        displayFormat: 'YYYY/MM/DD',
        lang: { label: 'Gregorian' }
      }
    }"
  />
</ClientOnly>

::: details View more
```vue
"locale"
type: String
default: "fa"
example: "fa" | "en" | "en,fa" | "fa,en" // ordering is important!
/*******************************/
"localeConfig"
type: Object
default: {}
example:
<date-picker locale="en,fa" :localeConfig="{
  fa: {
    dow: 6,     //  first day of week
    dir: 'rtl',
    displayFormat: 'jYYYY/jMM/jDD',
    lang: {
      label:     'شمسی',
      submit:    'تایید',
      cancel:    'انصراف',
      now:       'اکنون',
      nextMonth: 'ماه بعد',
      prevMonth: 'ماه قبل',
    }
  },
  en: {
    dow: 0,
    dir: 'ltr',
    displayFormat: 'YYYY/MM/DD',
    lang: {
      label:     'میلادی',
      submit:    'Select',
      cancel:    'Cancel',
      now:       'Now',
      nextMonth: 'Next month',
      prevMonth: 'Previous month',
    }
  }
}"
/>
```
:::


## Custom locale
```vue
<date-picker
  locale="fr,zh-cn,en,fa,ar-sa"
  :locale-config="localeConfig"
  format="YYYY/M/D"
/>
```
```js
import moment from 'moment'
import fr from 'moment/locale/fr'
import ar from 'moment/locale/ar-sa'
import zh from 'moment/locale/zh-cn'

moment.updateLocale('fr', fr)
moment.updateLocale('zh-cn', zh)
moment.updateLocale('ar-sa', { ...ar, postformat: str => str })

export default {
  data() {
    return {
      localeConfig: {
        fa: {
          displayFormat: 'jYYYY/jMM/jDD',
          lang: { label: 'FA' }
        },
        'ar-sa': {
          dow: 0,
          dir: 'rtl',
          displayFormat: vm => {
            // vm.type = date | time | datetime | year | month | yearmonth
            switch (vm.type) {
              case 'date':
                return 'YYYY/MM/DD'
              case 'datetime':
                return 'YYYY/MM/DD HH:mm'
              case 'year':
                return 'YYYY'
              case 'month':
                return 'MM'
              case 'yearmonth':
                return 'YY/MM'
              case 'time':
                return 'HH:mm'
            }
          },
          lang: {
            label: 'AR',
            submit: 'اختيار',
            cancel: 'إلغاء',
            now: 'الآن',
            nextMonth: 'الشهر القادم',
            prevMonth: 'الشهر الماضي'
          }
        },
        fr: {
          dow: 0,
          dir: 'ltr',
          displayFormat: vm => {
            return vm.type === 'datetime' ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD'
          },
          lang: {
            label: 'FR',
            submit: 'Sélection',
            cancel: 'Annuler',
            now: 'Maintenant',
            nextMonth: 'le mois prochain',
            prevMonth: 'le mois précédent'
          }
        },
        'zh-cn': {
          dow: 0,
          dir: 'ltr',
          displayFormat: vm => {
            return vm.type === 'datetime' ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD'
          },
          lang: {
            label: 'ZH-CN',
            submit: '選拔',
            cancel: '取消',
            now: '現在',
            nextMonth: '下個月',
            prevMonth: '上個月'
          }
        }
      }
    }
  }
}
```

<script>
import moment from 'moment';
import fr from 'moment/locale/fr';
import ar from 'moment/locale/ar-sa';
import zh from 'moment/locale/zh-cn';

moment.updateLocale('fr', fr);
moment.updateLocale('zh-cn', zh);
moment.updateLocale('ar-sa', { ...ar, postformat: str => str });

export default {
  data() {
    return {
      localeConfig: {
        fa: {
          displayFormat: 'jYYYY/jMM/jDD',
          lang: { label: 'FA' }
        },
        'ar-sa': {
          dow: 0,
          dir: 'rtl',
          displayFormat: vm => {
            // vm.type = date | time | datetime | year | month | yearmonth
            switch (vm.type) {
              case 'date':
                return 'YYYY/MM/DD'
              case 'datetime':
                return 'YYYY/MM/DD HH:mm'
              case 'year':
                return 'YYYY'
              case 'month':
                return 'MM'
              case 'yearmonth':
                return 'YY/MM'
              case 'time':
                return 'HH:mm'
            }
          },
          lang: {
            label: 'AR',
            submit: 'اختيار',
            cancel: 'إلغاء',
            now: 'الآن',
            nextMonth: 'الشهر القادم',
            prevMonth: 'الشهر الماضي'
          }
        },
        fr: {
          dow: 0,
          dir: 'ltr',
          displayFormat: vm => {
            return vm.type === 'datetime' ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD'
          },
          lang: {
            label: 'FR',
            submit: 'Sélection',
            cancel: 'Annuler',
            now: 'Maintenant',
            nextMonth: 'le mois prochain',
            prevMonth: 'le mois précédent'
          }
        },
        'zh-cn': {
          dow: 0,
          dir: 'ltr',
          displayFormat: vm => {
            return vm.type === 'datetime' ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD'
          },
          lang: {
            label: 'ZH-CN',
            submit: '選拔',
            cancel: '取消',
            now: '現在',
            nextMonth: '下個月',
            prevMonth: '上個月'
          }
        }
      }
    }
  }
}
</script>

<ClientOnly>
  <date-picker
    locale="fr,zh-cn,en,fa,ar-sa"
    :locale-config="localeConfig"
    format="YYYY/M/D"
  />
</ClientOnly>
