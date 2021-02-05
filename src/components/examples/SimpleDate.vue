<template>
  <div class="pt-5">
    <h1 class="text-center" style="margin-bottom: 50px">
      VUE PERSIAN DATE TIME PICKER
    </h1>
    <h5 class="text-center mb-5">
      A vue plugin to select jalali date and time
    </h5>

    <card title="Simple example" style="margin:0">
      <date-picker v-model="date" clearable />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="date" clearable /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="datetime" type="datetime" />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="datetime" type="datetime" /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="time" type="time" />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="time" type="time" /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="yearMonth" type="year-month" />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="yearMonth" type="year-month" /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="year" type="year" min="1350" max="1410" />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="year" type="year" /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="month" type="month" />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="month" type="month" /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker locale="en,fa" format="YYYY/M/D" />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker locale="en,fa" format="YYYY/M/D" /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="dateRange" range />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="dateRange" range /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker v-model="dates" multiple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker v-model="dates" multiple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker popover auto-submit />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker popover auto-submit /&gt;
        </highlight-code>
      </template>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      dateRange: [],
      dates: [],
      time: '',
      yearMonth: '',
      datetime: '',
      year: '',
      month: ''
    }
  }
}
</script>
