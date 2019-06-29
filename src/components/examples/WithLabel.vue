<template>
  <card title="With label" version="1.1.4">
    <date-picker v-model="start" label="START" />
    <br />
    <date-picker v-model="end" :disabled="!start" :min="start">
      <div slot="label">
        <span style="font-size: 20px">&laquo;</span> <span>END</span>
        <span style="font-size: 20px">&raquo;</span>
      </div>
    </date-picker>

    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;date-picker v-model="start" label="START" /&gt;

        &lt;date-picker v-model="end" :disabled="!start" :min="start"&gt;
          &lt;div slot="label"&gt;
            &lt;span style="font-size: 20px"&gt;&laquo;&lt;/span&gt;
            &lt;span&gt;END&lt;/span&gt;
            &lt;span style="font-size: 20px"&gt;&raquo;&lt;/span&gt;
          &lt;/div&gt;
        &lt;/date-picker&gt;
      </highlight-code>
      <highlight-code lang="javascript">
        data() {
          return {
            start: '{{ start }}',
            end: '{{ end }}',
          }
        }
      </highlight-code>
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
