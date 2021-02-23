<template>
  <div>
    <h5 class="text-danger text-bold my-5">
      NOTE: Range feature is only supported for `date` type
    </h5>

    <card title="Multiple select" version="2.6.0">
      <date-picker
        multiple
        clearable
        format="YYYY-MM-DD"
        display-format="jMMMM jDD"
      />
      <br />
      <code class="code">{{ dates }}</code>
      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  v-model="dates"
  multiple
  clearable
  format="YYYY-MM-DD"
  display-format="jMMMM jD"
/&gt;</code></pre>
        <pre v-highlightjs><code class="javascript" v-pre>data() {
  return {
    dates: []
  }
} </code></pre>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const dates = ref('')

    return {
      dates
    }
  }
}
</script>
