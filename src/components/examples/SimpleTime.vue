<template>
    <div>
        <card title="Simple datepicker">
            <date-picker v-model="time" type="time"></date-picker>
            <code class="code">{{ time }}</code>
            <template slot="code">
                <highlight-code lang="html" v-pre>
                    &lt;date-picker v-model="time" type="time"&gt;&lt;/date-picker&gt;
                </highlight-code>
            </template>
        </card>

        <card title="Time minimum and maximum">
            <date-picker min="08:08" max="22:00" type="time"></date-picker>

            <template slot="code">
                <highlight-code lang="html" v-pre>
                    &lt;date-picker
                        type="time"
                        v-model="time"
                        min="08:08"
                        max="22:00"&gt;
                    &lt;/date-picker&gt;
                </highlight-code>
            </template>
        </card>

        <card title="Advance time picker" version="1.1.6">
            <date-picker type="time" :jumpMinute="15" :roundMinute="true"></date-picker>
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

    </div>
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