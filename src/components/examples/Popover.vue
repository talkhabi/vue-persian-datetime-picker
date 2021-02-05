<template>
  <div>
    <card title="Popover mode" version="2.6.0">
      <date-picker auto-submit popover />
      <template slot="code">
        <highlight-code lang="html">
          &lt;date-picker auto-submit popover /&gt;
        </highlight-code>
      </template>
    </card>

    <card style="margin: 0">
      <date-picker auto-submit popover="bottom-left" />
      <template slot="code">
        <highlight-code lang="html">
          &lt;date-picker auto-submit popover="bottom-left" /&gt;
        </highlight-code>
      </template>
      <template slot="docs">
        <!-- eslint-disable -->
        <highlight-code :lang="'javascript'">
          accepted:
            true | false
            top-left | top-right | bottom-right | bottom-left
            left-top | left-bottom | right-top | right-bottom
        </highlight-code>
        <!-- eslint-enable -->
      </template>
    </card>
  </div>
</template>
