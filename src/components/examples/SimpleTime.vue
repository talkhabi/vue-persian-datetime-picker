<template>
    <card title="Simple datepicker">

        <date-picker v-model="time" type="time"></date-picker>
        <code class="code">{{ time }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="time" type="time"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
      data () {
        return {
          time: ''
        }
      }
    }
</script>