<template>
  <div class="card">
    <span v-if="version" class="card-version">{{ version }}</span>
    <div class="card-body">
      <div class="row">
        <div v-if="title" class="col-md-12">
          <h5 class="card-title">{{ title }}</h5>
        </div>
        <div :class="codeColClass"><slot name="code" /></div>
        <div :class="sampleColClass"><slot /></div>
        <div v-if="$slots.docs" class="col-md-12">
          <button
            type="button"
            class="btn btn-sm btn-info"
            @click="state.showDocs = !state.showDocs"
          >
            view more
          </button>
          <div v-if="state.showDocs" style="margin-top: 20px">
            <slot name="docs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { reactive } from 'vue'

export default {
  props: {
    title: { type: String, default: '' },
    version: { type: String, default: '' },
    codeColClass: { type: String, default: 'col-md-6' },
    sampleColClass: { type: String, default: 'col-md-6' }
  },
  setup(props, { slots }) {
    const state = reactive({
      showDocs: false
    })

    return {
      state
    }
  }
}
</script>
