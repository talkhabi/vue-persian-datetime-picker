<template>
  <div>
    <card title="Auto submit">
      <date-picker v-model="date" :auto-submit="true" />
      <code class="code">{{ date }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="date" :auto-submit="true" /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
    <card title="Wrapper submit" version="1.0.6">
      <date-picker :wrapper-submit="true" />
      <code class="code">{{ date }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker :wrapper-submit="true" /&gt;
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
      date: ''
    }
  }
}
</script>
