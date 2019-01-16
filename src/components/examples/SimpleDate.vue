<template>
    <div class="pt-5">
        <h1 class="text-center" style="margin-bottom: 50px">VUE PERSIAN DATE TIME PICKER</h1>
        <h5 class="text-center mb-5">A vue plugin to select jalali date and time</h5>

        <card title="Simple example">
            <date-picker v-model="date" :clearable="true"></date-picker>
            <br/>
            <date-picker v-model="datetime" type="datetime"></date-picker>
            <br/>
            <date-picker v-model="time" type="time"></date-picker>
            <br/>
            <date-picker v-model="year" type="year" min="1350" max="1410"></date-picker>
            <br/>
            <date-picker v-model="month" type="month"></date-picker>
            <br/>
            <date-picker locale="en,fa" format="YYYY/M/D"></date-picker>

            <template slot="code">
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="date" :clearable="true"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="datetime" type="datetime"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="time" type="time"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="year" type="year"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="month" type="month"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker locale="en,fa" format="YYYY/M/D"&gt;&lt;/date-picker&gt;
                </highlight-code>
            </template>
        </card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: '',
                time: '',
                datetime: '',
                year: '',
                month: '',
            }
        },
    }
</script>