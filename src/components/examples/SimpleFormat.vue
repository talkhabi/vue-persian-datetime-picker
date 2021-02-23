<template>
  <div>
    <card title="Formatting">
      <date-picker v-model="state.date" format="jYYYY jMMMM jDD" />
      <code class="code">{{ state.date }}</code>
      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html">&lt;date-picker
  v-model="date"
  format="jYYYY jMMMM jDD"
/&gt;</code></pre>
        <!-- eslint-enable -->
      </template>

      <template v-slot:docs>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="javascript" v-pre>"format"
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
  dddd jDD jMMMM jYYYY ساعت HH:mm  //{{ moment().format('dddd jDD jMMMM jYYYY ساعت HH:mm') }}</code></pre>
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
          v-model="state.name"
          type="text"
          placeholder="Name"
          class="form-control mb-2"
        />
        <input
          v-model="state.tel"
          type="tel"
          placeholder="Tel"
          class="form-control mb-2"
        />
        <date-picker
          type="date"
          v-model="state.birthday"
          format="dddd jDD jMMMM jYYYY"
          display-format="dddd jDD jMMMM jYYYY"
          placeholder="Birthday"
          initial-value="1989-03-21 00:00:00"
        />
      </div>

      <p class="text-muted- mt-5">
        With this option, you can use the <b>gregorian</b> in backend, while the
        user will only see the <b>jalali</b> date
      </p>

      <template v-slot:code>
        <!-- eslint-disable -->
        <pre v-highlightjs><code class="html" v-pre>&lt;input type="text" v-model="user.name" placeholder="Name" class="form-control" /&gt;

&lt;input type="tel" v-model="user.tel" placeholder="Tel" class="form-control" /&gt;

&lt;date-picker
  v-model="user.birthday"
  format="dddd jDD jMMMM jYYYY"
  display-format="dddd jDD jMMMM jYYYY"
/&gt;</code></pre>
        <pre v-highlightjs><code class="javascript">setup() {
  const user = {
    name: ref(null),
    tel: ref(null),
    birthday: ref(null),
  }
  return {
    user
  }
}</code></pre>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>

<script>
import moment from 'moment-jalaali'

export default {
  setup() {
    const state = {
      date: '',
      moment: moment,
      name: '',
      tel: '',
      birthday: ''
    }

    return {
      state
    }
  }
}
</script>
