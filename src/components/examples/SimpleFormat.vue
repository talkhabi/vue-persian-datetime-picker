<template>
    <card title="Formatting">

        <date-picker v-model="date" format="jYYYY jMMMM jDD"></date-picker>
        <code class="code">{{ date }}</code>

        <template slot="code">
            <highlight-code lang="html">
                &lt;date-picker
                    v-model="date"
                    format="jYYYY jMMMM jDD"&gt;
                &lt;/date-picker&gt;
            </highlight-code>
        </template>

        <template slot="docs">
            <highlight-code :lang="'javascript'">
                "format"
                type: String
                default:
                    HH:mm                //for time
                    jYYYY/jMM/jDD HH:mm  //for datetime
                    jYYYY/jMM/jDD        //for date
                    jYYYY                //for year
                    jMM                  //for month
                example:
                    jYY-jMM-jDD                      //{{ moment().format('jYY-jMM-jDD') }}
                    jYY/jMM/jDD                      //{{ moment().format('jYY/jMM/jDD') }}
                    jYY jMMMM jDD                    //{{ moment().format('jYY jMMMM jDD') }}
                    jYYYY jMMMM jDD                  //{{ moment().format('jYYYY jMMMM jDD') }}
                    dddd jDD jMMMM jYYYY             //{{ moment().format('dddd jDD jMMMM jYYYY') }}
                    dddd jDD jMMMM jYYYY ساعت HH:mm  //{{ moment().format('dddd jDD jMMMM jYYYY ساعت HH:mm') }}

            </highlight-code>
            See <a href="https://github.com/jalaali/moment-jalaali" target="_blank">moment-jalaali</a>
        </template>

    </card>
</template>

<script>
    import moment from 'moment-jalaali'

    export default {

      data () {
        return {
          date: '',
          moment: moment
        }
      }
    }
</script>