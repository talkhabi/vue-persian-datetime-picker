<template>
  <div class="pt-5">
    <h1 class="text-center" style="margin-bottom: 50px">
      <strong>VUE 3</strong> PERSIAN DATE TIME PICKER
    </h1>
    <h5 class="text-center mb-5">
      A vue 3 plugin to select jalali date and time
    </h5>

    <card title="Simple example" style="margin:0">
      <date-picker v-model="state.date" clearable />
      <template v-slot:code>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker v-model="state.date" clearable /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="state.datetime" type="datetime" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker v-model="state.datetime" type="datetime" /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="state.time" type="time" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker v-model="state.time" type="time" /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="state.yearMonth" type="year-month" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker v-model="state.yearMonth" type="year-month" /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="state.year" type="year" min="1350" max="1410" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker v-model="state.year" type="year" /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="state.month" type="month" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker v-model="state.month" type="month" /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker locale="en,fa" format="YYYY/M/D" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker locale="en,fa" format="YYYY/M/D" /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="state.dateRange" range />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker v-model="state.dateRange" range /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="state.dates" multiple />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker v-model="state.dates" multiple /&gt;</code></pre>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker popover auto-submit />
      <template v-slot:code>
        <pre v-highlightjs><code class="html">&lt;date-picker popover auto-submit /&gt;</code></pre>
      </template>
    </card>
  </div>
</template>

<script>
export default {
  setup() {
    const state = {
      date: '',
      dateRange: [],
      dates: [],
      time: '',
      yearMonth: '',
      datetime: '',
      year: '',
      month: ''
    }

    return {
      state
    }
  }
}
</script>
