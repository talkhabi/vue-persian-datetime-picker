<template>
  <card title="Input name and placeholder ">
    <date-picker
      v-model="date"
      format="jYYYY/jMM/jDD"
      name="my_date"
      input-class="form-control form-control-lg"
      placeholder="Select a date"
    />
    <code class="code">{{ date }}</code>

    <template v-slot:code>
      <!-- eslint-disable -->
      <pre v-highlightjs><code class="html" v-pre>
        &lt;date-picker
          v-model="date"
          format="jYYYY/jMM/jDD"
          input-class="form-control form-control-lg"
          name="my_date"
          placeholder="Select a date"
        /&gt;
        </code></pre>
      <!-- eslint-enable -->
    </template>

    <template v-slot:docs>
      <!-- eslint-disable -->
      <pre v-highlightjs><code class="javascript" v-pre>
        // Name for input element
        "name"
        type: String
        default: Null
        example: "my_date"

        // ClassName for input element
        "input-class"
        type: String
        default: Null
        example: "form-control"

        // Placeholder for input element
        "placeholder"
        type: String
        default: Null
        example: "Select a date"
      </code></pre>
      <!-- eslint-enable -->
      <div class="row">
        <div class="col-md-4">
          <!-- eslint-disable -->
          <pre v-highlightjs><code class="html" v-pre>
            &lt;date-picker name="mdy_date" /&gt;
            output:
            &lt;span class="{{ $prefix }}input-group"&gt;
              &lt;label class="{{ $prefix }}icon-btn"&gt;...&lt;/label&gt;
              &lt;input type="text" name="my_date" class="..."/&gt;
            &lt;/span&gt;
          </code></pre>
          <!-- eslint-enable -->
        </div>
        <div class="col-md-4">
          <!-- eslint-disable -->
          <pre v-highlightjs><code class="html" v-pre>
            &lt;date-picker input-class="my-input" /&gt;
            output:
            &lt;span class="{{ $prefix }}input-group"&gt;
              &lt;label class="{{ $prefix }}icon-btn"&gt;...&lt;/label&gt;
              &lt;input type="text" class="my-input" name="..."/&gt;
            &lt;/span&gt;
          </code></pre>
          <!-- eslint-enable -->
        </div>
        <div class="col-md-4">
          <!-- eslint-disable -->
          <pre v-highlightjs><code class="html" v-pre>
            &lt;date-picker placeholder="select a date" /&gt;
            output:
            &lt;span class="{{ $prefix }}input-group"&gt;
              &lt;label class="{{ $prefix }}icon-btn"&gt;...&lt;/label&gt;
              &lt;input type="text" placeholder="select a date"/&gt;
            &lt;/span&gt;
          </code></pre>
          <!-- eslint-enable -->
        </div>
      </div>
    </template>
  </card>
</template>

<script>
export default {
  data() {
    return {
      date: ''
    }
  }
}
</script>
