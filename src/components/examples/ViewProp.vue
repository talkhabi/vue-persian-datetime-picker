<template>
  <card title="VIEW: Show the 'Year' initially">
    <date-picker v-model="date" format="jYYYY/jMM/jDD" view="year" />
    <code class="code">{{ date }}</code>

    <template v-slot:code>
      <!-- eslint-disable -->
      <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  v-model="date"
  view="year"
  format="jYYYY/jMM/jDD"
/&gt;</code></pre>
      <!-- eslint-enable -->
    </template>

    <template v-slot:docs>
      <!-- eslint-disable -->
      <pre v-highlightjs><code class="javascript" v-pre>/**
* Show 'year', 'month', 'day', or 'time' at startup
*/
"view"
type: String
default: day
example: year | month | day | time</code></pre>
      <pre v-highlightjs><code class="html" v-pre>&lt;date-picker view="year" /&gt;
&lt;date-picker view="month" /&gt;
&lt;date-picker view="time" type="datetime" /&gt;</code></pre>
      <!-- eslint-enable -->
    </template>
  </card>
</template>

<script>
import { ref } from "vue";

  export default {
    setup(){
      const date = ref(null)

      return{
        date
      }
    }
  }
</script>
