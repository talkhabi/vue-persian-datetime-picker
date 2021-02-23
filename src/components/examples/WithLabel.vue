<template>
  <card title="With label" version="1.1.4">
    <date-picker v-model="start" label="START" />
    <br />
    <date-picker v-model="end" :disabled="!start" :min="start">
      <template v-slot:label>
        <span style="font-size: 20px">&laquo;</span> <span>END</span>
        <span style="font-size: 20px">&raquo;</span>
      </template>
    </date-picker>

    <template v-slot:code>
      <!-- eslint-disable -->
      <pre v-highlightjs><code class="html" v-pre>&lt;date-picker v-model="start" label="START" /&gt;

&lt;date-picker v-model="end" :disabled="!start" :min="start"&gt;
  &lt;template v-slot:label&gt;
    &lt;span style="font-size: 20px"&gt;&laquo;&lt;/span&gt;
    &lt;span&gt;END&lt;/span&gt;
    &lt;span style="font-size: 20px"&gt;&raquo;&lt;/span&gt;
 &lt;/template&gt;
&lt;/date-picker&gt;
      </code></pre>
      <pre v-highlightjs><code class="javascript" v-pre>data() {
  return {
    start: '{{ start }}',
    end: '{{ end }}',
  }
}</code></pre>
      <!-- eslint-enable -->
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      start: '',
      end: ''
    }
  }
}
</script>
