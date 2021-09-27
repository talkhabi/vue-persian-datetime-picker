<template>
  <div class="pt-5">
    <card title="Simple mode examples" style="margin:0" version="2.9.0">
      <date-picker simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker type="datetime" simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker type="datetime" simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker type="time" simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker type="time" simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker type="year-month" simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker type="year-month" simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker type="year" min="1350" max="1410" simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker type="year" simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker type="month" simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker type="month" simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker locale="en,fa" format="YYYY/M/D" simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker locale="en,fa" format="YYYY/M/D" simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker range simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker range simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker multiple simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker multiple simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker inline auto-submit simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker inline auto-submit simple /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin:10px 0">
      <date-picker popover auto-submit simple />
      <template slot="code">
        <highlight-code v-pre lang="html">
          &lt;date-picker popover auto-submit simple /&gt;
        </highlight-code>
      </template>
    </card>
  </div>
</template>
