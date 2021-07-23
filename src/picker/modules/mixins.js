/**
 * Model Mixin
 */
export const modelMixin = {
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: { type: [String, Number, Array, Object, Boolean], default: '' }
  },
  data() {
    return {
      selfValue: ''
    }
  },
  watch: {
    value: {
      handler(val) {
        if (this.selfValue !== val) this.selfValue = val
      },
      immediate: true,
      deep: true
    },
    selfValue(val) {
      if (val !== this.value) this.$emit('input', val)
    }
  }
}
