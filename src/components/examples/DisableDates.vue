<template>
    <card title="Disable Dates" version="1.1.4">

        <div key="d" class="mt-5" v-if="tab=='d'">
            <date-picker initialValue="1397/05/01" placeholder="String" disable="1397/05/09"></date-picker>
            <br>
            <date-picker initialValue="1397/05/01" placeholder="Day name" disable="Friday"></date-picker>
            <br>
            <date-picker initialValue="1397/05/01" placeholder="Array of strings" :disable="['1397/05/07', '1397/05/08', 'Friday']"></date-picker>
            <br>
            <date-picker initialValue="1397/05/01" placeholder="Regular Expressions" :disable="/1397\/05\/1(.*)/"></date-picker>
            <br>
            <date-picker initialValue="1397/05/01" placeholder="Array of strings and RegExp" :disable="['1397/05/06', /1397\/05\/1(.*)/]"></date-picker>
            <br>
            <date-picker initialValue="1397/05/01" placeholder="Function" :disable="checkDate"></date-picker>
        </div>

        <div key="y" class="mt-5" v-if="tab=='y'">
            <date-picker initialValue="1397" type="year" placeholder="String" disable="1396"></date-picker>
            <br>
            <date-picker initialValue="1397" type="year" placeholder="Array of strings" :disable="['1398', '1399']"></date-picker>
            <br>
            <date-picker initialValue="1397" type="year" placeholder="Regular Expressions" :disable="/139[2-6]/"></date-picker>
            <br>
            <date-picker initialValue="1397" type="year" placeholder="Array of strings and RegExp" :disable="['1398', /138[1-9]/]"></date-picker>
        </div>

        <div key="m" class="mt-5" v-if="tab=='m'">
            <date-picker initialValue="05" type="month" placeholder="String" disable="04"></date-picker>
            <br>
            <date-picker initialValue="05" type="month" placeholder="Array of strings" :disable="['04', '05', '06']"></date-picker>
            <br>
            <date-picker initialValue="05" type="month" placeholder="Regular Expressions" :disable="/[7-9]/"></date-picker>
            <br>
            <date-picker initialValue="05" type="month" placeholder="Array of strings and RegExp" :disable="['11', /[7-9]/]"></date-picker>
        </div>

        <div key="t" class="mt-5" v-if="tab=='t'">
            <date-picker initialValue="22:00" type="time" placeholder="String" disable="22:00"></date-picker>
            <br>
            <date-picker initialValue="22:00" type="time" placeholder="Array of strings" :disable="['22:00', '22:05', '22:10']"></date-picker>
            <br>
            <date-picker initialValue="22:00" type="time" placeholder="Regular Expressions" :disable="/22:(.*)/"></date-picker>
            <br>
            <date-picker initialValue="22:09" type="time" placeholder="Array of strings and RegExp" :disable="['22:00', /22:1[0-5]/]"></date-picker>
        </div>

        <div key="dt" class="mt-5" v-if="tab=='dt'">
            <date-picker initialValue="1397/05/06 22:00" type="datetime" placeholder="String" disable="1397/05/06 22:00"></date-picker>
            <br>
            <date-picker initialValue="1397/05/06 22:05" type="datetime" placeholder="Array of strings" :disable="['1397/05/04', '1397/05/06 22:05', 'Friday']"></date-picker>
            <br>
            <date-picker initialValue="1397/05/05 12:00" type="datetime" placeholder="Regular Expressions" :disable="/1397\/05\/0[1-9] 12:(.*)/"></date-picker>
            <br>
            <date-picker initialValue="1397/05/01 22:15" type="datetime" placeholder="Array of strings and RegExp" :disable="['1397/05/06 12:00', /(.*)22:(.*)/]"></date-picker>
        </div>


        <template slot="code">

            <div class="btn-group mb-2">
                <span v-for="btn,k in buttons" class="btn" :class="tab===k ?'btn-info':'btn-secondary'" @click="tab=k">{{ btn }}</span>
            </div>

            <template v-if="tab=='d'">
                <highlight-code lang="html" v-pre>
                    String
                    &lt;date-picker disable="1397/05/09"&gt;&lt;/date-picker&gt;

                    Day name
                    &lt;date-picker disable="Friday"&gt;&lt;/date-picker&gt;

                    Array of strings
                    &lt;date-picker :disable="['1397/05/07', '1397/05/08', 'Friday']"&gt;&lt;/date-picker&gt;

                    Regular Expressions
                    &lt;date-picker :disable="/1397\/05\/1(.*)/"&gt;&lt;/date-picker&gt;

                    Array of strings and RegExp
                    &lt;date-picker :disable="['1397/05/06', /1397\/05\/1(.*)/]"&gt;&lt;/date-picker&gt;

                    Function
                    &lt;date-picker :disable="checkDate"&gt;&lt;/date-picker&gt;
                    &lt;script&gt;
                        data() {
                            return {}
                        },
                        methods: {
                            checkDate(formatted, dateMoment, checkingFor) {
                                return (
                                    formatted === '1397/04/03' ||
                                    dateMoment.jMonth() === 4  ||  // means "mordad"
                                    dateMoment.locale('en').format('dddd') === 'Friday'
                                )
                            }
                        }
                    &lt;/script&gt;
                </highlight-code>
            </template>

            <template v-if="tab=='y'">
                <highlight-code lang="html" v-pre>
                    String
                    &lt;date-picker type="year" disable="1396"&gt;&lt;/date-picker&gt;

                    Array of strings
                    &lt;date-picker type="year" :disable="['1398', '1399']"&gt;&lt;/date-picker&gt;

                    Regular Expressions
                    &lt;date-picker type="year" :disable="/139[2-6]/"&gt;&lt;/date-picker&gt;

                    Array of strings and RegExp
                    &lt;date-picker type="year" :disable="['1398', /138[1-9]/]"&gt;&lt;/date-picker&gt;
                </highlight-code>
            </template>

            <template v-if="tab=='m'">
                <highlight-code lang="html" v-pre>
                    String
                    &lt;date-picker type="month" disable="04"&gt;&lt;/date-picker&gt;

                    Array of strings
                    &lt;date-picker type="month" :disable="['04', '05', '06']"&gt;&lt;/date-picker&gt;

                    Regular Expressions
                    &lt;date-picker type="month" :disable="/[7-9]/"&gt;&lt;/date-picker&gt;

                    Array of strings and RegExp
                    &lt;date-picker type="month" :disable="['11', /[7-9]/]"&gt;&lt;/date-picker&gt;
                </highlight-code>
            </template>

            <template v-if="tab=='t'">
                <highlight-code lang="html" v-pre>
                    String
                    &lt;date-picker type="time" disable="22:00"&gt;&lt;/date-picker&gt;

                    Array of strings
                    &lt;date-picker type="time" :disable="['22:00', '22:05', '22:10']"&gt;&lt;/date-picker&gt;

                    Regular Expressions
                    &lt;date-picker type="time" :disable="/22:(.*)/"&gt;&lt;/date-picker&gt;

                    Array of strings and RegExp
                    &lt;date-picker type="time" :disable="['22:00', /22:1[0-5]/]"&gt;&lt;/date-picker&gt;
                </highlight-code>
            </template>

            <template v-if="tab=='dt'">
                <highlight-code lang="html" v-pre>
                    String
                    &lt;date-picker type="datetime" disable="1397/05/06 22:00"&gt;&lt;/date-picker&gt;

                    Array of strings
                    &lt;date-picker type="datetime" :disable="['1397/05/05', '1397/05/06 22:05', 'Friday']"&gt;&lt;/date-picker&gt;

                    Regular Expressions
                    &lt;date-picker type="datetime" :disable="/1397\/05\/0[1-9] 12:(.*)/"&gt;&lt;/date-picker&gt;

                    Array of strings and RegExp
                    &lt;date-picker type="datetime" :disable="['1397/05/06 12:00', /(.*)22:(.*)/]"&gt;&lt;/date-picker&gt;
                </highlight-code>
            </template>


        </template>
    </card>
</template>

<script>
    import moment from 'moment-jalaali'
export default {
      data () {
        return {
          tab: 'd',
          buttons: {
            y: 'Year',
            m: 'Month',
            d: 'Date',
            t: 'Time',
            dt: 'DateTime'
          }
        }
      },
      methods: {
        checkDate (formatted, dateMoment, checkingFor) {
          return (
            formatted === '1397/04/03' ||
                    dateMoment.jMonth() === 4 || // means "mordad"
                    dateMoment.locale('en').format('dddd') === 'Friday'
          )
        }
      }
    }
</script>