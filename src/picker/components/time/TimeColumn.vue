<template>
  <div :class="classFastCounter">
    <btn
      class="vpd-up-arrow-btn"
      @update="update(1)"
      @fastUpdate="fastUpdateCounter"
    >
      <arrow width="20" direction="up" />
    </btn>
    <div
      class="vpd-counter"
      :class="directionClass"
      @mousewheel.stop.prevent="wheelUpdate($event)"
    >
      <div
        v-for="(item, i) in value.toString().split('')"
        :key="`h__${i}`"
        class="vpd-counter-item"
        v-bind="attributes"
      >
        <transition name="slideY">
          <span
            :key="`${item}__${i}_h`"
            :style="{
              transition: 'all ' + transitionSpeed + 'ms ease-in-out'
            }"
            v-text="formatter(item)"
          />
        </transition>
      </div>
    </div>
    <btn
      class="vpd-down-arrow-btn"
      @update="update(-1)"
      @fastUpdate="fastUpdateCounter"
    >
      <arrow width="20" direction="down" />
    </btn>
  </div>
</template>

<script>
import Btn from '../Btn'
import Arrow from '../Arrow'
import { modelMixin } from '../../modules/mixins'

export default {
  name: 'TimeColumn',
  components: { Btn, Arrow },
  mixins: [modelMixin],
  props: {
    jump: { type: Number, default: 1 },
    formatter: { type: Function, default: null },
    attributes: { type: Object, default: () => ({}) }
  },
  data() {
    return {
      directionClass: 'direction-next',
      classFastCounter: '',
      transitionSpeed: 300,
      timeout: false,
      lastUpdate: new Date().getTime()
    }
  },
  watch: {
    selfValue: {
      handler(val, old) {
        if (old) this.setDirection(val, old)
        this.$nextTick(() => {
          if (this.value.toString() !== this.selfValue.toString())
            this.selfValue = this.value
        })
      },
      immediate: true
    }
  },
  methods: {
    update(value) {
      this.selfValue = this.selfValue * 1 + value * this.jump

      let now = new Date().getTime(),
        def = now - this.lastUpdate
      if (20 < def && def < 300) this.transitionSpeed = def
      this.lastUpdate = now

      window.clearTimeout(this.timeout)
      this.timeout = window.setTimeout(() => {
        this.transitionSpeed = 300
      }, 300)
    },
    wheelUpdate(e) {
      let delta = this.jump
      this.update(e.wheelDeltaY > 0 ? delta : -delta)
    },
    fastUpdateCounter(e) {
      if (!e) this.transitionSpeed = 300
      this.classFastCounter = e ? 'fast-updating' : ''
    },
    setDirection(val, old) {
      this.directionClass = val > old ? 'direction-next' : 'direction-prev'
    }
  }
}
</script>
