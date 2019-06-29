<template>
  <div>
    <card title="Simple datepicker">
      <date-picker v-model="time" type="time" />
      <code class="code">{{ time }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker v-model="time" type="time" /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>

    <card title="Time minimum and maximum">
      <date-picker min="08:08" max="22:00" type="time" />

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            type="time"
            v-model="time"
            min="08:08"
            max="22:00"
          /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>

    <card title="Advance time picker" version="1.1.6">
      <date-picker type="time" :jump-minute="15" :round-minute="true" />
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            v-model="time"
            type="time"
            :jumpMinute="15"
            :roundMinute="true"
          /&gt;
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
      time: ''
    }
  }
}
</script>
