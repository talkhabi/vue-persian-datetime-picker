<template>
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
          date-picker
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
</template>
