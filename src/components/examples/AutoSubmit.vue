<template>
  <div>
    <card title="Auto submit">
      <date-picker v-model="date" :auto-submit="true" />
      <code class="code">{{ date }}</code>
      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker v-model="date" :auto-submit="true" /&gt;</code></pre>
        <!-- eslint-enable -->
      </template>
    </card>
    <card title="Wrapper submit" version="1.0.6">
      <date-picker :wrapper-submit="true" />
      <code class="code">{{ date }}</code>
      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker :wrapper-submit="true" /&gt;</code></pre>
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
