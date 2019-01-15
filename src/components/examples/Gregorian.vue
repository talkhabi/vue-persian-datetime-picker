<template>
    <card title="Gregorian datepicker" version="2.0.0">

        <date-picker locale="en"></date-picker>
        <br/>
        <date-picker locale="en,fa"></date-picker>
        <br/>
        <date-picker locale="fa,en"></date-picker>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker locale="en"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker locale="en,fa"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker locale="fa,en"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>

        <template slot="docs">
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
                &lt;date-picker locale="en,fa" :localeConfig='{
                    fa: {
                        dow: 6,     //  first day of week
                        dir: "rtl",
                        lang: {
                            submit:    "تایید",
                            cancel:    "انصراف",
                            now:       "اکنون",
                            nextMonth: "ماه بعد",
                            prevMonth: "ماه قبل",
                        }
                    },
                    en: {
                        dow: 0,
                        dir: "ltr",
                        lang: {
                            submit:    "Select",
                            cancel:    "Cancel",
                            now:       "Now",
                            nextMonth: "Next month",
                            prevMonth: "Previous month",
                        }
                    }
                }'&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>

    </card>
</template>