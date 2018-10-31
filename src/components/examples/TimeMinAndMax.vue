<template>
    <card title="Time minimum and maximum">

        <date-picker v-model="time" min="08:08" max="22:00" type="time"></date-picker>
        <code class="code">{{ time }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker
                    type="time"
                    v-model="time"
                    min="08:08"
                    max="22:00"&gt;
                &lt;/date-picker&gt;
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