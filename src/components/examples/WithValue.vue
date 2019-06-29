<template>
  <div>
    <card title="With initial value">
      <date-picker v-model="date" format="jYYYY/jMM/jDD" />
      <code class="code">{{ date }}</code>

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            v-model="date"
            format="jYYYY/jMM/jDD"
          /&gt;
        </highlight-code>
        <highlight-code lang="javascript">
          data() {
            return{
              date: '1396/05/03'
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </template>

      <template slot="docs">
        <!-- eslint-disable -->
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
          &lt;date-picker value="1396/05/05" format="jYYYY/jMM/jDD" /&gt;
          &lt;date-picker value="1396-05-05" format="jYYYY-jMM-jDD" /&gt;
          &lt;date-picker value="2017/10/03" format="YYYY/MM/DD" /&gt;
          &lt;date-picker value="2017/10/03" input-format="YYYY/MM/DD" format="jYYYY/jMM/jDD" /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>

    <card
      title="With initial value for start if 'value' is empty"
      version="1.0.9"
    >
      <date-picker initial-value="1370/01/01" />
      <br />
      <date-picker type="datetime" initial-value="1370/01/01 20:45" />
      <br />
      <date-picker type="time" initial-value="20:45" />
      <br />
      <date-picker type="year" min="1350" max="1410" initial-value="1360" />
      <br />
      <date-picker type="month" initial-value="05" />

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" initial-value="1370/01/01" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="datetime" type="datetime" initial-value="1370/01/01 20:45" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="time" type="time" initial-value="20:45" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="year" type="year" initial-value="1360" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="month" type="month" initial-value="05" /&gt;
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
      <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '1396/05/03'
    }
  }
}
</script>
