<template>
    <card title="Datetime minimum and maximum">

        <date-picker
                type="datetime"
                v-model="datetime"
                min="1396/08/08 08:00"
                max="1396/08/10 20:00"
        ></date-picker>
        <code class="code">{{ datetime }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker
                    type="datetime"
                    v-model="datetime"
                    min="1396/08/08 08:00"
                    max="1396/08/10 20:00"&gt;
                &lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
      data () {
        return {
          datetime: ''
        }
      }
    }
</script>