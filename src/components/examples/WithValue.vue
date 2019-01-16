<template>
    <div>
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

        <card title="With initial value for start if 'value' is empty" version="1.0.9">

            <date-picker initial-value="1370/01/01"></date-picker>
            <br/>
            <date-picker type="datetime" initial-value="1370/01/01 20:45"></date-picker>
            <br/>
            <date-picker type="time" initial-value="20:45"></date-picker>
            <br/>
            <date-picker type="year" min="1350" max="1410" initial-value="1360"></date-picker>
            <br/>
            <date-picker type="month" initial-value="05"></date-picker>

            <template slot="code">
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="date" initial-value="1370/01/01"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="datetime" type="datetime" initial-value="1370/01/01 20:45"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="time" type="time" initial-value="20:45"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="year" type="year" initial-value="1360"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="month" type="month" initial-value="05"&gt;&lt;/date-picker&gt;
                </highlight-code>
                <highlight-code lang="javascript" v-pre>
                    data() {
                        return {
                            date: '',
                            time: '',
                            datetime: '',
                            year: '',
                            month: '',
                        }
                    }
                </highlight-code>
            </template>
        </card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: '1396/05/03',
            }
        },
    }
</script>