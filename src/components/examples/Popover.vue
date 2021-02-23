<template>
  <div>
    <card title="Popover mode" version="2.6.0">
      <date-picker auto-submit popover style="z-index: 9999; transition: 0s" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker auto-submit popover /&gt;</code></pre>
      </template>
    </card>

    <card style="margin: 0">
      <date-picker auto-submit popover="bottom-left" />
      <template v-slot:code>
        <pre v-highlightjs><code class="html" v-pre>&lt;date-picker auto-submit popover="bottom-left" /&gt; </code></pre>
      </template>
      <template v-slot:docs>
        <pre v-highlightjs style="z-index: 2"><code class="javascript" v-pre>accepted:
  true | false
  top-left | top-right | bottom-right | bottom-left
  left-top | left-bottom | right-top | right-bottom</code></pre>
      </template>
    </card>
  </div>
</template>
