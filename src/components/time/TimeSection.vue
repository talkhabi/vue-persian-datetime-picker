<template>
  <div :class="['vpd-addon-list vpd-time', { 'vpd-disabled': isDisableTime }]">
    <div class="vpd-addon-list-content">
      <time-column
        ref="hour"
        v-model="hourModel"
        class="vpd-time-h"
        :attributes="timeAttributes"
        :formatter="convertToLocaleNumber"
        @filled="focusNext"
      />
      <time-column
        ref="minute"
        v-model="minuteModel"
        class="vpd-time-m"
        :jump="jumpMinute"
        :attributes="timeAttributes"
        :formatter="convertToLocaleNumber"
      />
    </div>
  </div>
</template>

<script>
import TimeColumn from './TimeColumn'

export default {
  name: 'TimeSection',
  components: { TimeColumn },
  props: {
    date: { type: Object, default: () => ({}) },
    time: { type: Object, default: () => ({}) },
    jumpMinute: { type: Number, default: 1 },
    roundMinute: { type: Boolean, default: false },
    isDisableTime: { type: Boolean, default: false },
    getHighlights: { type: Function, default: null },

    isMore: { type: Function, default: null },
    isLower: { type: Function, default: null },
    minDate: { type: [Object, Boolean], default: false },
    maxDate: { type: [Object, Boolean], default: false },

    selectedDates: { type: Array, default: () => [] },
    convertToLocaleNumber: { type: Function, default: null }
  },
  computed: {
    timeAttributes() {
      return this.getHighlights('t', this.time)
    },
    hourModel: {
      get() {
        return this.time.format('HH')
      },
      set(val) {
        this.setTime(val, 'hours')
      }
    },
    minuteModel: {
      get() {
        return this.time.format('mm')
      },
      set(val) {
        this.setTime(val, 'minutes')
      }
    }
  },
  watch: {
    time: {
      handler() {
        if (this.roundMinute) {
          let time = this.time.clone()
          let jm = this.jumpMinute
          let m = (jm - (time.minute() % jm)) % jm
          time.add({ m })
          if (time.valueOf() !== this.time.valueOf()) {
            this.$emit('update:time', time)
            // @todo: this line should apply time to current date selection,
            // not all of them
            this.selectedDates.forEach(d => d.set({ m: time.minute() }))
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    setTime(v, k) {
      let time = this.time.clone()

      time.set(k, v)

      if (this.type !== 'time') {
        let date = this.date.clone()
        time.set({ year: date.year(), month: date.month(), date: date.date() })
        date.set({ hour: time.hour(), minute: time.minute() })
        this.$emit('update:date', date)
      }

      if (this.isLower(time)) time = this.minDate.clone()
      if (this.isMore(time)) time = this.maxDate.clone()

      this.$emit('update:time', time)
    },
    focusNext() {
      this.$refs.minute.$el.querySelector('input').focus()
    }
  }
}
</script>
