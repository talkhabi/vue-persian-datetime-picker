<template>
    <card title="Disable Datepicker" version="1.1.4">

        <date-picker :disabled="disabled" class="d-inline-block align-middle"></date-picker>
        <div class="btn-group align-middle ml-2" role="group">
            <span class="btn" @click="disabled=true" :class="disabled ? 'btn-info':'btn-secondary'">Disable</span>
            <span class="btn" @click="disabled=false" :class="!disabled ? 'btn-info':'btn-secondary'">Enable</span>
        </div>

        <template slot="code">
            <highlight-code lang="html">
                &lt;date-picker :disabled="{{ disabled }}"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
      data () {
        return {
          disabled: true
        }
      }
    }
</script>