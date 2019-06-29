<template>
  <card title="Minimum and maximum">
    <date-picker v-model="date" min="1396/08/08" max="1396/09/09" />
    <code class="code">{{ date }}</code>

    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;date-picker
          v-model="date"
          min="1396/08/08"
          max="1396/09/09"
        /&gt;
      </highlight-code>
      <!-- eslint-enable -->
    </template>

    <template slot="docs">
      <!-- eslint-disable -->
      <highlight-code :lang="'javascript'">
        /**
         * Limit datetime picker minimum and maximum
         */
        "min"
        type: String
        default: Null
        example:
          20:20             //for time
          1396/08/08 20:20  //for datetime
          1396/08/08        //for date
        /*******************************/
        "max"
        type: String
        default: Null
        example: same as "min"
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
