<template>
    <card title="Simple datetime picker">

        <date-picker v-model="datetime" type="datetime"></date-picker>
        <code class="code">{{ datetime }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker
                    type="datetime"
                    v-model="datetime"&gt;
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