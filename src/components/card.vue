<template>
    <div class="card">
        <span class="card-version" v-if="version">{{ version }}</span>
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <h5 class="card-title">{{ title }}</h5>
                </div>
                <div class="col-md-6">
                    <slot name="code"></slot>
                </div>
                <div class="col-md-6">
                    <slot></slot>
                </div>
                <div class="col-md-12" v-if="hasDocs">
                    <button type="button" class="btn btn-sm btn-info" @click="showDocs=!showDocs">view more</button>
                    <div v-if="showDocs" style="margin-top: 20px">
                        <slot name="docs"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['title', 'version'],
      data () {
        return {
          showDocs: false
        }
      },
      methods: {},
      computed: {
        hasDocs () {
          return (this.$slots.docs && this.$slots.docs.length)
        }
      }
    }
</script>