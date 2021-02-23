<template>
  <div>
    <h5 class="text-danger text-bold my-5">
      NOTE: Range feature is only supported for `date` type
    </h5>

    <card title="Range select" version="2.5.0">
      <date-picker
        v-model="range"
        range
        clearable
        format="YYYY-MM-DD"
        display-format="jMMMM jD"
      />
      <br />
      <code class="code">{{ range }}</code>
      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  v-model="range"
  range
  clearable
  format="YYYY-MM-DD"
  display-format="jMMMM jD"
/&gt;</code></pre>
          <pre v-highlightjs><code class="javascript" v-pre>data() {
  return {
    range: []
  }
}</code></pre>
        <!-- eslint-enable -->
      </template>
    </card>

    <card title="With start and end time">
      <date-picker
        v-model="range2"
        range
        clearable
        auto-submit
        locale="en,fa"
        min="2021-02-05"
        max="2021-02-20"
        format="YYYY-MM-DD HH:mm"
        display-format="jYYYY/jM/jD"
      />
      <br />
      <code class="code">{{ range2 }}</code>
      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker
  range
  clearable
  auto-submit
  locale="en,fa"
  min="2021-02-05"
  max="2021-02-20"
  format="YYYY-MM-DD HH:mm"
  display-format="jYYYY/jM/jD"
/&gt;</code></pre>
        <pre v-highlightjs><code class="javascript" v-pre>data() {
   return {
    range: []
  }
}</code></pre>
        <!-- eslint-enable -->
      </template>
    </card>

  </div>
</template>

<script>
export default {
  data() {
    return {
      range: [],
      range2: []
    }
  }
}
</script>
