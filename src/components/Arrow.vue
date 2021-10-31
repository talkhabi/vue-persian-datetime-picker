<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 129 129"
    width="30"
    height="30"
    perspectiveAspectRato="none"
    :style="{ transform: `rotate(${rotation}deg)` }"
  >
    <path
      :fill="fill"
      d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54
      53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    fill: { type: String, default: '#a2a2a2' },
    direction: { type: String, default: 'up' }
  },
  computed: {
    rotation() {
      return {
        up: 90,
        left: 0,
        right: 180,
        down: -90
      }[this.direction]
    }
  }
}
</script>
