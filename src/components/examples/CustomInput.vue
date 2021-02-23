<template>
  <card title="Custom input element">
    <input
      id="my-custom-input"
      v-model="date"
      type="text"
      class="form-control form-control-lg"
      placeholder="select date"
      style="max-width:250px"
    />
    <date-picker
      model-value="date"
      format="jYYYY/jMM/jDD"
      element="my-custom-input"
    />
    <code class="code">{{ date }}</code>
    <template v-slot:code>
      <!-- eslint-disable -->
      <pre v-highlightjs><code class="html" v-pre>&lt;input
  type="text"
  class="form-control form-control-lg"
  v-model="date"
  id="my-custom-input"
  placeholder="select date"
/&gt;

&lt;date-picker
  v-model="date"
  format="jYYYY/jMM/jDD"
  element="my-custom-input"
/&gt;
      </code></pre>
      <!-- eslint-enable -->
    </template>
    <template v-slot:docs>
      <!-- eslint-disable -->
      <p>Sometime you need a custom input element:</p>
      <pre v-highlightjs><code class="html" v-pre>&lt;input type="text" name="my_date" class="my-custom-input" /&gt;</code></pre>
      <p>define an <code class="inline">id</code> for it:</p>
      <pre v-highlightjs><code class="html" v-pre>&lt;input type="text" name="my_date" class="my-custom-input" id="my-custom-input-id" /&gt;</code></pre>
      <p>then pass <code class="inline">id</code> to datepicker:</p>
      <pre v-highlightjs><code class="html" v-pre>&lt;date-picker v-model="..." format="..." element="my-custom-input-id" /&gt;</code></pre>
      <!-- eslint-enable -->
    </template>
  </card>
</template>

<script>
  import { ref } from 'vue'
export default {
  setup() {
    const date = ref(null)

    return {
      date
    }
  }
}
</script>
