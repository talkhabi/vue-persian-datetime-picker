<template>
  <div class="card">
    <span v-if="version" class="card-version">{{ version }}</span>
    <div class="card-body">
      <div class="row">
        <div class="col-md-12">
          <h5 class="card-title">{{ title }}</h5>
        </div>
        <div class="col-md-6"><slot name="code" /></div>
        <div class="col-md-6"><slot /></div>
        <div v-if="hasDocs" class="col-md-12">
          <button
            type="button"
            class="btn btn-sm btn-info"
            @click="showDocs = !showDocs"
          >
            view more
          </button>
          <div v-if="showDocs" style="margin-top: 20px">
            <slot name="docs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    version: { type: String, default: '' }
  },
  data() {
    return {
      showDocs: false
    }
  },
  computed: {
    hasDocs() {
      return this.$slots.docs && this.$slots.docs.length
    }
  },
  methods: {}
}
</script>
