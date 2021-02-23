<template>
  <div>
    <card title="Theme example">
      <date-picker color="#5c6bc0" class="mb-4 d-block" />
      <date-picker color="#e91e63" class="mb-4 pt-1 d-block" />
      <date-picker color="#7b1fa2" class="mb-4  d-block" />
      <date-picker color="#1e88e5" class="mb-4 pt-1 d-block" />
      <date-picker color="#03a9f4" class="mb-4  d-block" />
      <date-picker color="#00acc1" class="mb-4 pt-1 d-block" />
      <date-picker color="#ff9800" class="mb-4  d-block" />
      <date-picker color="dimgray" class="mb-4 pt-1 d-block" />

      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="#5c6bc0" /&gt;</code></pre>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="#e91e63" /&gt;</code></pre>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="#7b1fa2" /&gt;</code></pre>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="#1e88e5" /&gt;</code></pre>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="#03a9f4" /&gt;</code></pre>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="#00acc1" /&gt;</code></pre>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="#ff9800" /&gt;</code></pre>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker color="dimgray" /&gt;</code></pre>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>
