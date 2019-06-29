<template>
  <card title="Alt field name and format">
    <date-picker
      v-model="date"
      alt-name="date_alt"
      alt-format="YYYY-MM-DD HH:mm:ss"
    />
    <code class="code">{{ date }}</code>
    <template slot="code">
      <!-- eslint-disable -->
      <highlight-code lang="html" v-pre>
        &lt;date-picker
          v-model="date"
          alt-name="date_alt"
          alt-format="YYYY-MM-DD HH:mm:ss"
        /&gt;
      </highlight-code>
      <highlight-code lang="html">
        output:
        &lt;span class="{{ $prefix }}input-group"&gt;
          &lt;label class="{{ $prefix }}icon-btn"&gt;...&lt;/label&gt;
          &lt;input type="text" class="..." value="1396/09/09"/&gt;
          &lt;input type="hidden" name="date_alt" value="2017-11-30 00:00:00"&gt;
        &lt;/span&gt;
      </highlight-code>
      <!-- eslint-enable -->
      <h5>
        An alternate field will only be created when you enter the name
        (alt-name="...").
      </h5>
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
