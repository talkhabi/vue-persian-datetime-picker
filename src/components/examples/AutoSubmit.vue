<template>
    <card title="Auto submit">

        <date-picker v-model="date" :auto-submit="true"></date-picker>
        <code class="code">{{ date }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="date" :auto-submit="true"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
      data () {
        return {
          date: ''
        }
      }
    }
</script>