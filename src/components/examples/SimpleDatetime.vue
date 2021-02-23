<template>
  <div>
    <card title="Simple datetime picker">
      <date-picker v-model="datetime" type="datetime" />
      <code class="code">{{ datetime }}</code>

      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  type="datetime"
  v-model="datetime"
/&gt; </code></pre>
        <!-- eslint-enable -->
      </template>
    </card>

    <card title="Compact mode" version="2.4.0">
      <date-picker type="datetime" compact-time auto-submit />

      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  type="datetime"
  compact-time
  auto-submit
/&gt;</code></pre>
        <!-- eslint-enable -->
      </template>
    </card>

    <card title="Datetime minimum and maximum">
      <date-picker
        v-model="datetime2"
        type="datetime"
        min="1396/08/08 08:00"
        max="1396/08/10 20:00"
      />
      <code class="code">{{ datetime2 }}</code>

      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  type="datetime"
  v-model="datetime"
  min="1396/08/08 08:00"
  max="1396/08/10 20:00"
&gt;</code></pre>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datetime: '',
      datetime2: ''
    }
  }
}
</script>
