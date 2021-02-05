<template>
  <div>
    <h5 class="text-danger text-bold my-5">
      NOTE: Range feature is only supported for `date` type
    </h5>

    <card title="Multiple select" version="2.6.0">
      <date-picker
        v-model="dates"
        multiple
        clearable
        format="YYYY-MM-DD"
        display-format="jMMMM jD"
      />
      <br />
      <code class="code">{{ dates }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html">
          &lt;date-picker
            v-model="dates"
            multiple
            clearable
            format="YYYY-MM-DD"
            display-format="jMMMM jD"
          /&gt;
        </highlight-code>
        <highlight-code lang="javascript">
          data() {
            return {
              dates: []
            }
          }
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
      dates: []
    }
  }
}
</script>
