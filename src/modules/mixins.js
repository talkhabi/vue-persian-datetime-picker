import { clone } from './utils'

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

/**
 * Change route when visible changes
 * @type Object
 */
export const popupRouteChanger = {
  data() {
    return {
      routerQueryName: null
    }
  },
  mounted() {
    this.initRouter()
  },
  methods: {
    initRouter() {
      const isSet = prop => prop || typeof prop === 'string'
      const useRouter = this.useRouter

      if (!isSet(useRouter) || this.isPopover || this.inline || !this.$router)
        return

      this.$watch('visible', this.onVisibleChange)
      this.$watch(() => this.$route.query, this.onRouteChange, {
        deep: true,
        immediate: true
      })

      this.routerQueryName =
        typeof useRouter === 'string' && useRouter ? useRouter : this.id
    },
    onVisibleChange(visible) {
      let currentRoute = this.$route
      let query = clone(currentRoute.query || {})
      if (visible) {
        query[this.routerQueryName] = 'active'
        this.$router.push({ query })
      } else if (query[this.routerQueryName]) {
        this.$router.back()
      }
    },
    onRouteChange() {
      let visible = !!this.$route.query[this.routerQueryName]
      if (visible && this.disabled) return
      this.visible = visible
    }
  }
}
