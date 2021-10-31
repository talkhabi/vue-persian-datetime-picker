<template>
  <ul>
    <li @click="$emit('change', activeItem)" v-text="label" />
  </ul>
</template>

<script>
export default {
  name: 'LocaleChange',
  props: {
    locales: { type: Array, default: () => [] },
    core: { type: Object, default: () => ({}) },
    localeData: { type: Object, default: () => ({}) }
  },
  computed: {
    activeItem() {
      let activeIndex = this.locales.indexOf(this.localeData.name) + 1
      if (activeIndex === this.locales.length) activeIndex = 0
      return String(this.locales[activeIndex])
    },
    label() {
      return (
        this.core.localesConfig[this.activeItem].lang.label ||
        this.activeItem.toUpperCase()
      )
    }
  }
}
</script>
