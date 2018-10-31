<template>
    <card title="With initial value for start if 'value' is empty" version="1.0.9">

        <date-picker v-model="date" initial-value="1370/01/01"></date-picker>
        <br/>
        <date-picker v-model="datetime" type="datetime" initial-value="1370/01/01 20:45"></date-picker>
        <br/>
        <date-picker v-model="time" type="time" initial-value="20:45"></date-picker>
        <br/>
        <date-picker v-model="year" type="year" min="1350" max="1410" initial-value="1360"></date-picker>
        <br/>
        <date-picker v-model="month" type="month" initial-value="05"></date-picker>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="date" initial-value="1370/01/01"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="datetime" type="datetime" initial-value="1370/01/01 20:45"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="time" type="time" initial-value="20:45"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="year" type="year" initial-value="1360"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="month" type="month" initial-value="05"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="javascript" v-pre>
                data() {
                    return {
                        date: '',
                        time: '',
                        datetime: '',
                        year: '',
                        month: '',
                    }
                }
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
      data () {
        return {
          date: '',
          time: '',
          datetime: '',
          year: '',
          month: ''
        }
      }
    }
</script>