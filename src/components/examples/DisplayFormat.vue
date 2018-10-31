<template>
    <card title="Format only for display" version="1.1.1">
        
        <div style="max-width: 250px">
            <input type="text" v-model="name" placeholder="Name" class="form-control mb-2">
            <input type="tel" v-model="tel" placeholder="Tel" class="form-control mb-2">
            <date-picker
                    v-model="birthday"
                    format="YYYY-MM-DD HH:mm:ss"
                    display-format="dddd jDD jMMMM jYYYY"
                    placeholder="Birthday"
                    initial-value="1989-03-21 00:00:00"
            ></date-picker>
        </div>

        <p class="text-muted- mt-5">With this option, you can use the <b>gregorian</b> in backend, while the user will only see the <b>jalali</b> date</p>


        <template slot="code">
            <highlight-code lang="html">
                &lt;input type="text" v-model="user.name" placeholder="Name" class="form-control"&gt;

                &lt;input type="tel" v-model="user.tel" placeholder="Tel" class="form-control"&gt;

                &lt;date-picker
                    v-model="user.birthday"
                    format="YYYY-MM-DD HH:mm:ss"
                    display-format="dddd jDD jMMMM jYYYY"&gt;
                &lt;/date-picker&gt;
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
        </template>

    </card>
</template>

<script>
    export default {
      data () {
        return {
          name: '',
          tel: '',
          birthday: ''
        }
      }
    }
</script>