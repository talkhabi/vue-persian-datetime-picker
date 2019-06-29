<template>
  <div>
    <card title="Disable Datepicker" version="1.1.4">
      <date-picker :disabled="disabled" class="d-inline-block align-middle" />
      <div class="btn-group align-middle ml-2" role="group">
        <span
          class="btn"
          :class="disabled ? 'btn-info' : 'btn-secondary'"
          @click="disabled = true"
        >
          Disable
        </span>
        <span
          class="btn"
          :class="!disabled ? 'btn-info' : 'btn-secondary'"
          @click="disabled = false"
        >
          Enable
        </span>
      </div>

      <template slot="code">
        <highlight-code lang="html">
          &lt;date-picker :disabled="{{ disabled }}" /&gt;
        </highlight-code>
      </template>
    </card>

    <card title="Disable Dates" version="1.1.4">
      <div v-if="tab === 'd'" key="d" class="mt-5">
        <date-picker
          initial-value="1397/05/01"
          placeholder="String"
          disable="1397/05/09"
        />
        <br />
        <date-picker
          initial-value="1397/05/01"
          placeholder="Day name"
          disable="Friday"
        />
        <br />
        <date-picker
          initial-value="1397/05/01"
          placeholder="Array of strings"
          :disable="['1397/05/07', '1397/05/08', 'Friday']"
        />
        <br />
        <date-picker
          initial-value="1397/05/01"
          placeholder="Regular Expressions"
          :disable="/1397\/05\/1(.*)/"
        />
        <br />
        <date-picker
          initial-value="1397/05/01"
          placeholder="Array of strings and RegExp"
          :disable="['1397/05/06', /1397\/05\/1(.*)/]"
        />
        <br />
        <date-picker
          initial-value="1397/05/01"
          placeholder="Function"
          :disable="checkDate"
        />
      </div>

      <div v-if="tab === 'y'" key="y" class="mt-5">
        <date-picker
          initial-value="1397"
          type="year"
          placeholder="String"
          disable="1396"
        />
        <br />
        <date-picker
          initial-value="1397"
          type="year"
          placeholder="Array of strings"
          :disable="['1398', '1399']"
        />
        <br />
        <date-picker
          initial-value="1397"
          type="year"
          placeholder="Regular Expressions"
          :disable="/139[2-6]/"
        />
        <br />
        <date-picker
          initial-value="1397"
          type="year"
          placeholder="Array of strings and RegExp"
          :disable="['1398', /138[1-9]/]"
        />
      </div>

      <div v-if="tab === 'm'" key="m" class="mt-5">
        <date-picker
          initial-value="05"
          type="month"
          placeholder="String"
          disable="04"
        />
        <br />
        <date-picker
          initial-value="05"
          type="month"
          placeholder="Array of strings"
          :disable="['04', '05', '06']"
        />
        <br />
        <date-picker
          initial-value="05"
          type="month"
          placeholder="Regular Expressions"
          :disable="/[7-9]/"
        />
        <br />
        <date-picker
          initial-value="05"
          type="month"
          placeholder="Array of strings and RegExp"
          :disable="['11', /[7-9]/]"
        />
      </div>

      <div v-if="tab === 't'" key="t" class="mt-5">
        <date-picker
          initial-value="22:00"
          type="time"
          placeholder="String"
          disable="22:00"
        />
        <br />
        <date-picker
          initial-value="22:00"
          type="time"
          placeholder="Array of strings"
          :disable="['22:00', '22:05', '22:10']"
        />
        <br />
        <date-picker
          initial-value="22:00"
          type="time"
          placeholder="Regular Expressions"
          :disable="/22:(.*)/"
        />
        <br />
        <date-picker
          initial-value="22:09"
          type="time"
          placeholder="Array of strings and RegExp"
          :disable="['22:00', /22:1[0-5]/]"
        />
      </div>

      <div v-if="tab === 'dt'" key="dt" class="mt-5">
        <date-picker
          initial-value="1397/05/06 22:00"
          type="datetime"
          placeholder="String"
          disable="1397/05/06 22:00"
        />
        <br />
        <date-picker
          initial-value="1397/05/06 22:05"
          type="datetime"
          placeholder="Array of strings"
          :disable="['1397/05/04', '1397/05/06 22:05', 'Friday']"
        />
        <br />
        <date-picker
          initial-value="1397/05/05 12:00"
          type="datetime"
          placeholder="Regular Expressions"
          :disable="/1397\/05\/0[1-9] 12:(.*)/"
        />
        <br />
        <date-picker
          initial-value="1397/05/01 22:15"
          type="datetime"
          placeholder="Array of strings and RegExp"
          :disable="['1397/05/06 12:00', /(.*)22:(.*)/]"
        />
      </div>

      <template slot="code">
        <div class="btn-group mb-2">
          <span
            v-for="(btn, k) in buttons"
            :key="k"
            class="btn"
            :class="tab === k ? 'btn-info' : 'btn-secondary'"
            @click="tab = k"
          >
            {{ btn }}
          </span>
        </div>

        <template v-if="tab === 'd'">
          <!-- eslint-disable -->
          <highlight-code lang="html" v-pre>
            String
            &lt;date-picker disable="1397/05/09" /&gt;

            Day name
            &lt;date-picker disable="Friday" /&gt;

            Array of strings
            &lt;date-picker :disable="['1397/05/07', '1397/05/08', 'Friday']" /&gt;

            Regular Expressions
            &lt;date-picker :disable="/1397\/05\/1(.*)/" /&gt;

            Array of strings and RegExp
            &lt;date-picker :disable="['1397/05/06', /1397\/05\/1(.*)/]" /&gt;

            Function
            &lt;date-picker :disable="checkDate" /&gt;
            &lt;script&gt;
              data() {
                return {}
              },
              methods: {
                checkDate(formatted, dateMoment, checkingFor) {
                  return (
                    formatted === '1397/04/03' ||
                    dateMoment.jMonth() === 4  ||  // means "mordad"
                    dateMoment.locale('en').format('dddd') === 'Friday'
                  )
                }
              }
            &lt;/script&gt;
          </highlight-code>
        <!-- eslint-enable -->
        </template>

        <template v-if="tab === 'y'">
          <!-- eslint-disable -->
          <highlight-code lang="html" v-pre>
            String
            &lt;date-picker type="year" disable="1396" /&gt;

            Array of strings
            &lt;date-picker type="year" :disable="['1398', '1399']" /&gt;

            Regular Expressions
            &lt;date-picker type="year" :disable="/139[2-6]/" /&gt;

            Array of strings and RegExp
            &lt;date-picker type="year" :disable="['1398', /138[1-9]/]" /&gt;
          </highlight-code>
          <!-- eslint-enable -->
        </template>

        <template v-if="tab === 'm'">
          <!-- eslint-disable -->
          <highlight-code lang="html" v-pre>
            String
            &lt;date-picker type="month" disable="04" /&gt;

            Array of strings
            &lt;date-picker type="month" :disable="['04', '05', '06']" /&gt;

            Regular Expressions
            &lt;date-picker type="month" :disable="/[7-9]/" /&gt;

            Array of strings and RegExp
            &lt;date-picker type="month" :disable="['11', /[7-9]/]" /&gt;
          </highlight-code>
          <!-- eslint-enable -->
        </template>

        <template v-if="tab === 't'">
          <!-- eslint-disable -->
          <highlight-code lang="html" v-pre>
            String
            &lt;date-picker type="time" disable="22:00" /&gt;

            Array of strings
            &lt;date-picker type="time" :disable="['22:00', '22:05', '22:10']" /&gt;

            Regular Expressions
            &lt;date-picker type="time" :disable="/22:(.*)/" /&gt;

            Array of strings and RegExp
            &lt;date-picker type="time" :disable="['22:00', /22:1[0-5]/]" /&gt;
          </highlight-code>
        <!-- eslint-enable -->
        </template>

        <template v-if="tab === 'dt'">
          <!-- eslint-disable -->
          <highlight-code lang="html" v-pre>
            String
            &lt;date-picker type="datetime" disable="1397/05/06 22:00" /&gt;

            Array of strings
            &lt;date-picker type="datetime" :disable="['1397/05/05', '1397/05/06 22:05', 'Friday']" /&gt;

            Regular Expressions
            &lt;date-picker type="datetime" :disable="/1397\/05\/0[1-9] 12:(.*)/" /&gt;

            Array of strings and RegExp
            &lt;date-picker type="datetime" :disable="['1397/05/06 12:00', /(.*)22:(.*)/]" /&gt;
          </highlight-code>
          <!-- eslint-enable -->
        </template>
      </template>
    </card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'd',
      buttons: {
        y: 'Year',
        m: 'Month',
        d: 'Date',
        t: 'Time',
        dt: 'DateTime'
      },
      disabled: true
    }
  },
  methods: {
    checkDate(formatted, dateMoment) {
      return (
        formatted === '1397/04/03' ||
        dateMoment.jMonth() === 4 || // means "mordad"
        dateMoment.locale('en').format('dddd') === 'Friday'
      )
    }
  }
}
</script>
