<template>
  <span
    class="vpd-main"
    :data-type="type"
    :data-locale="localeData.name"
    :data-locale-dir="localeData.config.dir"
    :class="{ 'vpd-is-popover': isPopover }"
  >
    <span
      v-if="!customInputElement"
      ref="inputGroup"
      :class="['vpd-input-group', { 'vpd-disabled': disabled }]"
    >
      <label
        :for="id"
        class="vpd-icon-btn"
        :style="{ 'background-color': color }"
        @click.prevent.stop="visible = !visible"
      >
        <slot name="label">
          <time-icon v-if="type === 'time'" width="16px" height="16px" />
          <calendar-icon v-else width="16px" height="16px" />
          <span v-if="label" v-text="label" />
        </slot>
      </label>
      <input
        :id="id"
        ref="input"
        type="text"
        :name="name"
        :class="[inputClass, { 'vpd-is-editable': editable }]"
        :placeholder="placeholder"
        :value="displayValue"
        :disabled="disabled"
        v-bind="inputAttrs"
        @focus="focus"
        @blur="setOutput"
        @keydown.enter="setOutput"
      />
      <input
        v-if="altName"
        type="hidden"
        :name="altName"
        :value="altFormatted"
      />
      <i
        v-if="clearable && !disabled && displayValue"
        class="vpd-clear-btn"
        @click="clearValue"
      >
        <slot name="clear-btn" v-bind="{ vm }">x</slot>
      </i>
    </span>

    <input
      v-else-if="altName"
      type="hidden"
      :name="altName"
      :value="altFormatted"
    />

    <transition :name="isPopover ? '' : 'vpd-fade-scale'">
      <div
        v-if="visible"
        ref="picker"
        :class="[
          'vpd-wrapper',
          `vpd-dir-${localeData.config.dir}`,
          {
            'vpd-is-range': range,
            'vpd-is-inline': inline,
            'vpd-is-popover': isPopover,
            'vpd-is-multiple': multiple,
            'vpd-compact-time': isCompactTime,
            'vpd-no-footer': autoSubmit && !hasStep('t')
          }
        ]"
        :data-type="type"
        @click.self="wrapperClick"
      >
        <div ref="container" class="vpd-container">
          <div class="vpd-content">
            <div
              v-if="!simple"
              class="vpd-header"
              :style="{ 'background-color': color }"
            >
              <div
                v-if="['date', 'datetime', 'year-month'].indexOf(type) !== -1"
                :class="['vpd-year-label', directionClass]"
                @click="goStep('y')"
              >
                <transition name="slideY">
                  <span :key="selectedDate.xYear()">
                    <slot name="header-year" v-bind="{ vm, selectedDate }">
                      {{ convertToLocaleNumber(selectedDate.xYear()) }}
                    </slot>
                  </span>
                </transition>
              </div>
              <div
                v-if="type !== 'year-month'"
                :class="['vpd-date', directionClass]"
              >
                <transition name="slideY">
                  <span :key="formattedDate">
                    <slot name="header-date" v-bind="{ vm, formattedDate }">
                      {{ convertToLocaleNumber(formattedDate) }}
                    </slot>
                  </span>
                </transition>
              </div>
              <slot
                v-if="locales.length > 1"
                name="locales"
                v-bind="{ vm, locales, setLocale }"
              >
                <locale-change
                  :locale-data="localeData"
                  :core="core"
                  :locales="locales"
                  class="vpd-locales"
                  @change="setLocale"
                />
              </slot>
            </div>
            <div class="vpd-body">
              <simple-mode
                v-if="simple"
                :lang="lang"
                :core="core"
                :range="range"
                :color="color"
                :locales="locales"
                :visible="visible"
                :multiple="multiple"
                :years="years"
                :months="months"
                :month-days="monthDays"
                :has-step="hasStep"
                :selected-dates="selectedDates"
                :formatted-date="formattedDate"
                :hovered-item.sync="hoveredItem"
                :set-locale="setLocale"
                :convert-to-locale-number="convertToLocaleNumber"
                @select-year="selectYear"
                @select-month="selectMonth"
                @select-day="selectDay"
              >
                <template #header-date="slotData">
                  <slot name="header-date" v-bind="slotData" />
                </template>
                <template #locales="slotData">
                  <slot name="locales" v-bind="slotData" />
                </template>
                <template #year-item="slotData">
                  <slot name="year-item" v-bind="slotData" />
                </template>
                <template #month-item="slotData">
                  <slot name="month-item" v-bind="slotData" />
                </template>
                <template #day-item="slotData">
                  <slot name="day-item" v-bind="slotData" />
                </template>
              </simple-mode>
              <template v-else>
                <template v-if="hasStep('d')">
                  <div :class="['vpd-controls', directionClassDate]">
                    <button
                      type="button"
                      class="vpd-next"
                      :title="lang.nextMonth"
                      :disabled="nextMonthDisabled"
                      @click="nextMonth"
                    >
                      <slot name="next-month">
                        <arrow
                          width="10"
                          fill="#000"
                          direction="right"
                          style="vertical-align: middle"
                        />
                      </slot>
                    </button>
                    <button
                      type="button"
                      class="vpd-prev"
                      :title="lang.prevMonth"
                      :disabled="prevMonthDisabled"
                      @click="prevMonth"
                    >
                      <slot name="prev-month">
                        <arrow
                          width="10"
                          fill="#000"
                          direction="left"
                          style="vertical-align: middle"
                        />
                      </slot>
                    </button>
                    <transition name="slideX">
                      <div
                        :key="date.xMonth()"
                        class="vpd-month-label"
                        @click="goStep('m')"
                      >
                        <slot name="month-name" v-bind="{ vm, date, color }">
                          <span
                            :style="{ 'border-color': color, color }"
                            v-text="
                              convertToLocaleNumber(date.xFormat('jMMMM jYYYY'))
                            "
                          />
                        </slot>
                      </div>
                    </transition>
                  </div>
                  <div
                    class="vpd-clearfix"
                    :class="['vpd-month', directionClassDate]"
                  >
                    <div class="vpd-clearfix vpd-week">
                      <div
                        v-for="(day, i) in weekDays"
                        :key="`${i}-${day}`"
                        class="vpd-weekday"
                      >
                        <slot name="weekday" v-bind="{ vm, day }">
                          {{ day }}
                        </slot>
                      </div>
                    </div>
                    <div
                      class="vpd-days"
                      :style="{ height: month.length * 40 + 'px' }"
                      @mouseleave="hoveredItem = null"
                    >
                      <transition name="slideX" :class="directionClassDate">
                        <div :key="date.xMonth()">
                          <div
                            v-for="(m, mi) in monthDays"
                            :key="mi"
                            class="vpd-clearfix"
                          >
                            <div
                              v-for="(day, di) in m"
                              :key="di"
                              :class="[
                                'vpd-day',
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
                              :disabled="day.disabled"
                              @click="selectDay(day)"
                              @mouseover="hoveredItem = day.date"
                            >
                              <template v-if="day.date != null">
                                <slot
                                  name="day-item"
                                  v-bind="{ vm, day, color }"
                                >
                                  <span
                                    class="vpd-day-effect"
                                    :style="{ 'background-color': color }"
                                  />
                                  <span
                                    class="vpd-day-text"
                                    v-text="
                                      convertToLocaleNumber(day.formatted)
                                    "
                                  />
                                </slot>
                              </template>
                            </div>
                          </div>
                        </div>
                      </transition>
                    </div>
                  </div>
                </template>

                <div v-else style="height:250px" />

                <transition name="fade">
                  <div
                    v-if="hasStep('y')"
                    v-show="currentStep === 'y'"
                    ref="year"
                    :class="[
                      'vpd-addon-list',
                      { 'vpd-can-close': steps.length > 1 }
                    ]"
                  >
                    <div class="vpd-addon-list-content">
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
                        @click="selectYear(year)"
                      >
                        <slot name="year-item" v-bind="{ vm, year, color }">
                          {{ convertToLocaleNumber(year.xFormat('jYYYY')) }}
                        </slot>
                      </div>
                    </div>
                  </div>
                </transition>

                <transition name="fade">
                  <div
                    v-if="hasStep('m')"
                    v-show="currentStep === 'm'"
                    ref="month"
                    :class="[
                      'vpd-addon-list vpd-month-list',
                      { 'vpd-can-close': steps.length > 1 }
                    ]"
                  >
                    <div class="vpd-addon-list-content">
                      <div
                        v-for="(monthItem, mi) in months"
                        :key="mi"
                        v-bind="monthItem.attributes"
                        :class="[
                          'vpd-addon-list-item',
                          { 'vpd-selected': monthItem.selected },
                          monthItem.attributes.class
                        ]"
                        :disabled="monthItem.disabled"
                        :style="[
                          { color: monthItem.selected ? color : '' },
                          monthItem.attributes.style
                        ]"
                        @click="selectMonth(monthItem)"
                      >
                        <slot
                          name="month-item"
                          v-bind="{ vm, monthItem, color }"
                        >
                          {{ monthItem.xFormat('jMMMM') }}
                        </slot>
                      </div>
                    </div>
                  </div>
                </transition>

                <transition name="fade">
                  <span
                    v-if="
                      steps.length > 1 && currentStep !== 'd' && hasStep('d')
                    "
                    class="vpd-close-addon"
                    @click="goStep('d')"
                  >
                    <slot name="close-btn" v-bind="{ vm }">x</slot>
                  </span>
                </transition>
              </template>

              <transition name="fade">
                <time-section
                  v-if="hasStep('t')"
                  v-show="currentStep === 't'"
                  ref="time"
                  :date.sync="date"
                  :time.sync="time"
                  :is-more="isMore"
                  :is-lower="isLower"
                  :min-date="minDate"
                  :max-date="maxDate"
                  :jump-minute="jumpMinute"
                  :round-minute="roundMinute"
                  :get-highlights="getHighlights"
                  :selected-dates="selectedDates"
                  :convert-to-locale-number="convertToLocaleNumber"
                />
              </transition>

              <template v-if="autoSubmit && !hasStep('t')">
                <br v-if="!simple" />
              </template>
              <div v-else class="vpd-actions">
                <slot
                  name="submit-btn"
                  v-bind="{ vm, canSubmit, color, submit, lang }"
                >
                  <button
                    type="button"
                    :disabled="!canSubmit"
                    :style="{ color }"
                    @click="submit"
                    v-text="lang.submit"
                  />
                </slot>

                <slot
                  v-if="!inline"
                  name="cancel-btn"
                  v-bind="{ vm, color, lang }"
                >
                  <button
                    type="button"
                    :style="{ color }"
                    @click="visible = false"
                    v-text="lang.cancel"
                  />
                </slot>

                <slot
                  v-if="showNowBtn && canGoToday"
                  name="now-btn"
                  v-bind="{ vm, color, goToday, lang }"
                >
                  <button
                    type="button"
                    :style="{ color }"
                    @click="goToday"
                    v-text="lang.now"
                  />
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </span>
</template>

<script>
import './assets/scss/style.scss'
import Arrow from './components/Arrow'
import TimeIcon from './components/TimeIcon'
import CalendarIcon from './components/CalendarIcon'
import LocaleChange from './components/LocaleChange'
import TimeSection from './components/time/TimeSection'
import SimpleMode from './components/simple/SimpleMode'

import CoreModule from './modules/core'
import { popupRouteChanger } from './modules/mixins'
import { cloneDates, isSameDay } from './modules/utils'
import { addLiveEvent } from './modules/utils'
import popover from './modules/popover-util'

export default {
  components: {
    SimpleMode,
    TimeSection,
    LocaleChange,
    Arrow,
    CalendarIcon,
    TimeIcon
  },
  mixins: [popupRouteChanger],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    /**
     * Default input value
     * @type Number String
     * @default []
     * @example 1396/08/01 22:45 | 2017/07/07 20:45 | {unix} | 20:45
     */
    value: { type: [Number, String, Date, Array], default: '' },

    /**
     * Initial value of picker (if value is empty)
     * @type Number String
     * @default []
     * @example 1370/01/01 22:45 | 2017/01/01 20:45 | {unix} | 20:45
     * @version 1.0.9
     */
    initialValue: { type: [Number, String], default: '' },

    /**
     * Format for {value}
     * @type String
     * @default Null
     * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | HH:mm
     * @if empty {inputFormat} = {format}
     * @see https://github.com/jalaali/moment-jalaali
     */
    inputFormat: { type: String, default: '' },

    /**
     * Format only to display the date in the field
     * @type String
     * @default Null
     * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | HH:mm
     * @if empty {displayFormat} = {format}
     * @see https://github.com/jalaali/moment-jalaali
     */
    displayFormat: { type: String, default: '' },

    /**
     * Format for output value
     * @type String
     * @default Null
     * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | date | HH:mm
     * @if empty, it will be built according to the type of picker:
     *
     * --- time:     HH:mm
     * --- datetime: jYYYY/jMM/jDD HH:mm
     * --- date:     jYYYY/jMM/jDD
     * --- year:     jYYYY
     * --- month:    jMM
     *
     * @see https://github.com/jalaali/moment-jalaali
     */
    format: { type: String, default: '' },

    /**
     * Step to view on startup
     * @type String
     * @default "day"
     * @supported day | month | year | time
     * @example year
     * @desc {year} will show the "year" panel at first
     */
    view: { type: String, default: 'day' },

    /**
     * The picker type
     * @type String
     * @default "date"
     * @supported date | datetime | year | month | time
     */
    type: { type: String, default: 'date' },

    /**
     * The minimum of selectable period
     * Based on {inputFormat}
     * @type String
     * @default Null
     * @example 1396/08/01 22:45 | 22:45
     */
    min: { type: [String], default: '' },

    /**
     * The maximum of selectable period
     * Based on {inputFormat}
     * @type String
     * @default Null
     * @example 1396/08/01 22:45 | 22:45
     */
    max: { type: [String], default: '' },

    /**
     * Editable input or just readonly
     * @type Boolean
     * @default False
     * @if false, the picker will shown on input focus
     * @if true, the picker will shown on label click
     * @note if use <... :editable="true"> with <... :element="...">
     *     then you have to control the <... :show="true or false">
     */
    editable: { type: Boolean, default: false },

    /**
     * @deprecated
     * The specified input element ID
     * @type String
     * @default Undefined
     * @desc Sometimes you don't want to use picker default input,
     * so you can use our own input element with "id" attribute
     * and use <... element="the_id_of_input">
     */
    element: { type: String, default: undefined },

    /**
     * New version of `element`
     * @type String (DOMString containing a selector list)
     * @desc use this instead of `element`,
     * this custom input does not need v-model, and it will be automatically updated
     * also supports `display-format`
     * @example .my-custom-input | #my-custom-input | div.foo > input
     * @version 2.10.0
     */
    customInput: { type: String, default: undefined },

    /**
     * The form input name when not using {element}
     * @type String
     * @default Undefined
     */
    name: { type: String, default: undefined },

    /**
     * The form input className when not using {element}
     * @type String
     * @default "form-control"
     */
    inputClass: { type: String, default: 'form-control' },

    /**
     * The form input placeholder when not using {element}
     * @type String
     * @default Null
     */
    placeholder: { type: String, default: '' },

    /**
     * The name of hidden input element
     * @type String
     * @default Null
     * @if empty, the hidden input will not be created
     */
    altName: { type: String, default: '' },

    /**
     * Format for hidden input
     * @type String
     * @default Null
     * @example YYYY-MM-DD HH:mm:ss [GMT]ZZ
     * @if empty, it will be built according to the type of picker:
     *
     * --- time:     HH:mm:ss [GMT]ZZ
     * --- datetime: YYYY-MM-DD HH:mm:ss [GMT]ZZ
     * --- date:     YYYY-MM-DD
     * --- year:     YYYY
     * --- month:    MM
     */
    altFormat: { type: String, default: '' },

    /**
     * Show or hide the picker
     * @type Boolean
     * @default False
     */
    show: { type: Boolean, default: false },

    /**
     * Primary color of picker
     * @type String
     */
    color: { type: String, default: '#417df4' },

    /**
     * Auto submit and hide picker when date selected
     * @type Boolean
     * @default False
     */
    autoSubmit: { type: Boolean, default: false },

    /**
     * Auto submit when clicking the wrapper
     * @type Boolean
     * @default false
     * @version 1.0.6
     */
    wrapperSubmit: { type: Boolean, default: false },

    /**
     * Place to append picker
     * @type String query selector
     * @default null
     * @desc If you want to append picker to another container like 'body',
     * pass the container as append-to="body",  append-to="#app",  append-to="#my-container"
     * @example 'body', '.main-container', '#app' ...
     * @version 1.1.1
     */
    appendTo: { type: String, default: null },

    /**
     * Disable or enable the datepicker
     * @type Boolean
     * @default false
     * @version 1.1.4
     */
    disabled: { type: Boolean, default: false },

    /**
     * Disabling
     * @type Array, String, Function, RegExp
     * @default undefined
     * @desc disable some dates
     * @example ['1397/02/02', '1390/10/10'] - "1397/05/20" - /1397\/05\/(.*)/ ...
     * @version 1.1.4
     */
    disable: { type: [Array, String, Function, RegExp], default: undefined },

    /**
     * Label
     * @type String
     * @version 1.1.4
     */
    label: { type: String, default: '' },

    /**
     * Highlight items
     * @type Function
     * @desc This prop accepts only function that return an object of attributes.
     * @version 1.1.5
     */
    highlight: { type: Function, default: null },

    /**
     * Change minutes by step
     * @type Number
     * @default 1
     * @version: 1.1.6
     */
    jumpMinute: { type: Number, default: 1 },

    /**
     * Round minutes when jumpMinute is grater than 1
     * @example when jumpMinute = 15 thin will result: 13:00, 13:15, 13:30, 13:45 ...
     * @type Boolean
     * @default false
     * @version: 1.1.6
     */
    roundMinute: { type: Boolean, default: false },

    /**
     * Show clear button
     * @type Boolean
     * @default false
     * @version 1.1.6
     */
    clearable: { type: Boolean, default: false },

    /**
     * Inline mode
     * @type Boolean
     * @default false
     * @version 1.1.6
     */
    inline: { type: Boolean, default: false },

    /**
     * Locales config ("fa" for jalali and "en" for gregorian)
     * @type String
     * @default fa
     * @example fa | en | fa,en | en,fa
     * @supported fa,en
     * @version 2.0.0
     */
    locale: { type: String, default: 'fa' },

    /**
     * Locale configuration
     * @type Object
     * @default {}
     * @version 2.0.0
     * @example
     * {
     *  fa: {
     *      dow: 6,             --first day of week
     *      dir: 'rtl',         --language direction
     *      lang: {
     *           label:     "شمسی",
     *           submit:    "تایید",
     *           cancel:    "انصراف",
     *           now:       "اکنون",
     *           nextMonth: "ماه بعد",
     *           prevMonth: "ماه قبل",
     *      }
     *  },
     *  en: { ... }
     * }
     */
    localeConfig: { type: Object, default: () => ({}) },

    /**
     * Timezone configuration
     * @type String | Boolean | Function
     * @default false
     * @example true | false | +03:30 | +04:30
     * @version 2.1.0
     */
    timezone: { type: [Boolean, String, Function], default: false },

    /**
     * Show or hide NOW button
     * @type Boolean
     * @default true
     * @version 2.1.6
     */
    showNowBtn: { type: Boolean, default: true },

    /**
     * Convert to locale numbers or not
     * @type Boolean
     * @default false
     * @example <date-picker convert-numbers />
     * @version 2.3.0
     */
    convertNumbers: { type: Boolean, default: false },

    /**
     * Display the time on the front page
     * @type Boolean
     * @default false
     * @example <date-picker compact-time />
     * @version 2.4.0
     */
    compactTime: { type: Boolean, default: false },

    /**
     * Enable or disable range mode
     * @type Boolean
     * @default false
     * @example <date-picker range />
     * @version 2.5.0
     */
    range: { type: Boolean, default: false },

    /**
     * Enable or disable multiple mode
     * @type Boolean
     * @default false
     * @example <date-picker multiple />
     * @version 2.6.0
     */
    multiple: { type: Boolean, default: false },

    /**
     * Enable or disable popover mode
     * @type Boolean | String
     * @accepted:
     *    true | false
     *    top | bottom | right | left
     *    top-left | top-right | bottom-right | bottom-left
     *    { offsetX: -10, offsetY: 10 }
     *    { placement: 'right', offsetX: 10, offsetY: 10 }
     * @default false
     * @example <date-picker popover />
     * @example <date-picker popover="right" />
     * @example <date-picker popover="top-left" />
     * @version 2.6.0
     */
    popover: { type: [Boolean, String, Object], default: false },

    /**
     * If you want to change route address in open/close action,
     * then enable this prop
     * @type Boolean | String
     * @default false
     * @example <date-picker use-router />          => example.com/home?vpd-75454=active
     * @example <date-picker use-router="foo" />    => example.com/home?vpd-foo=active
     * @example <date-picker id="bar" use-router /> => example.com/home?vpd-bar=active
     */
    useRouter: { type: [Boolean, String], default: false },

    /**
     * Enable or disable simple mode
     * @type Boolean
     * @default false
     * @example <date-picker simple />
     * @version 2.9.0
     */
    simple: { type: Boolean, default: false },

    /**
     * Additional attributes for input element
     * @type Object
     * @default null
     * @example <date-picker :input-attrs="{ foo: 'bar' }" />
     * @version 2.9.0
     */
    inputAttrs: { type: Object, default: null }
  },
  data() {
    let defaultLocale = this.locale.split(',')[0]
    let coreModule = new CoreModule(defaultLocale, this.localeConfig)
    return {
      core: coreModule,
      now: coreModule.moment(),
      date: {},
      selectedDates: [],
      hoveredItem: null,
      visible: false,
      directionClass: '',
      directionClassDate: '',
      steps: ['y', 'm', 'd', 't'],
      step: 0,
      shortCodes: {
        year: 'y',
        month: 'm',
        day: 'd',
        time: 't'
      },
      time: {},
      minDate: false,
      maxDate: false,
      output: [],
      updateNowInterval: null,
      locales: ['fa'],
      localeData: coreModule.locale,
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    vm() {
      return this
    },
    id() {
      let randId = Math.round(Math.random() * 1000000)
      return `vpd-${this.$attrs.id || randId}`
    },
    currentStep() {
      return this.steps[this.step]
    },
    selectedDate() {
      let dates = this.selectedDates
      return dates.length ? dates[dates.length - 1] : this.date
    },
    formattedDate() {
      let format = ''

      if (this.hasStep('y')) format = 'jYYYY'
      if (this.hasStep('m')) format += ' jMMMM '
      if (this.hasStep('d')) {
        format = this.isDataArray ? 'jD jMMMM jYYYY' : 'ddd jD jMMMM'
      }
      if (this.hasStep('t')) format += ' HH:mm '

      if (!format) return ''

      let separator = this.multiple ? ' | ' : ' ~ '
      return this.selectedDates.map(d => d.xFormat(format)).join(separator)
    },
    month() {
      if (!this.hasStep('d')) return []
      let min = this.minDate ? this.minDate.clone().startOf('day') : -Infinity
      let max = this.maxDate ? this.maxDate.clone().endOf('day') : Infinity
      return this.core.getWeekArray(this.date.clone()).map(weekItem => {
        return weekItem.map(day => {
          let data = {
            date: day,
            formatted: '',
            selected: false,
            disabled: false,
            attributes: {}
          }
          if (!day) return data
          let dayMoment = this.core.moment(day)
          data.formatted = dayMoment.xDate()
          data.selected = this.selectedDates.find(item => isSameDay(item, day))
          data.disabled =
            (this.minDate && dayMoment.clone().startOf('day') < min) ||
            (this.maxDate && dayMoment.clone().endOf('day') > max) ||
            this.checkDisable('d', dayMoment)
          if (this.range && !data.disabled) {
            let [start, end] = this.selectedDates
            data.isFirst = data.selected && start && isSameDay(start, day)
            data.isLast = data.selected && end && isSameDay(end, day)
            data.isBetween =
              !data.selected && start && end && day > start && day < end
          }
          data.attributes = this.getHighlights('d', dayMoment)
          return data
        })
      })
    },
    monthDays() {
      if (!this.range || this.selectedDates.length !== 1 || !this.hoveredItem)
        return this.month
      let dates = [this.hoveredItem, this.selectedDates[0]]
      dates.sort((a, b) => a - b)
      let [start, end] = dates
      return this.month.map(weekItem => {
        return weekItem.map(data => {
          if (!data.date) return data
          if (this.range && !data.disabled) {
            let day = data.date
            data.isHover = !data.selected && day > start && day < end
          }
          return data
        })
      })
    },
    years() {
      const isYearSectionVisible = this.currentStep === 'y' || this.simple
      if (!this.hasStep('y') || !isYearSectionVisible) return []
      let moment = this.core.moment
      let min = this.minDate ? this.minDate : moment('1300', 'jYYYY')
      let max = this.maxDate ? this.maxDate : min.clone().add(150, 'year')
      let cy = this.date.xYear()
      return this.core
        .getYearsList(min.xYear(), max.xYear())
        .reverse()
        .map(item => {
          let year = moment().xYear(item)
          year.selected = cy === item
          year.disabled = this.checkDisable('y', item)
          year.attributes = this.getHighlights('y', item)
          return year
        })
    },
    months() {
      if (this.hasStep('m')) {
        let date = this.date.clone().xStartOf('month')
        let months = this.core.getMonthsList(this.minDate, this.maxDate, date)
        months.forEach(m => {
          m.selected = this.date.xMonth() === m.xMonth()
          m.disabled = m.disabled || this.checkDisable('m', m)
          m.attributes = this.getHighlights('m', m)
        })
        return months
      }
      return []
    },
    prevMonthDisabled() {
      return (
        this.hasStep('d') &&
        this.minDate &&
        this.minDate.clone().xStartOf('month') >=
          this.date.clone().xStartOf('month')
      )
    },
    nextMonthDisabled() {
      return (
        this.hasStep('d') &&
        this.maxDate &&
        this.maxDate.clone().xStartOf('month') <=
          this.date.clone().xStartOf('month')
      )
    },
    canGoToday() {
      if (!this.minDate && !this.maxDate) return true
      let now = this.now,
        min = this.minDate && this.minDate <= now,
        max = this.maxDate && now <= this.maxDate

      if (this.type === 'time') {
        if (this.minDate) {
          min = now
            .clone()
            .hour(this.minDate.hour())
            .minute(this.minDate.minute())
          min = min <= now
        }
        if (this.maxDate) {
          max = this.now
            .clone()
            .hour(this.maxDate.hour())
            .minute(this.maxDate.minute())
          max = now <= max
        }
      }

      if (this.minDate && this.maxDate) return min && max
      if (this.minDate) return min
      if (this.maxDate) return max
      return false
    },
    altFormatted() {
      let format = this.altFormat
      if (format === '' || format === undefined) {
        switch (this.type) {
          case 'time':
            format = 'HH:mm:ss [GMT]ZZ'
            break
          case 'datetime':
            format = 'YYYY-MM-DD HH:mm:ss [GMT]ZZ'
            break
          case 'date':
            format = 'YYYY-MM-DD'
            break
          case 'year':
            format = 'YYYY'
            break
          case 'month':
            format = 'MM'
            break
          case 'year-month':
            format = 'YYYY-MM'
            break
        }
      }
      return this.output.map(d => d.format(format)).join(' ~ ')
    },
    selfFormat() {
      let format = this.format
      if (['', undefined, 'date'].indexOf(format) !== -1) {
        switch (this.type) {
          case 'time':
            format = 'HH:mm'
            break
          case 'datetime':
            format = 'jYYYY/jMM/jDD HH:mm'
            break
          case 'date':
            format = 'jYYYY/jMM/jDD'
            break
          case 'year':
            format = 'jYYYY'
            break
          case 'month':
            format = 'jMM'
            break
          case 'year-month':
            format = 'jYYYY/jMM'
            break
        }
      }
      return format
    },
    selfInputFormat() {
      return this.inputFormat === '' || this.inputFormat === undefined
        ? this.selfFormat
        : this.inputFormat
    },
    outputValue() {
      let output = cloneDates(this.output)
      let format = this.selfFormat
      let isDate = this.value instanceof Date || this.format === 'date'
      return output.map(item => {
        ;/j\w/.test(format) && item.locale('fa')
        this.setTimezone(item, 'out')
        return isDate ? item.toDate() : item.format(format)
      })
    },
    selfDisplayFormat() {
      let format = this.displayFormat || this.selfFormat
      let localeFormat = this.localeData.config.displayFormat
      if (localeFormat) {
        return typeof localeFormat === 'function'
          ? localeFormat(this)
          : localeFormat
      }
      if (this.localeData.name !== 'fa') {
        format = format.replace(/j/g, '')
      }
      return format
    },
    displayValue() {
      let format = this.selfDisplayFormat
      return this.output
        .map(item => {
          let output = item.clone()
          ;/j\w/.test(format) && output.locale('fa')
          return this.convertToLocaleNumber(output.format(format))
        })
        .join(' ~ ')
    },
    isDisableTime() {
      return this.hasStep('t') && this.checkDisable('t', this.time)
    },
    canSubmit() {
      if (!this.disable) return true
      let can = true
      if (this.hasStep('t')) can = !this.isDisableTime
      if (can && this.type !== 'time') can = !this.checkDisable('d', this.date)
      return can
    },
    weekDays() {
      let names = JSON.parse(
        JSON.stringify(
          this.core
            .moment()
            .localeData()
            .weekdaysMin()
        )
      )
      let dow = this.core.locale.config.dow
      while (dow > 0) {
        names.push(names.shift())
        dow--
      }
      return names
    },
    lang() {
      return this.localeData.config.lang
    },
    isPopover() {
      return (this.popover === '' || this.popover) && this.windowWidth > 480
    },
    isDataArray() {
      return this.range || this.multiple
    },
    isCompactTime() {
      return this.compactTime || (this.type === 'datetime' && this.simple)
    },
    customInputElement() {
      if (this.element) return `#${this.element}`
      return this.customInput
    }
  },
  watch: {
    type: { handler: 'setType', immediate: true },
    view: { handler: 'setView', immediate: true },
    value: { handler: 'updateDates', immediate: true },
    min: { handler: 'setMinMax', immediate: true },
    max: { handler: 'setMinMax', immediate: true },
    timezone: { handler: 'updateDates' },
    inline: {
      handler(val) {
        if (!this.disabled) this.visible = !!val
      },
      immediate: true
    },
    disabled: {
      handler(val) {
        if (val) this.visible = false
        else if (this.inline) this.visible = true
      },
      immediate: true
    },
    selectedDate(val, old) {
      this.setDirection('directionClass', val, old)
    },
    date(val, old) {
      this.setDirection('directionClassDate', val, old)
      if (this.isLower(this.date)) this.date = this.minDate.clone()
      if (this.isMore(this.date)) this.date = this.maxDate.clone()
    },
    visible(val) {
      if (val) {
        if (this.disabled) return (this.visible = false)
        if (this.type === 'datetime' && this.view === 'day') this.goStep('d')
        if (this.view !== 'day') this.goStep(this.shortCodes[this.view] || 'd')
        this.$nextTick(() => {
          if (popover.shouldAppendPicker(this.appendTo, this.isPopover)) {
            popover.appendChild(this.appendTo, this.$refs.picker)
          }
        })
        this.checkScroll()
        this.$nextTick(this.setPlacement)
        this.$emit('open', this)
      } else {
        if (this.inline && !this.disabled) return (this.visible = true)
        this.$emit('close', this)
      }
    },
    show(val) {
      this.visible = val
    },
    locale: {
      immediate: true,
      handler(val) {
        let locales = val.toString().split(',')
        this.locales = locales.length ? locales : ['fa']
        if (this.core.locale.name !== this.locales[0])
          this.setLocale(this.locales[0])
      }
    },
    localeConfig: {
      deep: true,
      immediate: true,
      handler(config) {
        this.core.setLocalesConfig(config)
        this.setLocale(this.localeData.name)
      }
    },
    'localeData.name'() {
      this.$emit('localeChange', this.localeData)
      this.setMinMax()
    },
    displayValue: {
      immediate: true,
      handler: function(displayValue) {
        if (!this.customInput) return
        const customInput = document.querySelector(this.customInput)
        if (customInput) customInput.value = displayValue
      }
    }
  },
  created() {
    this.updateNowInterval = setInterval(() => {
      this.now = this.core.moment()
    }, 1000)
  },
  mounted() {
    this.$nextTick(() => {
      if (this.customInputElement && !this.editable)
        addLiveEvent(this.customInputElement, 'click', this.focus)
      if (this.customInput && this.editable)
        addLiveEvent(this.customInput, 'blur', this.setOutput)
    })
    document.body.addEventListener('keydown', e => {
      e = e || event
      let code = e.keyCode
      if ((code === 9 || code === 27) && this.visible) this.visible = false
    })
    window.addEventListener('scroll', this.onWindowScroll, true)
    window.addEventListener('resize', this.onWindowResize, true)
    window.addEventListener('mousedown', this.onWindowClick, true)
  },
  beforeDestroy() {
    window.clearInterval(this.updateNowInterval)
    window.removeEventListener('scroll', this.onWindowScroll, true)
    window.removeEventListener('resize', this.onWindowResize, true)
    window.removeEventListener('mousedown', this.onWindowClick, true)
    if (popover.shouldAppendPicker(this.appendTo, this.isPopover)) {
      popover.removeChild(this.$refs.picker)
    }
  },
  methods: {
    nextStep(fromStep) {
      const checkAndSubmit = () => {
        let minLengthToSubmit = this.range ? 2 : this.multiple ? 0 : 1
        let passSelected = this.selectedDates.length >= minLengthToSubmit
        if ((this.autoSubmit || this.inline) && passSelected) {
          this.submit(!this.multiple)
        }
      }

      if (this.simple) {
        if (
          (this.type === 'date' && fromStep === 'day') ||
          (this.type === 'year-month' && fromStep === 'month') ||
          this.type === 'year' ||
          this.type === 'month'
        )
          checkAndSubmit()
        return
      }

      let step = this.step + 1
      if (this.isCompactTime && this.type === 'datetime') step += 1
      if (this.steps.length <= step) {
        checkAndSubmit()
      } else {
        this.step++
        this.goStep(this.step)
      }
    },
    goStep(i) {
      this.step = typeof i === 'number' ? i : this.steps.indexOf(i)
      this.checkScroll()
    },
    checkScroll() {
      let step = this.currentStep
      if (step === 'y' || (step === 'm' && this.visible)) {
        setTimeout(() => {
          let container = this.$refs[{ y: 'year', m: 'month' }[step]]
          if (container) {
            let selected = container.querySelector('.vpd-selected')
            if (selected && 'scrollIntoView' in selected) {
              try {
                selected.scrollIntoView({ block: 'center' })
              } catch (er) {
                selected.scrollIntoView()
              }
            }
          }
        }, 100)
      }
    },
    nextMonth() {
      this.date = this.date.clone().xAdd(1, 'month')
      this.$emit('next-month', this.date.clone())
    },
    prevMonth() {
      this.date = this.date.clone().xAdd(-1, 'month')
      this.$emit('prev-month', this.date.clone())
    },
    selectDay(day) {
      if (!day.date || day.disabled) return
      let date = this.core.moment(day.date)
      date.set({
        hour: this.time.hour(),
        minute: this.time.minute(),
        second: 0
      })
      this.date = date.clone()
      this.time = date.clone()
      if (this.range) {
        let length = this.selectedDates.length
        if (!length || length > 1) {
          this.selectedDates = [date.clone()]
        } else {
          this.selectedDates.push(date.clone())
          this.selectedDates.sort((a, b) => a - b)
        }
      } else if (this.multiple) {
        let exists = this.selectedDates.findIndex(
          d => d.valueOf() === date.valueOf()
        )
        if (exists > -1) {
          this.selectedDates.splice(exists, 1)
        } else {
          this.selectedDates.push(date.clone())
        }
      } else {
        this.selectedDates = [date.clone()]
      }
      this.nextStep('day')
    },
    selectYear(year) {
      if (year.disabled) return
      this.date = this.date.clone().xYear(year.xYear())
      this.keepCurrentSelectedDay()
      this.resetSelectedDates(this.date)
      this.$emit('year-change', year)
      this.nextStep('year')
    },
    selectMonth(month) {
      if (month.disabled) return
      this.date = this.date.clone().xMonth(month.xMonth())
      this.keepCurrentSelectedDay()
      this.resetSelectedDates(this.date)
      this.$emit('month-change', month)
      this.nextStep('month')
    },
    keepCurrentSelectedDay() {
      if (!this.simple || this.multiple || this.range) return
      let currentDay = this.selectedDate.xDate()
      this.date.xDate(Math.min(currentDay, this.date.xDaysInMonth()))
      this.selectedDates = [this.date.clone()]
      this.autoSubmit && this.submit(false)
    },
    resetSelectedDates(date) {
      if (['month', 'year-month'].indexOf(this.type) !== -1)
        this.selectedDates = [date.clone()]
    },
    submit(close = true) {
      let steps = this.steps.length - 1
      let selected = this.selectedDates
      if (this.isCompactTime && this.type === 'datetime') steps -= 1
      if (this.step < steps && !this.simple) return this.nextStep()

      if (this.hasStep('t')) {
        let t = { hour: this.time.hour(), minute: this.time.minute() }
        this.date = this.date.set(t).clone()
        this.selectedDates = selected.map(d => d.set(t).clone())
      }

      if (['year', 'month', 'year-month'].indexOf(this.type) !== -1)
        this.selectedDates = selected.map(() => this.date.clone())

      if (this.range && selected.length > 1) {
        selected[0].xStartOf('day')
        selected[1].xEndOf('day')
      }

      this.output = cloneDates(selected)
      if (close) this.visible = false

      if (this.isDataArray) {
        this.$emit('input', this.outputValue)
        this.$emit('change', cloneDates(selected))
      } else {
        this.$emit('input', this.outputValue[0])
        this.$emit('change', selected[0].clone())
      }
    },
    updateDates(payload) {
      if (!payload) payload = this.isDataArray ? [] : ''

      // fix: don't update dates if they are already up to date
      if (this.date.clone && payload.toString() === this.outputValue.toString())
        return

      const payloadIsArray = payload instanceof Array
      const getDate = (input, index = 0) => {
        let date
        let startValue =
          this.value instanceof Array ? this.value[index] : this.value
        try {
          let isObject = typeof input === 'object'
          if (input instanceof Date) {
            date = this.getMoment(input)
          } else if (input && isObject && 'clone' in input) {
            date = input.clone()
          } else if (null === input || !isObject) {
            date = this.getMoment(input || startValue || this.initialValue)
          }
          date = date.isValid() ? date : this.core.moment()
        } catch (e) {
          date = this.core.moment()
        }
        this.setTimezone(date, 'in')
        return date
      }

      if (payloadIsArray) {
        this.date = getDate(payload[0])
        this.selectedDates = payload.map(getDate)
      } else {
        this.date = getDate(payload)
      }

      if (!this.hasStep('t')) this.date.set({ hour: 0, minute: 0, second: 0 })

      if (this.isLower(this.date)) {
        this.date = this.minDate.clone()
      } else if (this.isMore(this.date)) {
        this.date = this.maxDate.clone()
      }

      if (!payloadIsArray) this.selectedDates = [this.date.clone()]
      this.time = this.date.clone()

      if (this.value !== '' && this.value !== null && this.value.length) {
        this.output = cloneDates(this.selectedDates)
      } else {
        this.output = []
        this.$forceUpdate()
      }
    },
    goToday() {
      let now = this.core.moment()
      if (!this.hasStep('t')) now.set({ hour: 0, minute: 0, second: 0 })
      this.date = now.clone()
      this.time = now.clone()
      this.selectedDates = [now.clone()]
    },
    setType() {
      switch (this.type) {
        case 'date':
          this.steps = ['y', 'm', 'd']
          this.goStep('d')
          break
        case 'datetime':
          this.steps = ['y', 'm', 'd', 't']
          this.goStep('d')
          break
        case 'year':
          this.steps = ['y']
          this.goStep('y')
          break
        case 'month':
          this.steps = ['m']
          this.goStep('m')
          break
        case 'time':
          this.steps = ['t']
          this.goStep('t')
          break
        case 'year-month':
          this.steps = ['y', 'm']
          this.goStep('y')
          break
      }
    },
    setView() {
      let s = this.shortCodes[this.view]
      if (this.hasStep(s)) this.goStep(s)
    },
    setDirection(prop, val, old) {
      this[prop] = val > old ? 'direction-next' : 'direction-prev'
    },
    setMinMax() {
      let min = this.getMoment(this.min),
        max = this.getMoment(this.max)
      this.minDate = this.min && min.isValid() ? min : false
      this.maxDate = this.max && max.isValid() ? max : false
    },
    getMoment(date) {
      let d,
        moment = this.core.moment

      if (date instanceof Date) return moment(date)

      if (this.selfInputFormat === 'x' || this.selfInputFormat === 'unix') {
        d = moment(date.toString().length === 10 ? date * 1000 : date * 1)
      } else {
        try {
          if (date) {
            let a = moment(date, this.selfInputFormat)
            let b = moment(date, this.selfFormat)
            let now = moment(),
              year = now.xYear()
            if (this.type === 'month') {
              a.xYear(year)
              b.xYear(year)
            } else if (this.type === 'time') {
              a = now.clone().set({
                h: a.hour(),
                m: a.minute(),
                s: 0
              })
              b = a.clone()
            }
            if (a.year() !== b.year() && a.year() < 1900) {
              d = b.clone()
            } else {
              d = a.clone()
            }
          } else {
            d = moment()
          }
        } catch (er) {
          d = moment()
        }
      }
      return d
    },
    focus(e) {
      if (this.editable) {
        if (this.$refs.input) this.$refs.input.focus()
      } else {
        if (e) {
          e.preventDefault()
          e.stopPropagation()
          e.target.blur()
          this.visible = !this.visible
        } else {
          this.visible = true
        }
        return false
      }
    },
    hasStep(step) {
      return this.steps.indexOf(step) !== -1
    },
    setOutput(e) {
      if (!this.editable) return
      let value = e.target.value.split('~')

      let output = value.map(item => {
        item = `${item}`.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
        if (item === '') return null
        try {
          let date = this.core.moment(item, this.selfDisplayFormat)
          return date.isValid() ? date : null
        } catch (er) {
          return null
        }
      })

      this.output = output.filter(d => d)
      this.output.sort((a, b) => a - b)

      if (this.output.length) {
        this.updateDates(cloneDates(this.output))
        this.submit()
      } else {
        this.$forceUpdate()
        this.$emit('input', this.isDataArray ? [] : null)
        this.$emit('change', this.isDataArray ? [] : null)
      }
    },
    wrapperClick() {
      this.visible = false
      if (this.wrapperSubmit && this.canSubmit) {
        this.submit()
      }
    },
    applyDevFn(fn, k) {
      let result = false
      let args = Array.prototype.splice.call(arguments, 2)
      try {
        args.push({ y: 'year', m: 'month', d: 'day', t: 'time' }[k])
        result = fn.apply(null, args)
      } catch (er) {
        // eslint-disable-next-line
        console.error(er)
      }
      return result
    },
    checkDisable(item, value) {
      let thisDisable = this.disable
      if (!thisDisable) return false
      let type = typeof thisDisable

      let checkString = (filter, str, date) => {
        if (filter instanceof RegExp) return filter.test(str)
        if (filter === str) return true
        if (item === 'd') {
          let length = filter.length
          return (
            str.substr(0, length) === filter ||
            date
              .clone()
              .locale('en')
              .format('dddd') === filter
          )
        }
        return false
      }

      let check = (date, dateFormatted) => {
        let matches = false
        if (type === 'function') {
          return this.applyDevFn(thisDisable, item, dateFormatted, date.clone())
        } else if (
          Object.prototype.toString.call(thisDisable) === '[object Array]'
        ) {
          let ii = thisDisable.length
          for (let i = 0; i < ii; i++) {
            matches = checkString(thisDisable[i], dateFormatted, date)
            if (matches) break
          }
          return matches
        } else if (type === 'string' || thisDisable instanceof RegExp) {
          return checkString(thisDisable, dateFormatted, date)
        }
        return false
      }

      let format = this.selfFormat
      if (item === 'y') {
        value = this.core.moment(value, 'jYYYY')
      } else if (item === 'd') {
        // remove time from format
        format = format.replace(/(H(H?))|(h(h?))?(:?)m(m?)(:?)(s(s?))?/g, '')
      }
      return check(value, value.format(format))
    },
    getHighlights(item, value) {
      let highlight = this.highlight
      if (!highlight || typeof highlight !== 'function') return {}
      if (item === 'y') value = this.core.moment(value, 'jYYYY')
      return (
        this.applyDevFn(
          highlight,
          item,
          value.format(this.selfFormat),
          value.clone()
        ) || {}
      )
    },
    isLower(date) {
      return this.minDate && date < this.minDate
    },
    isMore(date) {
      return this.maxDate && date > this.maxDate
    },
    clearValue() {
      if (this.disabled) return
      this.output = []
      this.$emit('input', this.isDataArray ? [] : '')
      this.$emit('change', this.isDataArray ? [] : null)
    },
    setLocale(locale) {
      this.core.changeLocale(locale, this.localeConfig)
      this.date = this.date.clone()
      this.selectedDates = this.selectedDates.map(d => d.clone())
      this.$forceUpdate()
    },
    setTimezone(date, mode) {
      let tz = this.timezone
      if (tz) {
        let r = mode === 'in' ? 1 : -1
        let moment = this.core.momentBase
        if (typeof tz === 'string') {
          let t =
            moment()
              .utc()
              .format('YYYY-MM-DDTHH:mm:ss') + tz
          date.add(moment.parseZone(t).utcOffset() * r, 'minutes')
        } else if (typeof tz === 'boolean' && tz) {
          date.subtract(new Date(date).getTimezoneOffset() * r, 'minutes')
        } else if (typeof tz === 'function') {
          date = tz(date, mode, this)
        }
      }
      return date.clone()
    },
    convertToLocaleNumber(value) {
      if (this.convertNumbers && this.locale === 'fa') {
        return `${value}`.replace(/\d+/g, function(digit) {
          let ret = ''
          for (let i = 0, len = digit.length; i < len; i++) {
            ret += String.fromCharCode(digit.charCodeAt(i) + 1728)
          }
          return ret
        })
      }
      return value
    },
    getInputGroupElement() {
      return this.customInput
        ? document.querySelector(this.customInput)
        : this.$refs.inputGroup
    },
    onWindowResize() {
      this.windowWidth = window.innerWidth
      this.setPlacement()
    },
    onWindowScroll() {
      this.setPlacement()
    },
    onWindowClick(event) {
      const inputGroup = this.getInputGroupElement()
      if (this.isPopover && this.$refs.picker && inputGroup) {
        let isOnPicker = this.$refs.picker.contains(event.target)
        let isOnInput = inputGroup.contains(event.target)
        if (!isOnPicker && !isOnInput) {
          // setTimeout because:
          // first read the input value
          // then process the output
          // then close the picker
          setTimeout(() => (this.visible = false), this.editable ? 500 : 0)
        }
      }
    },
    setPlacement() {
      if (!this.isPopover || !this.visible) return
      let positionOptions = {
        placement: '',
        offsetX: 0,
        offsetY: 0
      }
      if (typeof this.popover === 'object' && this.popover)
        positionOptions = this.popover
      else if (typeof this.popover === 'string')
        positionOptions.placement = this.popover
      popover.setPickerPosition(
        this.$refs.picker,
        this.$refs.container,
        this.getInputGroupElement(),
        positionOptions
      )
    }
  },
  install(Vue, options) {
    let component = this
    options = Vue.util.extend(
      {
        name: 'data-picker',
        props: {}
      },
      options
    )

    for (let k in options.props) {
      if (component.props.hasOwnProperty(k)) {
        component.props[k].default = options.props[k]
      }
    }
    Vue.component(options.name, component)
  }
}
</script>
