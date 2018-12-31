<template>
    <span>
        <span v-if="!element" :class="[prefix('input-group'), {disabled: disabled}]">
            <label :for="id"
                   :class="[prefix('icon-btn')]"
                   :style="{'background-color': color}"
                   @click.prevent.stop="visible=true">
                <slot name="label">
                    <time-icon v-if="type=='time'" width="16px" height="16px"></time-icon>
                    <calendar-icon v-else="" width="16px" height="16px"></calendar-icon>
                    <span v-if="label">{{ label }}</span>
                </slot>
            </label>
            <input type="text"
                   :id="id"
                   :name="name"
                   :class="[inputClass, {'is-editable': editable}]"
                   :placeholder="placeholder"
                   :value="displayValue"
                   :disabled="disabled"
                   @focus="focus"
                   @blur="setOutput">
            <input v-if="altName" type="hidden" :name="altName" :value="altFormatted"/>

            <i v-if="clearable && !disabled && displayValue"
               :class="[prefix('clear-btn')]"
               @click="clearValue"
            >x</i>
        </span>

        <template v-else="">
            <input v-if="altName" type="hidden" :name="altName" :value="altFormatted"/>
        </template>

        <transition name="fade-scale">
            <div v-if="visible"
                 :class="[
                     prefix('wrapper'),
                     inline ? prefix('is-inline'):'',
                     autoSubmit && !hasStep('t') ? prefix('no-footer'):''
                 ]"
                 :data-type="type"
                 @click.self="wrapperClick"
                 ref="picker">
                <div :class="[prefix('container')]">
                    <div :class="[prefix('content')]">
                        <div :class="[prefix('header')]" :style="{'background-color': color}">
                            <div v-if="type == 'date' || type == 'datetime'"
                                 :class="[prefix('year-label'), directionClass]"
                                 @click="goStep('y')">
                                <transition name="slideh">
                                    <span :key="selectedDate.jYear()">
                                        <span>{{ selectedDate.jYear() }}</span>
                                    </span>
                                </transition>
                            </div>
                            <div :class="[prefix('date'), directionClass]" :style="{'font-size': type=='datetime'? '22px':''}">
                                <transition name="slideh">
                                    <span :key="formattedDate">{{ formattedDate }}</span>
                                </transition>
                            </div>
                        </div>
                        <div :class="[prefix('body'), directionClassDate]">
                            <template v-if="steps.indexOf('d') != -1">
                                <div :class="[prefix('controls')]">
                                    <button type="button" :class="[prefix('next')]" class="right-arrow-btn" @click="prevMonth" :disabled="prevMonthDisabled">
                                        <arrow width="10" fill="#000" direction="right" style="vertical-align: middle"></arrow>
                                    </button>
                                    <button type="button" :class="[prefix('prev')]" class="left-arrow-btn" @click="nextMonth" :disabled="nextMonthDisabled">
                                        <arrow width="10" fill="#000" direction="left" style="vertical-align: middle"></arrow>
                                    </button>
                                    <transition name="slidev">
                                        <div :class="[prefix('month-label')]" @click="goStep('m')" :key="date.jMonth()">
                                            <span :style="{'border-color': color, color: color}">{{ date.format('jMMMM jYYYY') }}</span>
                                        </div>
                                    </transition>
                                </div>
                                <div class="clearfix" :class="[prefix('month'), directionClassDate]">
                                    <div class="clearfix" :class="[prefix('week')]">
                                        <div v-for="day in weekDays" :class="[prefix('weekday')]">{{ day }}</div>
                                    </div>
                                    <div :class="[prefix('days')]" :style="{height: (month.length * 40) + 'px' }">
                                        <transition name="slidev" :class="directionClassDate">
                                            <div :key="date.jMonth()" >
                                                <div v-for="m,i in month" class="clearfix">
                                                    <div :class="[prefix('day'), {selected: day.selected, empty: day.date == null}, day.attributes.class]"
                                                         v-for="day in m"
                                                         v-bind="day.attributes"
                                                         @click="selectDay(day)"
                                                         :disabled="day.disabled">
                                                        <template v-if="day.date != null">
                                                            <span :class="[prefix('day-effect')]" :style="{'background-color': color}"></span>
                                                            <span :class="[prefix('day-text')]">{{ day.formatted }}</span>
                                                        </template>
                                                    </div>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </template>
                            <div v-else="" style="height:250px"></div>

                            <transition name="fade">
                                <div v-if="steps.indexOf('y') != -1"
                                     :class="[prefix('addon-list')]"
                                     v-show="currentStep == 'y'"
                                     ref="year">
                                    <div :class="[prefix('addon-list-content')]">
                                        <div v-for="year in years"
                                             v-bind="year.attributes"
                                             :class="[prefix('addon-list-item'), {selected: year.selected }, year.attributes.class]"
                                             :style="[{color: year.selected?color:''}, year.attributes.style]"
                                             :disabled="year.disabled"
                                             @click="selectYear(year)"
                                        >{{ year.value }}</div>
                                    </div>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="steps.indexOf('m') != -1"
                                     :class="[prefix('addon-list'), prefix('month-list'), {'can-close': steps.length>1 }]"
                                     v-show="currentStep == 'm'"
                                     ref="month">
                                    <div :class="[prefix('addon-list-content')]">
                                        <div v-for="month,i in months"
                                             v-bind="month.attributes"
                                             @click="selectMonth(month)"
                                             :class="[prefix('addon-list-item'), {selected: date.jMonth() == month.jMonth() }, month.attributes.class]"
                                             :disabled="month.disabled"
                                             :style="[{color: date.jMonth() == month.jMonth()?color:''}, month.attributes.style]"
                                        >{{ month.format('jMMMM') }}</div>
                                    </div>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="steps.indexOf('t') != -1"
                                     :class="[prefix('addon-list'), prefix('time'), {disabled: isDisableTime}]"
                                     v-show="currentStep == 't'"
                                     ref="time">
                                    <div :class="[prefix('addon-list-content')]">
                                        <div :class="[prefix('time-h'), classFastCounter]">
                                            <btn class="up-arrow-btn" @update="setTime(1, 'h')" @fastUpdate="fastUpdateCounter">
                                                <arrow width="20" direction="up"></arrow>
                                            </btn>
                                            <div class="counter" :class="directionClassTime" @mousewheel.stop.prevent="wheelSetTime('h',$event)">
                                                <div class="counter-item" v-for="item, i in time.format('HH').split('')" v-bind="timeAttributes">
                                                    <transition name="slideh">
                                                        <span :key="item + '_' + i" :style="{transition: 'all ' + timeData.transitionSpeed + 'ms ease-in-out'}">{{ item }}</span>
                                                    </transition>
                                                </div>
                                            </div>
                                            <btn class="down-arrow-btn" @update="setTime(-1, 'h')" @fastUpdate="fastUpdateCounter">
                                                <arrow width="20" direction="down"></arrow>
                                            </btn>
                                        </div>
                                        <div :class="[prefix('time-m'), classFastCounter]">
                                            <btn class="up-arrow-btn" @update="setTime(jumpMinute, 'm')" @fastUpdate="fastUpdateCounter">
                                                <arrow width="20" direction="up"></arrow>
                                            </btn>
                                            <div class="counter" :class="directionClassTime" @mousewheel.stop.prevent="wheelSetTime('m',$event)">
                                                <div class="counter-item" v-for="item, i in time.format('mm').split('')" v-bind="timeAttributes">
                                                    <transition name="slideh">
                                                        <span :key="item + '_' + i" :style="{transition: 'all ' + timeData.transitionSpeed + 'ms ease-in-out'}">{{ item }}</span>
                                                    </transition>
                                                </div>
                                            </div>
                                            <btn class="down-arrow-btn" @update="setTime(-jumpMinute, 'm')" @fastUpdate="fastUpdateCounter">
                                                <arrow width="20" direction="down"></arrow>
                                            </btn>
                                        </div>
                                    </div>
                                </div>
                            </transition>

                            <transition name="fade">
                                <span :class="[prefix('close-addon')]" v-if="steps.length > 1 && (currentStep != 'd')" @click="goStep('d')">x</span>
                            </transition>

                            <br v-if="autoSubmit && !hasStep('t')">

                            <div :class="[prefix('actions')]" v-else>
                                <button type="button" @click="submit()" :disabled="!canSubmit" :style="{'color': color}">تایید</button>
                                <button v-if="!inline" type="button" @click="visible=false" :style="{'color': color}">انصراف</button>
                                <button type="button" @click="goToday()" :style="{'color': color}" v-if="canGoToday">اکنون</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </span>
</template>

<script>

    import './assets/scss/style.scss';
    import utils from './modules/utils';
    import Arrow from './components/Arrow.vue';
    import Btn from './components/Btn.vue';
    import CalendarIcon from './components/CalendarIcon.vue';
    import TimeIcon from './components/TimeIcon.vue';

    const moment = utils.moment;

    export default {
        moment: moment,
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
            value: {type: [Number, String], 'default': ''},

            /**
             * Initial value of picker (if value is empty)
             * @type Number String
             * @default []
             * @example 1370/01/01 22:45 | 2017/01/01 20:45 | {unix} | 20:45
             * @version 1.0.9
             */
            initialValue: {type: [Number, String], 'default': ''},

            /**
             * Format for {value}
             * @type String
             * @default Null
             * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | unix | HH:mm
             * @if empty {inputFormat} = {format}
             * @see https://github.com/jalaali/moment-jalaali
             */
            inputFormat: {type: String, 'default': ''},

            /**
             * Format only to display the date in the field
             * @type String
             * @default Null
             * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | unix | HH:mm
             * @if empty {displayFormat} = {format}
             * @see https://github.com/jalaali/moment-jalaali
             */
            displayFormat: {type: String, 'default': ''},

            /**
             * Format for output value
             * @type String
             * @default Null
             * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | unix | HH:mm
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
            format: {type: String, 'default': ''},

            /**
             * Step to view on startup
             * @type String
             * @default "day"
             * @supported day | month | year | time
             * @example year
             * @desc {year} will show the "year" panel at first
             */
            view: {type: String, 'default': 'day'},

            /**
             * The picker type
             * @type String
             * @default "date"
             * @supported date | datetime | year | month | time
             */
            type: {type: String, 'default': 'date'},

            /**
             * The minimum of selectable period
             * Based on {inputFormat}
             * @type String
             * @default Null
             * @example 1396/08/01 22:45 | 22:45
             */
            min: {type: [String], 'default': ''},

            /**
             * The maximum of selectable period
             * Based on {inputFormat}
             * @type String
             * @default Null
             * @example 1396/08/01 22:45 | 22:45
             */
            max: {type: [String], 'default': ''},

            /**
             * Editable input or just readonly
             * @type Boolean
             * @default False
             * @if false, the picker will shown on input focus
             * @if true, the picker will shown on label click
             * @note if use <... :editable="true"> with <... :element="...">
             *     then you have to control the <... :show="true or false">
             */
            editable: {type: Boolean, 'default': false},

            /**
             * The specified input element ID
             * @type String
             * @default Undefined
             * @desc Sometimes you don't want to use picker default input,
             * so you can use our own input element with "id" attribute
             * and use <... element="the_id_of_input">
             */
            element: {type: String},

            /**
             * The form input name when not using {element}
             * @type String
             * @default Undefined
             */
            name: {type: String},

            /**
             * The form input className when not using {element}
             * @type String
             * @default "form-control"
             */
            inputClass: {type: String,'default': 'form-control'},

            /**
             * The form input placeholder when not using {element}
             * @type String
             * @default Null
             */
            placeholder: {type: String, 'default': ''},

            /**
             * The name of hidden input element
             * @type String
             * @default Null
             * @if empty, the hidden input will not be created
             */
            altName: {type: String, 'default': ''},

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
            altFormat: {type: String, 'default': ''},

            /**
             * Show or hide the picker
             * @type Boolean
             * @default False
             */
            show: {type: Boolean, 'default': false},

            /**
             * Primary color of picker
             * @type String
             */
            color: {type: String, 'default': '#417df4' },

            /**
             * Auto submit and hide picker when date selected
             * @type Boolean
             * @default False
             */
            autoSubmit: {type: Boolean, 'default': false},

            /**
             * Auto submit when clicking the wrapper
             * @type Boolean
             * @default false
             * @version 1.0.6
             */
            wrapperSubmit: {type: Boolean, 'default': false},

            /**
             * Place to append picker
             * @type String query selector
             * @default null
             * @desc If you want to append picker to another container like 'body',
             * pass the container as append-to="body",  append-to="#app",  append-to="#my-container"
             * @example 'body', '.main-container', '#app' ...
             * @version 1.1.1
             */
            appendTo: {type: String, 'default': null},

            /**
             * Disable or enable the datepicker
             * @type Boolean
             * @default false
             * @version 1.1.4
             */
            disabled: {type: Boolean, 'default': false},

            /**
             * Disabling
             * @type Array, String, Function, RegExp
             * @default undefined
             * @desc disable some dates
             * @example ['1397/02/02', '1390/10/10'] - "1397/05/20" - /1397\/05\/(.*)/ ...
             * @version 1.1.4
             */
            disable: {type: [Array, String, Function, RegExp]},

            /**
             * Label
             * @type String
             * @version 1.1.4
             */
            label: {type: String},

            /**
             * Highlight items
             * @type Function
             * @desc This prop accepts only function that return an object of attributes.
             * @version 1.1.5
             */
            highlight: {type: Function, 'default': null},

            /**
             * Change minutes by step
             * @type Number
             * @default 1
             * @version: 1.1.6
             */
            jumpMinute: {type: Number, 'default': 1},

            /**
             * Round minutes when jumpMinute is grater than 1
             * @example when jumpMinute = 15 thin will result: 13:00, 13:15, 13:30, 13:45 ...
             * @type Boolean
             * @default false
             * @version: 1.1.6
             */
            roundMinute: {type: Boolean, 'default': false},

            /**
             * Show clear button
             * @type Boolean
             * @default false
             * @version 1.1.6
             */
            clearable: {type: Boolean, 'default': false},

            /**
             * Inline mode
             * @type Boolean
             * @default false
             * @version 1.1.6
             */
            inline: {type: Boolean, 'default': false},
        },
        data() {
            return {
                now: moment(),
                date: {},
                selectedDate: {},
                visible: false,
                directionClass: '',
                directionClassDate: '',
                directionClassTime: '',
                classFastCounter: '',
                weekDays: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
                steps: ['y', 'm', 'd', 't'],
                step: 0,
                shortCodes: {
                    'year':  'y',
                    'month': 'm',
                    'day':   'd',
                    'time':  't',
                },
                time: {},
                timeData: {
                    transitionSpeed: 300,
                    timeout: false,
                    lastUpdate: new Date().getTime(),
                },
                minDate: false,
                maxDate: false,
                output: '',
                updateNowInterval: null,
            }
        },
        methods: {
            nextStep(){
                if(this.steps.length <= this.step + 1){
                    return (this.autoSubmit || this.inline) ? this.submit():'';
                }else{
                    this.step++;
                    this.goStep(this.step);
                }
            },
            goStep(i){
                this.step = typeof i === 'number' ? i:this.steps.indexOf(i);
                this.checkScroll();
            },
            checkScroll(){
                let step = this.currentStep;
                if(step === 'y' || step === 'm' && this.visible){
                    this.$nextTick(() => {
                        setTimeout(() => {
                            let container = this.$refs[{y: 'year', m: 'month'}[step]];
                            if(container){
                                let top = container.querySelector('.selected');
                                top = top ? top.offsetTop - 110 : 0;
                                utils.scrollTo(container, top, 400);
                            }
                        },100);
                    })
                }
            },
            fastUpdateCounter(e){
                if(!e) this.transitionSpeed = 300;
                this.classFastCounter = e ? 'fast-updating':''
            },
            nextMonth() {this.date = this.date.clone().add(1, 'jMonth')},
            prevMonth() {this.date = this.date.clone().add(-1, 'jMonth')},
            selectDay(day){
                if(!day.date || day.disabled) return;
                let d = moment(day.date);
                let s = this.selectedDate;
                d.set({hour: s.hour(), minute: s.minute(), second: 0});
                this.date = d.clone();
                this.selectedDate = d.clone();
                this.time = d.clone();
                this.nextStep();
            },
            selectYear(year){
                if(year.disabled) return;
                this.date.jYear(year.value);
                this.nextStep();
            },
            selectMonth(month){
                if(month.disabled) return;
                this.date.jMonth(month.jMonth());
                this.nextStep();
            },
            setTime(v, k){

                let  time = this.time.clone();

                if (this.type === 'time' && k === 'm' && this.roundMinute) {
                    let x = v - (time.minute() % v);
                    time.add({[k]: x})
                } else {
                    time.add({[k]: v})
                }

                if(this.type !== 'time'){
                    let date = this.date.clone();
                    time.set({year: date.year(), month: date.month(), date: date.date()});
                    date.set({hour: time.hour(), minute: time.minute()});
                    this.date = date;
                }

                if(this.isLower(time)) time = this.minDate.clone();
                if(this.isMore(time)) time = this.maxDate.clone();

                this.time = time;

                let now = new Date().getTime(), def = now - this.timeData.lastUpdate;
                if(20 < def && def < 300) this.timeData.transitionSpeed = def;
                this.timeData.lastUpdate = now;

                window.clearTimeout(this.timeData.timeout);
                this.timeData.timeout = window.setTimeout(() => {
                    this.timeData.transitionSpeed = 300;
                }, 300);

            },
            wheelSetTime(k, e){
                this.setTime(e.wheelDeltaY > 0 ? this.jumpMinute:-this.jumpMinute, k);
            },
            submit(){
                if(this.hasStep('t')){
                    let t = {hour: this.time.hour(), minute: this.time.minute()};
                    this.date.set(t);
                    this.selectedDate.set(t);
                }

                if(['year', 'month'].indexOf(this.type) !== -1) this.selectedDate = this.date.clone();
                this.output = this.selectedDate.clone();
                this.visible = false;

                this.$emit('input',  this.outputValue);
                this.$emit('change', this.selectedDate.clone());
            },
            updateDates(d){

                if (null === d || typeof d !== 'object')
                    d = this.getMoment(d ? d : (this.value || this.initialValue));

                this.date = d.isValid() ? d : moment();

                if (!this.hasStep('t')) this.date.set({hour: 0, minute: 0, second: 0});

                if (this.isLower(this.date)) {
                    this.date = this.minDate.clone();
                } else if (this.isMore(this.date)) {
                    this.date = this.maxDate.clone();
                }

                this.selectedDate = this.date.clone();
                this.time = this.date.clone();

                if (this.type === 'time' && this.roundMinute) {
                    let x = (this.jumpMinute - (this.time.minute() % this.jumpMinute)) % this.jumpMinute;
                    this.time.add({['m']: x})
                }

                if(this.value !== '' && this.value !== null && this.value.length !== 0){
                    this.output = this.selectedDate.clone();
                } else {
                    this.output = null;
                    this.$forceUpdate();
                }
            },
            goToday(){
                let now = moment();
                if (!this.hasStep('t')) now.set({hour: 0, minute: 0, second: 0});
                this.date = now.clone();
                this.time = now.clone();
                this.selectedDate = now.clone();
            },
            setType(){
                switch (this.type){
                    case 'date':
                        this.steps = ['y', 'm', 'd'];
                        this.goStep('d');
                        break;
                    case 'datetime':
                        this.steps = ['y', 'm', 'd', 't'];
                        this.goStep('d');
                        break;
                    case 'year':
                        this.steps = ['y'];
                        this.goStep('y');
                        break;
                    case 'month':
                        this.steps = ['m'];
                        this.goStep('m');
                        break;
                    case 'time':
                        this.steps = ['t'];
                        this.goStep('t');
                        break;
                }
            },
            setView(){
                let s = this.shortCodes[this.view];
                if(this.hasStep(s)) this.goStep(s);
            },
            setDirection(prop, val, old){
                if(typeof old.unix === 'function'){
                    this[prop] = val.unix() > old.unix() ? 'direction-next':'direction-prev';
                }
            },
            setMinMax(){
                let min = this.getMoment(this.min),
                    max = this.getMoment(this.max);
                this.minDate = this.min && min.isValid() ? min:false;
                this.maxDate = this.max && max.isValid() ? max:false;
            },
            getMoment(date){
                let d;
                if(this.selfInputFormat === 'x' || this.selfInputFormat === 'unix'){
                    d = moment(date.toString().length === 10 ? date*1000 : date*1);
                }else{

                    try {
                        if(date){
                            let a = moment(date, this.selfInputFormat);
                            let b = moment(date, this.selfFormat);

                            if(this.type === 'month'){
                                a.year(new Date().getFullYear());
                                b.year(new Date().getFullYear());
                            }
                            if(a.year() !== b.year() && a.year() < 1900){
                                d = b.clone();
                            }else{
                                d = a.clone();
                            }
                        }else{
                            d = moment();
                        }
                    }catch (er){
                        d = moment();
                    }
                }
                return d;
            },
            focus(e){
                if(!this.editable){
                    e.preventDefault();
                    e.stopPropagation();
                    e.target.blur();
                    this.visible = true;
                    return false;
                }
            },
            prefix(c){
                return 'vpd-' + c;
            },
            hasStep(step){
                return this.steps.indexOf(step) !== -1;
            },
            setOutput(e){
                if(!this.editable) return;
                let val = e.target.value;

                this.output = null;
                if(val){
                    try {
                        this.output = moment(val, this.displayFormat || this.selfFormat);
                        if (!this.output.isValid()) this.output = null;
                    } catch (er) {}
                }
                if(this.output){
                    this.updateDates(this.output.clone());
                    this.submit();
                } else  {
                    this.$forceUpdate();
                    this.$emit('input',  null);
                    this.$emit('change', null);
                }
            },
            wrapperClick(){
                this.visible = false;
                if(this.wrapperSubmit && this.canSubmit){
                    this.submit();
                }
            },
            applyDevFn(fn, k) {
                let result = false;
                let args = Array.prototype.splice.call(arguments, 2);
                try {
                    args.push({y: 'year', m: 'month', d: 'day', t: 'time'}[k]);
                    result = fn.apply(null, args);
                } catch (er) {
                    console.error(er);
                }
                return result;
            },
            checkDisable(item, value) {
                let thisDisable = this.disable;
                if (!thisDisable) return false;
                let type = typeof thisDisable;

                let checkString = (filter, str, date) => {
                    if (filter instanceof RegExp) return filter.test(str);
                    if (filter === str) return true;
                    if (item === 'd') {
                        let length = filter.length;
                        return (str.substr(0, length) === filter || date.clone().locale('en').format('dddd') === filter);
                    }
                    return false;
                };

                let check = (date, dateFormatted) => {
                    let matches = false;
                    if (type === 'function') {
                        return this.applyDevFn(thisDisable, item, dateFormatted, date.clone());
                    } else if (Object.prototype.toString.call(thisDisable) === '[object Array]') {
                        let ii = thisDisable.length;
                        for (let i=0; i < ii; i++) {
                            matches = checkString(thisDisable[i], dateFormatted, date);
                            if (matches) break;
                        }
                        return matches;
                    } else if (type === 'string' || (thisDisable instanceof RegExp)) {
                        return checkString(thisDisable, dateFormatted, date);
                    }
                    return false;
                };

                if (item === 'y') value = moment(value, 'jYYYY');
                return check(value, value.format(this.selfFormat));
            },
            getHighlights(item, value) {
                let highlight = this.highlight;
                if (!highlight || typeof highlight !== 'function') return {};
                if (item === 'y') value = moment(value, 'jYYYY');
                return this.applyDevFn(highlight, item, value.format(this.selfFormat), value.clone()) || {};
            },
            isLower(date) { return this.minDate && date.unix() < this.minDate.unix() },
            isMore(date) { return this.maxDate && date.unix() > this.maxDate.unix() },
            clearValue() {
                if (this.disabled) return;
                this.$emit('input', '');
                this.$emit('change', null);
            }
        },
        computed: {
            id(){
                return '_' + Math.random().toString(36).substr(2, 9);
            },
            input(){
                let input = false;
                if(this.value !== ''&& this.value !== null && this.value.length !== 0){
                    try {
                        input = moment(this.value, this.selfFormat);
                    }catch (er){
                        input = false;
                    }
                }
                return input;
            },
            currentStep(){
                return this.steps[this.step];
            },
            formattedDate(){
                let t = this.steps;
                let f = '';
                if(t.indexOf('y') !== -1) { f = 'jYYYY' }
                if(t.indexOf('m') !== -1) { f += ' jMMMM ' }
                if(t.indexOf('d') !== -1) { f = 'ddd jDD jMMMM' }
                if(t.indexOf('t') !== -1) { f += ' HH:mm ' }
                return f ? this.selectedDate.format(f):'';
            },
            month(){
                if(!this.hasStep('d')) return [];
                let m = utils.getWeekArray(this.date.clone().set({hour: 0, minute: 0, second: 0}), 6);
                let data = [];
                let selected = false;
                let min = this.minDate ? this.minDate.clone().startOf('day').unix():-Infinity;
                let max = this.maxDate ? this.maxDate.clone().endOf('day').unix():Infinity;
                m.forEach( w => {
                    let week = [];
                    w.forEach( d => {
                        let sel = (d === null || selected)? false:!this.selectedDate.diff(d, 'days');
                        let m = moment(d);
                        week.push({
                            date: d,
                            formatted: d === null ? '' : m.jDate(),
                            selected: sel,
                            disabled: (
                                (this.minDate && m.clone().startOf('day').unix() < min) ||
                                (this.maxDate && m.clone().endOf('day').unix() > max) ||
                                (d && this.checkDisable('d', m))
                            ),
                            attributes: (d ? this.getHighlights('d', m):{})
                        });
                        selected = sel;
                    });
                    data.push(week);
                });
                return data;
            },
            years(){
                if(!this.hasStep('y') || this.currentStep !== 'y') return [];
                let min = this.minDate ? this.minDate.jYear():1300;
                let max = this.maxDate ? this.maxDate.jYear():1430;
                let y = utils.getYearsList(min, max).reverse();
                let years = [], selectedFound = false, cy = this.date.jYear();
                y.forEach( item => {
                    let obj = {
                        value: item,
                        selected: false,
                        disabled: this.checkDisable('y', item),
                        attributes: this.getHighlights('y', item),
                    };
                    if(!selectedFound && cy === item){
                        obj.selected = true;
                        selectedFound = true;
                    }
                    years.push(obj);
                });
                return years;
            },
            months(){
                if (this.hasStep('m')) {
                    let date = this.date.clone().jDate(1).set({
                        hour: 0,
                        minute: 0,
                        second: 0
                    });
                    let months = utils.getMonthsList(this.minDate, this.maxDate, date);
                    months.forEach(m => {
                        m.disabled = m.disabled || this.checkDisable('m', m);
                        m.attributes = this.getHighlights('m', m);
                    });
                    return months;
                }
                return [];
            },
            prevMonthDisabled(){
                return (
                    this.hasStep('d') &&
                    this.minDate &&
                    this.minDate.clone().startOf('jMonth').unix() >= this.date.clone().startOf('jMonth').unix()
                )
            },
            nextMonthDisabled(){
                return (
                    this.hasStep('d') &&
                    this.maxDate &&
                    this.maxDate.clone().startOf('jMonth').unix() <= this.date.clone().startOf('jMonth').unix()
                )
            },
            canGoToday(){

                if(!this.minDate && !this.maxDate) return true;
                let now = this.now.unix(),
                    min = this.minDate && this.minDate.unix() <= now,
                    max = this.maxDate && now <= this.maxDate.unix();

                if(this.type === 'time'){
                    if(this.minDate){
                        min = this.now.clone().hour(this.minDate.hour()).minute(this.minDate.minute());
                        min = min.unix() <= now;
                    }
                    if(this.maxDate){
                        max = this.now.clone().hour(this.maxDate.hour()).minute(this.maxDate.minute());
                        max = now <= max.unix();
                    }
                }

                if(this.minDate && this.maxDate) return min && max;
                if(this.minDate) return min;
                if(this.maxDate) return max;
            },
            altFormatted(){
                let format = this.altFormat;
                if(format === '' || format === undefined){
                    switch (this.type){
                        case 'time':     format = 'HH:mm:ss [GMT]ZZ'; break;
                        case 'datetime': format = 'YYYY-MM-DD HH:mm:ss [GMT]ZZ'; break;
                        case 'date':     format = 'YYYY-MM-DD'; break;
                        case 'year':     format = 'YYYY'; break;
                        case 'month':    format = 'MM'; break;
                    }
                }
                return this.output ? this.output.format(format) : '';
            },
            selfFormat(){
                let format = this.format;
                if(format === '' || format === undefined){
                    switch (this.type){
                        case 'time':     format = 'HH:mm'; break;
                        case 'datetime': format = 'jYYYY/jMM/jDD HH:mm'; break;
                        case 'date':     format = 'jYYYY/jMM/jDD'; break;
                        case 'year':     format = 'jYYYY'; break;
                        case 'month':    format = 'jMM'; break;
                    }
                }
                return format;
            },
            selfInputFormat(){
                return (this.inputFormat === '' || this.inputFormat === undefined) ? this.selfFormat:this.inputFormat;
            },
            outputValue() {
                return this.output ? this.output.clone().format(this.selfFormat):'';
            },
            displayValue() {
                return this.output ? this.output.clone().format(this.displayFormat || this.selfFormat):'';
            },
            isDisableTime() {
                return (this.hasStep('t') && this.checkDisable('t', this.time));
            },
            timeAttributes() {
                return this.hasStep('t') ? this.getHighlights('t', this.time):{};
            },
            canSubmit() {
                if (!this.disable) return true;
                let can = true;
                if (this.hasStep('t')) can = !this.isDisableTime;
                if (can && this.type !== 'time') can = !this.checkDisable('d', this.date);
                return can;
            },
        },
        created(){
            this.updateNowInterval = setInterval(() => {
                this.now = moment();
            }, 1000);
        },
        mounted(){
            this.$nextTick(() => {
                let addEvent = (el, type, handler) => {
                    if (el.attachEvent) el.attachEvent('on' + type, handler); else el.addEventListener(type, handler);
                };
                let live = (selector, event, callback, context) => {
                    addEvent(context || document, event, function(e) {
                        let found, el = e.target || e.srcElement;
                        while (el && !(found = el.id === selector)) el = el.parentElement;
                        if (found) callback.call(el, e);
                    });
                };
                if (this.element && !this.editable) {
                    live(this.element, 'click', this.focus);
                }
            });
            document.body.addEventListener('keydown', e => {
                e = e || event;
                if (e.keyCode === 9 && this.visible) this.visible = false;
            });
        },
        watch: {
            type:  {handler: 'setType',     immediate: true},
            view:  {handler: 'setView',     immediate: true},
            value: {handler: 'updateDates', immediate: true},
            min:   {handler: 'setMinMax',   immediate: true},
            max:   {handler: 'setMinMax',   immediate: true},
            inline: {
                handler(val) {
                    if(!this.disabled) this.visible = !!val;
                },
                immediate: true
            },
            disabled: {
                handler(val) {
                    if(val)
                        this.visible = false;
                    else if (this.inline)
                        this.visible = true;
                },
                immediate: true
            },
            selectedDate(val, old){
                this.setDirection('directionClass', val, old);
            },
            date(val, old){
                this.setDirection('directionClassDate', val, old);
                this.checkScroll();
                if(this.isLower(this.date)) this.date = this.minDate.clone();
                if(this.isMore(this.date)) this.date = this.maxDate.clone();
            },
            time(val, old){
                this.setDirection('directionClassTime', val, old);
            },
            visible(val){
                if(val){
                    if (this.disabled) return this.visible = false;
                    if (this.type === 'datetime' && this.view === 'day') this.goStep('d');
                    if (this.view !== 'day') this.goStep(this.shortCodes[this.view] || 'd');
                    this.$nextTick(() => {
                        if (this.appendTo) {
                            try {
                                let container = document.querySelector(this.appendTo);
                                container.appendChild(this.$refs.picker);
                            } catch (er) {
                                console.warn(`Cannot append picker to "${this.appendTo}"!`);
                            }
                        }
                    });
                    this.checkScroll();
                    this.$emit('open', this)
                } else {
                    if (this.inline && !this.disabled) return this.visible = true;
                    this.$emit('close', this);
                }
            },
            show(val){
                this.visible = val;
            }
        },
        components: {Arrow, Btn, CalendarIcon, TimeIcon},
        beforeDestroy() {
            window.clearInterval(this.updateNowInterval);
        },
        install(Vue, options) {

            let component = this;
            options = Vue.util.extend({
                name: 'data-picker',
                props: {}
            }, options);

            for (let k in options.props) {
                if (component.props.hasOwnProperty(k)) {
                    component.props[k].default = options.props[k];
                }
            }
            Vue.component(options.name, component);
        }
    }
</script>