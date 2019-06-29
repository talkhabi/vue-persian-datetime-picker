<template>
  <card title="Append picker to a custom container" version="1.1.1">
    <date-picker append-to="body" />
    <p class="mt-3">
      With this option you can specify where to append the picker
    </p>
    <h5 class="mt-3 text-danger">
      <!-- eslint-disable -->
      This will also work in <b>inline</b> mode! <br />
      So be careful when using these options together.
      <!-- eslint-enable -->
    </h5>
    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;date-picker append-to="body" /&gt;
        &lt;date-picker append-to="#app" /&gt;
        &lt;date-picker append-to=".my-custom-container" /&gt;
      </highlight-code>
      <!-- eslint-enable -->
    </template>
  </card>
</template>
