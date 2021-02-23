<template>
  <ul>
    <li @click="$emit('change', activeItem)">{{ label }}</li>
  </ul>
</template>

<script>
  import {computed} from 'vue'

  export default {
    name: 'LocaleChange',
    emits: ['change'],
    props: {
      locales: {type: Array, default: () => []},
      core: {type: Object, default: () => ({})},
      localeData: {type: Object, default: () => ({})}
    },
    setup (props) {
      const activeItem = computed(() => {
        let locales = props.locales.toString().split(',')
        let activeIndex = locales.indexOf(props.localeData.name) + 1
        if (activeIndex === props.locales.length) activeIndex = 0
        return String(locales[activeIndex])
      })

      const label = computed(() => {
        return props.core.localesConfig[activeItem.value].lang.label || activeItem.value.toUpperCase()
      })

      return {
        activeItem,
        label
      }
    }
  }
</script>
