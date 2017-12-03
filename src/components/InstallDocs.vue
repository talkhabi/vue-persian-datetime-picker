<template>
    <div>
        <h5 class="text-center">A vue plugin to select jalali date and time</h5>
        <hr>
        <h2>Installation:</h2>

        <highlight-code lang="bash" v-pre>
            npm install vue-persian-datetime-picker --save
        </highlight-code>

        <p>webpack.config.js:</p>

        <highlight-code lang="javascript" v-pre>
            /**
             * configuration for moment to ignore loading locales
             */
            module.exports.plugins = [
                //...
                new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
                //...
            ]
        </highlight-code>

        <hr>

        <h1>Usage</h1>
        <p>main.js</p>

        <highlight-code lang="javascript" v-pre>
            import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
            Vue.component('date-picker', VuePersianDatetimePicker);
        </highlight-code>

        <p>Or in component</p>

        <highlight-code lang="javascript" v-pre>

            &lt;template&gt;
              &lt;div&gt;
                &lt;date-picker v-model="date"&gt;&lt;/date-picker&gt;
              &lt;/div&gt;
            &lt;/template&gt;

            &lt;script&gt;
                import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
                export default {
                    data(){
                        return {
                            date: ''
                        }
                    },
                    components: {
                        datePicker: VuePersianDatetimePicker
                    }
                }
            &lt;/script&gt;
        </highlight-code>

    </div>
</template>
