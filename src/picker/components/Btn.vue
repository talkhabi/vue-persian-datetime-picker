<template>
  <div @mousedown="down" @touchstart="down" @mouseup="click"><slot /></div>
</template>

<script>
export default {
  data() {
    return {
      interval: false,
      timeout: false,
      intervalDelay: 150
    }
  },
  computed: {},
  mounted() {
    document.addEventListener('mouseup', () => {
      if (this.timeout || this.interval) this.up()
    })
    document.addEventListener('touchend', () => {
      if (this.timeout || this.interval) this.up()
    })
  },
  methods: {
    click() {
      if (!this.interval) {
        this.$emit('update', 1)
      }
    },
    down() {
      window.clearTimeout(this.timeout)
      window.clearInterval(this.interval)
      this.interval = false
      this.timeout = window.setTimeout(() => {
        this.intervalFn()
      }, 600)
    },
    up() {
      window.clearTimeout(this.timeout)
      window.clearInterval(this.interval)
      this.$emit('fastUpdate', false)
      this.timeout = false
      this.interval = false
      this.intervalDelay = 150
    },
    intervalFn() {
      this.interval = window.setTimeout(() => {
        this.$emit('update', 1)
        this.$emit('fastUpdate', true)
        this.intervalFn()
        if (this.intervalDelay > 30) this.intervalDelay -= 3
      }, this.intervalDelay)
    }
  }
}
</script>
