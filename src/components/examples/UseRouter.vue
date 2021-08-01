<template>
  <div>
    <card title="Using vue-router" version="2.8.0">
      <date-picker use-router class="mb-4 pt-1 d-block" />
      <date-picker use-router="foo" class="mb-4 pt-1 d-block" />
      <date-picker id="bar" use-router class="mb-4 pt-1 d-block" />
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker use-router /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker use-router="foo" /&gt;
        </highlight-code>
        <highlight-code lang="html" v-pre>
          &lt;date-picker id="bar" use-router /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>

    <!-- eslint-disable -->
    <highlight-code lang="html" v-pre>
      This option helps users to close the picker without changing the screen
      when pressing the back button

      example &lt;date-picker use-router /&gt;          => example.com/home?vpd-75454=active
      example &lt;date-picker use-router="foo" /&gt;    => example.com/home?vpd-foo=active
      example &lt;date-picker id="bar" use-router /&gt; => example.com/home?vpd-bar=active
    </highlight-code>
    <!-- eslint-enable -->
  </div>
</template>
