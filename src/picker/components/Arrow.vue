<template>
  <icon :style="`color: ${fill}`" :name="iconName"/>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'

    /*
     * Use Vue Awesome
     */
    import 'vue-awesome/icons/arrow-up'
    import 'vue-awesome/icons/arrow-down'
    import 'vue-awesome/icons/arrow-left'
    import 'vue-awesome/icons/arrow-right'

    export default {
      components: {Icon},
      props: {
        fill: {
          type: String,
          default: '#a2a2a2'
        },
        direction: {
          type: String,
          default: 'up'
        }
      },
      computed: {
        iconName () {
          return `arrow-${this.direction}`
        }
      }
    }
</script>
