<template>
  <card title="VIEW: Show the 'Year' initially">
    <date-picker v-model="date" format="jYYYY/jMM/jDD" view="year" />
    <code class="code">{{ date }}</code>

    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;date-picker
          v-model="date"
          view="year"
          format="jYYYY/jMM/jDD"
        /&gt;
      </highlight-code>
      <!-- eslint-enable -->
    </template>

    <template slot="docs">
      <!-- eslint-disable -->
      <highlight-code :lang="'javascript'">
        /**
        * Show 'year', 'month', 'day', or 'time' at startup
        */
        "view"
        type: String
        default: day
        example: year | month | day | time
      </highlight-code>
      <highlight-code lang="html" v-pre>
        &lt;date-picker view="year" /&gt;
        &lt;date-picker view="month" /&gt;
        &lt;date-picker view="time" type="datetime" /&gt;
      </highlight-code>
      <!-- eslint-enable -->
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      date: ''
    }
  }
}
</script>
