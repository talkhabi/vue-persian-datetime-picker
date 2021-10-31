<template>
  <div class="vpd-simple-body">
    <div
      v-if="showHeader"
      class="vpd-header"
      :style="{ 'background-color': color }"
    >
      <div>
        <slot name="header-date" v-bind="{ vm, formattedDate }">
          {{ convertToLocaleNumber(formattedDate) }}
        </slot>
      </div>
      <slot
        v-if="locales.length > 1"
        name="locales"
        v-bind="{ vm, locales, setLocale }"
      >
        <locale-change
          :locale-data="core.locale"
          :core="core"
          :locales="locales"
          class="vpd-locales"
          @change="setLocale"
        />
      </slot>
    </div>
    <div
      class="vpd-simple-content"
      @mouseleave="$emit('update:hovered-item', null)"
    >
      <simple-mode-column
        v-if="hasStep('y')"
        :label="lang.year"
        :value="selectedYear"
        :locale="core.locale.name"
      >
        <div
          v-for="(year, yi) in years"
          :key="yi"
          v-bind="year.attributes"
          :class="[
            'vpd-addon-list-item',
            { 'vpd-selected': year.selected },
            year.attributes.class
          ]"
          :style="[
            { color: year.selected ? color : '' },
            year.attributes.style
          ]"
          :disabled="year.disabled"
          @click="$emit('select-year', year)"
        >
          <slot name="year-item" v-bind="{ vm, year, color }">
            {{ convertToLocaleNumber(year.xFormat('jYYYY')) }}
          </slot>
        </div>
      </simple-mode-column>

      <simple-mode-column
        v-if="hasStep('m')"
        :label="lang.month"
        :value="selectedMonth"
        :locale="core.locale.name"
      >
        <div
          v-for="(month, mi) in months"
          :key="mi"
          v-bind="month.attributes"
          :class="[
            'vpd-addon-list-item',
            { 'vpd-selected': month.selected },
            month.attributes.class
          ]"
          :disabled="month.disabled"
          :style="[
            { color: month.selected ? color : '' },
            month.attributes.style
          ]"
          @click="$emit('select-month', month)"
        >
          <slot name="month-item" v-bind="{ vm, monthItem: month, color }">
            {{ month.xFormat('jMMMM') }}
          </slot>
        </div>
      </simple-mode-column>

      <simple-mode-column
        v-if="hasStep('d')"
        :label="lang.day"
        :value="selectedDay"
        :locale="core.locale.name"
      >
        <div
          v-for="(day, di) in days"
          :key="di"
          :class="[
            'vpd-addon-list-item',
            {
              'vpd-selected': day.selected,
              'vpd-empty': day.date == null,
              'vpd-range-first': day.isFirst,
              'vpd-range-last': day.isLast,
              'vpd-range-between': day.isBetween,
              'vpd-range-hover': hoveredItem && day.isHover
            },
            day.attributes.class
          ]"
          v-bind="day.attributes"
          :style="[
            { color: day.selected || day.isBetween ? color : '' },
            day.attributes.style
          ]"
          :disabled="day.disabled"
          @click="$emit('select-day', day)"
          @mouseover="$emit('update:hovered-item', day.date)"
        >
          <template v-if="day.date != null">
            <slot name="day-item" v-bind="{ vm, day, color }">
              {{ convertToLocaleNumber(day.formatted) }}
            </slot>
          </template>
        </div>
      </simple-mode-column>
    </div>
  </div>
</template>

<script>
import LocaleChange from './../LocaleChange'
import SimpleModeColumn from './SimpleModeColumn'

export default {
  name: 'SimpleMode',
  components: { LocaleChange, SimpleModeColumn },
  props: {
    visible: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    range: { type: Boolean, default: false },
    lang: { type: Object, default: null },
    color: { type: String, default: null },
    hasStep: { type: Function, default: null },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    monthDays: { type: Array, default: () => [] },
    selectedDates: { type: Array, default: () => [] },
    formattedDate: { type: String, default: null },
    hoveredItem: { type: Date, default: null },
    locales: { type: Array, default: () => [] },
    core: { type: Object, default: null },
    setLocale: { type: Function, default: null },
    convertToLocaleNumber: { type: Function, default: null }
  },
  data() {
    return {
      vm: this
    }
  },
  computed: {
    days() {
      let days = []
      this.monthDays.forEach(week => {
        week.forEach(day => {
          if (day.date) days.push(day)
        })
      })
      return days
    },
    selectedYear() {
      let year = this.years.find(year => year.selected)
      return year ? year.xFormat('YYYY') : ''
    },
    selectedMonth() {
      let month = this.months.find(month => month.selected)
      return month ? month.xFormat('MM') : ''
    },
    selectedDay() {
      let day = this.days.find(day => day.selected) || {}
      return day && day.date ? day.date.getDate() : ''
    },
    showHeader() {
      const selectedDatesLength = this.selectedDates.length
      return (
        this.locales.length > 1 ||
        selectedDatesLength > 1 ||
        (this.range && selectedDatesLength) ||
        (this.multiple && selectedDatesLength)
      )
    }
  }
}
</script>
