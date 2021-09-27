<template>
  <div
    class="vpd-column"
    :class="{ 'vpd-is-mounted': isMounted }"
    @mousewheel.stop
  >
    <div v-if="label" class="vpd-column-header" v-text="label" />
    <div ref="content" class="vpd-column-content"><slot /></div>
  </div>
</template>

<script>
import { scrollIntoCenter } from '../../modules/utils'
export default {
  name: 'SimpleModeColumn',
  props: {
    label: { type: String, default: null },
    locale: { type: String, default: null },
    value: { type: [String, Number], default: null }
  },
  data() {
    return {
      isMounted: false
    }
  },
  watch: {
    value() {
      this.scrollIntoView(200)
    },
    locale() {
      this.scrollIntoView(200)
    }
  },
  mounted() {
    this.scrollIntoView(0)
  },
  methods: {
    scrollIntoView(duration) {
      try {
        this.isMounted = false
        this.$nextTick(() => {
          const activeElement =
            this.$refs.content.querySelector('.vpd-selected') ||
            this.$refs.content.querySelector(
              '.vpd-addon-list-item:not([disabled])'
            )
          // we want to scroll multiple containers at same time
          // the native `scrollIntoView` method does not work in this case,
          // so we use this method
          if (activeElement)
            scrollIntoCenter(activeElement, duration, () => {
              this.isMounted = true
            })
        })
      } catch (e) {
        // eslint-disable-next-line
        console.warn(e)
      }
    }
  }
}
</script>
