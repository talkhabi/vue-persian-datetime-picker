<template>
  <div>
    <card title="@input">
      <date-picker
        value="1396/05/02"
        format="jYYYY/jMM/jDD"
        @input="date = $event"
      />
      <code class="code">{{ date }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            value="1396/05/02"
            format="jYYYY/jMM/jDD"
            @input="date=$event"
          &gt;&lt;/date-picker&gt;
          &lt;span&gt;{{ date }}&lt;/span&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>
      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          /**
           * @input
           * triggers when datepicker submitted.
           * returns formatted date as string.
           */
          "$event"
          type: String
          example: 1396 | 1396/05/03 | 1396/05/03 22:20 | 22:20 | ...
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
    <card title="@change">
      <date-picker
        v-model="date_1"
        format="jYYYY/jMM/jDD"
        @change="dateMoment = $event"
      />
      <code class="code">{{ dateMoment.format('dddd jDD jMMMM jYYYY') }}</code>
      <code class="code">{{ date_1 }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html" v-pre>
          &lt;date-picker
            v-model="date"
            format="YYYY/MM/DD"
            @change="dateMoment=$event"
          &gt;&lt;/date-picker&gt;
          &lt;span&gt;{{ dateMoment.format('dddd jDD jMMMM jYYYY') }}&lt;/span&gt;
          &lt;span&gt;{{ date }}&lt;/span&gt;
        </highlight-code>
        <highlight-code lang="javascript" v-pre>
          import moment from 'moment-jalaali';
          export default {
            data(){
              return {
                date: '1396/05/03',
                dateMoment: moment('1396/05/03', 'jYYYY/jMM/jDD'),
              }
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </template>
      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          /**
           * @change
           * triggers when datepicker submitted.
           * returns moment object.
           */
          "$event"
          type: moment Object
        </highlight-code>
        <!-- eslint-enable -->
        <p>See <a href="http://momentjs.com/">momentjs</a></p>
      </template>
    </card>
    <card title="open/close" version="1.1.5">
      <date-picker @open="onOpen" @close="onClose" />
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code v-pre lang="html">
          &lt;date-picker @open="onOpen" @close="onClose"&gt;&lt;/date-picker&gt;
        </highlight-code>
        <highlight-code lang="javascript" v-pre>
          export default {
            methods: {
              onOpen(picker) {
                console.log('The datepicker is open');
              },
              onClose(picker){
                console.log('The datepicker was closed');
              }
            }
          }
        </highlight-code>
        <!-- eslint-enable -->
      </template>
      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          /**
           * @close
           * triggers when datepicker closed.
           * returns null
           */
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
      date: '',
      date_1: '1396/05/03',
      dateMoment: moment('1396/05/03', 'jYYYY/jMM/jDD')
    }
  },
  methods: {
    onOpen() {
      // eslint-disable-next-line
      console.log('The datepicker is open')
    },
    onClose() {
      // eslint-disable-next-line
      console.log('The datepicker was closed')
    }
  }
}
</script>
