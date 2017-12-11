<template>
    <card title="Wrapper submit">

        <date-picker v-model="date" :wrapper-submit="true"></date-picker>
        <code class="code">{{ date }}</code>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                @version 1.0.6
                &lt;date-picker v-model="date" :wrapper-submit="true"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>

<script>
    export default {
        data() {
            return {
                date: '',
            }
        },
    }
</script>