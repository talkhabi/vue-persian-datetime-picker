<template>
  <div class="pt-1">
    <card title="Timezone example" version="2.1.0">
      <date-picker
        v-model="datetime"
        type="datetime"
        format="YYYY-MM-DD HH:mm"
        display-format="jYYYY-jMM-jDD HH:mm"
        :timezone="true"
      />
      <code class="code">UTC: {{ datetime }}</code> <br />

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            v-model="datetime"
            type="datetime"
            format="YYYY-MM-DD HH:mm"
            display-format="jYYYY-jMM-jDD HH:mm"
            :timezone="true"
          /&gt;
          {{ datetime }}
        </highlight-code>
        <highlight-code lang="javascript">
          import moment from 'moment-jalaali'
          export default {
            data() {
              return {
                // moment().utc().format('YYYY-MM-DD HH:mm')
                datetime: '{{ datetime }}'
              }
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
import moment from 'moment-jalaali'
export default {
  data() {
    return {
      datetime: moment()
        .utc()
        .format('YYYY-MM-DD HH:mm')
    }
  }
}
</script>
