<template>
    <card title="Simple example">

        <date-picker v-model="date"></date-picker>
        <br/>
        <date-picker v-model="datetime" type="datetime"></date-picker>
        <br/>
        <date-picker v-model="time" type="time"></date-picker>
        <br/>
        <date-picker v-model="year" type="year" min="1350" max="1410"></date-picker>
        <br/>
        <date-picker v-model="month" type="month"></date-picker>
        <br/>
        <div>
            <date-picker :disabled="disabled" class="d-inline-block align-middle"></date-picker>
            <div class="btn-group align-middle ml-2" role="group">
                <span class="btn" @click="disabled=true" :class="disabled ? 'btn-info':'btn-secondary'">Disable</span>
                <span class="btn" @click="disabled=false" :class="!disabled ? 'btn-info':'btn-secondary'">Enable</span>
            </div>
        </div>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="date"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="datetime" type="datetime"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="time" type="time"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="year" type="year"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html" v-pre>
                &lt;date-picker v-model="month" type="month"&gt;&lt;/date-picker&gt;
            </highlight-code>
            <highlight-code lang="html">
                @version 1.1.4
                &lt;date-picker :disabled="{{ disabled }}"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
        data() {
            return {
                date: '',
                time: '',
                datetime: '',
                year: '',
                month: '',
                disabled: true
            }
        },
    }
</script>