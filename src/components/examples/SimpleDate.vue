<template>
    <card title="Simple example">

        <date-picker v-model="date"></date-picker>
        <br/>
        <date-picker v-model="datetime" type="datetime"></date-picker>
        <br/>
        <date-picker v-model="time" type="time"></date-picker>
        <br/>
        <date-picker v-model="year" type="year" min="1350" max="1410"></date-picker>
        <br/>
        <date-picker v-model="month" type="month"></date-picker>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="date"&gt;&lt;/date-picker&gt;
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