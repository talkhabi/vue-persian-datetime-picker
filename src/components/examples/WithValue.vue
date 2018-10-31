<template>
    <card title="With initial value">

        <date-picker v-model="date" format="jYYYY/jMM/jDD"></date-picker>
        <code class="code">{{ date }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker
                    v-model="date"
                    format="jYYYY/jMM/jDD"&gt;
                &lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="javascript">
                data() {
                    return{
                        date: '1396/05/03'
                    }
                }
            </highlight-code>
        </template>

        <template slot="docs">
            <highlight-code :lang="'javascript'">
                /**
                * Show datepicker with initial value
                * v-bind:value="..."
                * or v-model="..."
                */
                "value"
                type: String
                default: Null
                example: 20:20  |  1396/08/08 20:20  |   1396/08/08
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker value="1396/05/05" format="jYYYY/jMM/jDD"&gt;&lt;/date-picker&gt;
                &lt;date-picker value="1396-05-05" format="jYYYY-jMM-jDD"&gt;&lt;/date-picker&gt;
                &lt;date-picker value="2017/10/03" format="YYYY/MM/DD"&gt;&lt;/date-picker&gt;
                &lt;date-picker value="2017/10/03" input-format="YYYY/MM/DD" format="jYYYY/jMM/jDD"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
      data () {
        return {
          date: '1396/05/03'
        }
      }
    }
</script>