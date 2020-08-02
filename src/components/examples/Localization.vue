<template>
  <div>
    <card title="Gregorian datepicker" version="2.0.0">
      <date-picker locale="en" />
      <br />
      <date-picker locale="en,fa" format="YYYY/M/D" />
      <br />
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

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker locale="en" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker locale="en,fa" format="YYYY/M/D" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker
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
          /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>

      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          "locale"
          type: String
          default: "fa"
          example: "fa" | "en" | "en,fa" | "fa,en" // ordering is important!
          /*******************************/
          "localeConfig"
          type: Object
          default: {}
          example:
          &lt;date-picker locale="en,fa" :localeConfig="{
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
          /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>

    <card title="Custom locale" version="2.2.0">
      <date-picker
        locale="fr,zh-cn,en,fa,ar-sa"
        :locale-config="localeConfig"
      />
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            locale="fr,zh-cn,en,fa,ar-sa"
            :locale-config="localeConfig"
            format="YYYY/M/D"
          /&gt;
        </highlight-code>
        <highlight-code :lang="'javascript'">
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
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
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
</script>
