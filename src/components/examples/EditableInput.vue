<template>
  <card title="Input editable for user">
    <date-picker
      v-model="date"
      format="jYYYY/jMM/jDD"
      placeholder="YYYY/MM/DD"
      :editable="true"
    />
    <code class="code">{{ date }}</code>
    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code :lang="`css`">
        input.is-editable {
          direction: ltr;
          text-align: left;
        }
      </highlight-code>
      <highlight-code v-pre lang="html">
        &lt;date-picker
          v-model="date"
          format="jYYYY/jMM/jDD"
          placeholder="YYYY/MM/DD"
          :editable="true"
        /&gt;
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
