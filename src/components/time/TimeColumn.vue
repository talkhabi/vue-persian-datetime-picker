<template>
  <div class="vpd-time-column" :class="classFastCounter">
    <btn
      class="vpd-up-arrow-btn"
      @update="update(1)"
      @fastUpdate="fastUpdateCounter"
    >
      <arrow width="20" direction="up" />
    </btn>
    <div
      class="vpd-counter"
      :class="[directionClass, { 'vpd-is-focused': isInputFocused }]"
      @mousewheel.stop.prevent="wheelUpdate($event)"
      @DOMMouseScroll.stop.prevent="wheelUpdate($event)"
    >
      <input
        ref="input"
        v-model="inputValue"
        type="tel"
        :maxlength="selfValue.length"
        :class="{ 'is-empty': !inputValue.length }"
        @input="onInputChange"
        @focus="isInputFocused = true"
        @blur="isInputFocused = false"
        @keydown.up.prevent="update(1)"
        @keydown.down.prevent="update(-1)"
        @keydown.enter.prevent="onInputSubmit"
      />
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
      lastUpdate: new Date().getTime(),
      isInputFocused: false,
      inputValue: ''
    }
  },
  watch: {
    selfValue: {
      handler(val, old) {
        if (old) this.setDirection(val, old)
        this.inputValue = this.selfValue
        this.$nextTick(() => {
          if (this.value.toString() !== this.selfValue.toString())
            this.selfValue = this.value
        })
      },
      immediate: true
    },
    isInputFocused(focused) {
      if (focused) {
        this.inputValue = this.selfValue
        this.$nextTick(() => {
          this.$refs.input.select()
        })
      } else if (this.inputValue) {
        this.onInputSubmit()
      }
    }
  },
  methods: {
    update(value) {
      this.selfValue = +this.selfValue + value * this.jump

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
      const goUp = (e.wheelDeltaY || -e.detail) > 0
      this.update(goUp ? 1 : -1)
    },
    fastUpdateCounter(e) {
      if (!e) this.transitionSpeed = 300
      this.classFastCounter = e ? 'fast-updating' : ''
    },
    setDirection(val, old) {
      this.directionClass = val > old ? 'direction-next' : 'direction-prev'
    },
    onInputSubmit() {
      this.selfValue = this.inputValue
      this.transitionSpeed = 0
    },
    onInputChange(event) {
      if (event.target.value.length >= this.selfValue.length)
        this.$emit('filled')
    }
  }
}
</script>
