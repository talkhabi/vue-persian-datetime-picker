<template>
  <div>
    <card title="Formatting">
      <date-picker v-model="date" format="jYYYY jMMMM jDD" />
      <code class="code">{{ date }}</code>
      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html">
          &lt;date-picker
            v-model="date"
            format="jYYYY jMMMM jDD"
          /&gt;
        </highlight-code>
        <!-- eslint-enable -->
      </template>

      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          "format"
          type: String
          default:
            HH:mm                //for time
            jYYYY/jMM/jDD HH:mm  //for datetime
            jYYYY/jMM/jDD        //for date
            jYYYY                //for year
            jMM                  //for month
          example:
            jYY-jMM-jDD                      //{{ moment().format('jYY-jMM-jDD') }}
            jYY/jMM/jDD                      //{{ moment().format('jYY/jMM/jDD') }}
            jYY jMMMM jDD                    //{{ moment().format('jYY jMMMM jDD') }}
            jYYYY jMMMM jDD                  //{{ moment().format('jYYYY jMMMM jDD') }}
            dddd jDD jMMMM jYYYY             //{{ moment().format('dddd jDD jMMMM jYYYY') }}
            dddd jDD jMMMM jYYYY ساعت HH:mm  //{{ moment().format('dddd jDD jMMMM jYYYY ساعت HH:mm') }}
        </highlight-code>
        <!-- eslint-enable -->
        See
        <a href="https://github.com/jalaali/moment-jalaali" target="_blank">
          moment-jalaali
        </a>
      </template>
    </card>

    <card title="Format only for display" version="1.1.1">
      <div style="max-width: 250px">
        <input
          v-model="name"
          type="text"
          placeholder="Name"
          class="form-control mb-2"
        />
        <input
          v-model="tel"
          type="tel"
          placeholder="Tel"
          class="form-control mb-2"
        />
        <date-picker
          v-model="birthday"
          format="YYYY-MM-DD HH:mm:ss"
          display-format="dddd jDD jMMMM jYYYY"
          placeholder="Birthday"
          initial-value="1989-03-21 00:00:00"
        />
      </div>

      <p class="text-muted- mt-5">
        With this option, you can use the <b>gregorian</b> in backend, while the
        user will only see the <b>jalali</b> date
      </p>

      <template slot="code">
        <!-- eslint-disable -->
        <highlight-code lang="html">
          &lt;input type="text" v-model="user.name" placeholder="Name" class="form-control" /&gt;

          &lt;input type="tel" v-model="user.tel" placeholder="Tel" class="form-control" /&gt;

          &lt;date-picker
            v-model="user.birthday"
            format="YYYY-MM-DD HH:mm:ss"
            display-format="dddd jDD jMMMM jYYYY"
          /&gt;
        </highlight-code>
        <highlight-code lang="javascript">
          data() {
            return {
              user: {
                name: '{{ name }}',
                tel: '{{ tel }}',
                birthday: '{{ birthday }}',
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
      date: '',
      moment: moment,
      name: '',
      tel: '',
      birthday: ''
    }
  }
}
</script>
