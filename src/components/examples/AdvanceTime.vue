<template>
    <card title="Advance time picker" version="1.1.6">

        <date-picker v-model="time" type="time" :jumpMinute="15" :roundMinute="true"></date-picker>
        <code class="code">{{ time }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker
                    v-model="time"
                    type="time"
                    :jumpMinute="15"
                    :roundMinute="true"&gt;
                &lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
        data() {
            return {
                time: '',
            }
        },
    }
</script>