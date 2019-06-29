<template>
  <div>
    <card title="Simple datetime picker">
      <date-picker v-model="datetime" type="datetime" />
      <code class="code">{{ datetime }}</code>

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            type="datetime"
            v-model="datetime"
          /&gt;
        </highlight-code>
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

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            type="datetime"
            v-model="datetime"
            min="1396/08/08 08:00"
            max="1396/08/10 20:00"
          &gt;
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
      datetime: '',
      datetime2: ''
    }
  }
}
</script>
