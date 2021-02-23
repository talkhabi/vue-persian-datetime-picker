<template>
  <card title="Input editable for user">
    <date-picker
      v-model="date"
      format="jYYYY/jMM/jDD"
      placeholder="YYYY/MM/DD"
      :editable="true"
    />
    <code class="code">{{ date }}</code>
    <template v-slot:code>
      <!-- eslint-disable -->
      <pre v-highlightjs><code class="css" v-pre>input.is-editable {
  direction: ltr;
  text-align: left;
}</code></pre>
      <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  v-model="date"
  format="jYYYY/jMM/jDD"
  placeholder="YYYY/MM/DD"
  :editable="true"
/&gt;</code></pre>
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
