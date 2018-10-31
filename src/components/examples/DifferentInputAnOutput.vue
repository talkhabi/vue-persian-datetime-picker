<template>
    <card title="Different input and output values">

        <date-picker
                value="2017-05-10"
                input-format="YYYY-MM-DD"
                format="jYYYY/jMM/jDD"
                @input="date=$event"
        ></date-picker>
        <code class="code">{{ date }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker
                    value="2017-05-10"
                    input-format="YYYY-MM-DD"
                    format="jYYYY/jMM/jDD"
                    @input="date=$event"&gt;
                &lt;/date-picker&gt;
            </highlight-code>
        </template>

        <template slot="docs">
            <highlight-code :lang="'javascript'">
                /**
                * Different input and output format
                * 1_ set input by          value="..."
                * 2_ set input format by   input-format="..."
                * 3_ set output format by  format="..."
                * 4_ get output by         @input="date=$event"
                */
                "$event"
                type: String
                returns formatted datetime
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker value="2017/10/03" input-format="YYYY/MM/DD" format="jYYYY/jMM/jDD" @input="date=$event"&gt;&lt;/date-picker&gt;
                &lt;date-picker value="1396-05-05" input-format="jYYYY-jMM-jDD" format="YYYY/MM/jDD" @input="date=$event"&gt;&lt;/date-picker&gt;
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