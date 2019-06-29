<template>
  <card title="Custom input element and editable">
    <button type="button" class="btn btn-primary" @click="show = true">
      Show Datepicker
    </button>

    <input
      id="my-custom-editable-input"
      v-model="date"
      type="text"
      class="form-control is-editable"
      placeholder="YYYY/MM/DD"
      style="max-width:250px;display: inline-block"
    />

    <date-picker
      v-model="date"
      format="jYYYY/jMM/jDD"
      element="my-custom-editable-input"
      :editable="true"
      :show="show"
      @close="show = false"
    />
    <code class="code">{{ date }}</code>

    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;button
          type="button"
          class="btn btn-primary"
          @click="show=true"
        &gt;
          Show Datepicker
        &lt;/button&gt;

        &lt;input
          type="text"
          class="form-control is-editable"
          placeholder="YYYY/MM/DD"
          v-model="date"
          id="my-custom-editable-input"
        /&gt;

        &lt;date-picker
          v-model="date"
          format="jYYYY/jMM/jDD"
          element="my-custom-editable-input"
          :editable="true"
          :show="show"
          @close="show=false"
        /&gt;
      </highlight-code>
      <highlight-code lang="javascript">
        data() {
          return{
            date: '',
            show: false
          }
        }
      </highlight-code>
      <!-- eslint-enable -->
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      show: false
    }
  }
}
</script>
