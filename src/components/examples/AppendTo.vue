<template>
    <card title="Append picker to a custom container" version="1.1.1">

        <date-picker append-to="body"></date-picker>

        <p class="mt-3">With this option you can specify where to append the picker</p>

        <template slot="code">
            <highlight-code lang="html" v-pre>
                &lt;date-picker append-to="body"&gt;&lt;/date-picker&gt;
                &lt;date-picker append-to="#app"&gt;&lt;/date-picker&gt;
                &lt;date-picker append-to=".my-custom-container"&gt;&lt;/date-picker&gt;
            </highlight-code>
        </template>
    </card>
</template>