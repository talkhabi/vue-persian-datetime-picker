<template>
    <card title="Input editable for user">

        <date-picker v-model="date" format="jYYYY/jMM/jDD" placeholder="YYYY/MM/DD" :editable="true"></date-picker>
        <code class="code">{{ date }}</code>

        <template slot="code">
            <highlight-code lang="css" v-pre>
                input.is-editable {
                    direction: ltr;
                    text-align: left;
                }
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker
                    v-model="date"
                    format="jYYYY/jMM/jDD"
                    placeholder="YYYY/MM/DD"
                    :editable="true"&gt;
                &lt;/date-picker&gt;
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