<template>
    <card title="Custom input element and editable">


        <button type="button" class="btn btn-primary" @click="show=true">Show Datepicker</button>

        <input type="text"
               class="form-control is-editable"
               v-model="date"
               id="my-custom-editable-input"
               placeholder="YYYY/MM/DD"
               style="max-width:250px;display: inline-block">

        <date-picker
                v-model="date"
                format="jYYYY/jMM/jDD"
                element="my-custom-editable-input"
                :editable="true"
                :show="show"
                @close="show=false"
        ></date-picker>
        <code class="code">{{ date }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;button
                    type="button"
                    class="btn btn-primary"
                    @click="show=true"&gt;
                        Show Datepicker
                &lt;/button&gt;

                &lt;input
                    type="text"
                    class="form-control is-editable"
                    placeholder="YYYY/MM/DD"
                    v-model="date"
                    id="my-custom-editable-input"&gt;

                &lt;date-picker
                    v-model="date"
                    format="jYYYY/jMM/jDD"
                    element="my-custom-editable-input"
                    :editable="true"
                    :show="show"
                    @close="show=false"&gt;
                &lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="javascript">
                data() {
                    return{
                        date: '',
                        show: false
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
          date: '',
          show: false
        }
      }
    }
</script>