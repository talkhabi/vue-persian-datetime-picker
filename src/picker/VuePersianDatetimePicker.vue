<template>
    <span>
        <span v-if="!element" :class="[prefix('input-group')]">
            <label :for="id"
                   :class="[prefix('icon-btn')]"
                   @click.prevent.stop="visible=true"
                   :style="{'background-color': color}">
                <time-icon v-if="type=='time'" width="16px" height="16px"></time-icon>
                <calendar-icon v-else="" width="16px" height="16px"></calendar-icon>
            </label>
            <input type="text"
                   :id="id"
                   :name="name"
                   :class="[inputClass, {'is-editable': editable}]"
                   :placeholder="placeholder"
                   :value="outputValue"
                   @focus="focus"
                   @blur="setOutput">
            <input v-if="altName" type="hidden" :name="altName" :value="altFormatted"/>
        </span>

        <template v-else="">
            <input v-if="altName" type="hidden" :name="altName" :value="altFormatted"/>
        </template>

        <transition name="fade-scale">
            <div v-if="visible" :class="[prefix('wrapper')]" @click.self="wrapperClick" :data-type="type">
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
                                    <button :class="[prefix('next')]" class="right-arrow-btn" @click="prevMonth" :disabled="prevMonthDisabled">
                                        <arrow width="10" fill="#000" direction="right" style="vertical-align: middle"></arrow>
                                    </button>
                                    <button :class="[prefix('prev')]" class="left-arrow-btn" @click="nextMonth" :disabled="nextMonthDisabled">
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
                                                    <div :class="[prefix('day'), {selected: day.selected, empty: day.date == null}]"
                                                         v-for="day in m"
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
                                             :class="[prefix('addon-list-item'), {selected: year.selected }]"
                                             :style="{color: year.selected?color:''}"
                                             @click="selectYear(year.value)"
                                        >{{ year.value}}</div>
                                    </div>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="steps.indexOf('m') != -1"
                                     :class="[prefix('addon-list'), prefix('month-list'), {'can-close': (steps.length>1 && currentStep!='d') }]"
                                     v-show="currentStep == 'm'"
                                     ref="month">
                                    <div :class="[prefix('addon-list-content')]">
                                        <div v-for="month,i in months"
                                             :class="[prefix('addon-list-item'), {selected: date.jMonth() == month.jMonth() }]"
                                             @click="selectMonth(month)"
                                             :disabled="month.disabled"
                                             :style="{color: date.jMonth() == month.jMonth()?color:''}"
                                        >{{ month.format('jMMMM') }}</div>
                                    </div>
                                </div>
                            </transition>

                            <transition name="fade">
                                <div v-if="steps.indexOf('t') != -1"
                                     :class="[prefix('addon-list'), prefix('time')]"
                                     v-show="currentStep == 't'"
                                     ref="time">
                                    <div :class="[prefix('addon-list-content')]">
                                        <div :class="[prefix('time-h'), classFastCounter]">
                                            <btn class="up-arrow-btn" @update="setTime(1, 'h')" @fastUpdate="fastUpdateCounter">
                                                <arrow width="20" direction="up"></arrow>
                                            </btn>
                                            <div class="counter" :class="directionClassTime" @mousewheel.stop.prevent="wheelSetTime('h',$event)">
                                                <div class="counter-item" v-for="item, i in time.format('HH').split('')">
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
                                            <btn class="up-arrow-btn" @update="setTime(1, 'm')" @fastUpdate="fastUpdateCounter">
                                                <arrow width="20" direction="up"></arrow>
                                            </btn>
                                            <div class="counter" :class="directionClassTime" @mousewheel.stop.prevent="wheelSetTime('m',$event)">
                                                <div class="counter-item" v-for="item, i in time.format('mm').split('')">
                                                    <transition name="slideh">
                                                        <span :key="item + '_' + i" :style="{transition: 'all ' + timeData.transitionSpeed + 'ms ease-in-out'}">{{ item }}</span>
                                                    </transition>
                                                </div>
                                            </div>
                                            <btn class="down-arrow-btn" @update="setTime(-1, 'm')" @fastUpdate="fastUpdateCounter">
                                                <arrow width="20" direction="down"></arrow>
                                            </btn>
                                        </div>
                                    </div>
                                </div>
                            </transition>

                            <transition name="fade">
                                <span class="close-addon" v-if="steps.length > 1 && (currentStep != 'd')" @click="goStep('d')">x</span>
                            </transition>

                            <div :class="[prefix('actions')]">
                                <button @click="submit()" :style="{'color': color}">تایید</button>
                                <button @click="visible=false" :style="{'color': color}">انصراف</button>
                                <button @click="goToday()" :style="{'color': color}" v-if="canGoToday">اکنون</button>
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
    import utils from './modules/utils';
    import Arrow from './components/Arrow.vue'
    import Btn from './components/Btn.vue'
    import CalendarIcon from './components/CalendarIcon.vue'
    import TimeIcon from './components/TimeIcon.vue'

    export default {
        moment: utils.moment,
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
             * Format for {value}
             * @type String
             * @default Null
             * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | unix | HH:mm
             * @if empty {inputFormat} = {format}
             * @see https://github.com/jalaali/moment-jalaali
             */
            inputFormat: {type: String, 'default': ''},

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
        },
        data() {
            return {
                now: utils.moment(),
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
            }
        },
        methods: {
            nextStep(){
                if(this.steps.length <= this.step + 1){
                    return this.autoSubmit ? this.submit():'';
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
                let d = utils.moment(day.date);
                let s = this.selectedDate;
                d.hour(s.hour());
                d.minute(s.minute());
                d.second(s.second());
                this.date = d.clone();
                this.selectedDate = d.clone();
                this.time = d.clone();
                this.nextStep();
            },
            selectYear(year){
                this.date.jYear(year);
                this.nextStep();
            },
            selectMonth(month){
                if(month.disabled) return;
                this.date.jMonth(month.jMonth());
                this.nextStep();
            },
            setTime(v, k){

                let  time = this.time.clone();

                if(k === 'h'){
                    let h = this.time.hour() + v;
                    this.time = time.hour(h);
                }else{
                    let m = this.time.minute() + v;
                    this.time = time.minute(m);
                }

                if(this.type !== 'time'){
                    this.time.jYear(this.date.jYear()).jMonth(this.date.jMonth()).jDate(this.date.jDate());
                }

                if(this.minDate && this.time.unix() < this.minDate.unix()){
                    this.time = this.minDate.clone();
                }

                if(this.maxDate && this.time.unix() > this.maxDate.unix()){
                    this.time = this.maxDate.clone();
                }

                let now = new Date().getTime(), def = now - this.timeData.lastUpdate;
                if(20 < def && def < 300) this.timeData.transitionSpeed = def;
                this.timeData.lastUpdate = now;

                window.clearTimeout(this.timeData.timeout);
                this.timeData.timeout = window.setTimeout(() => {
                    this.timeData.transitionSpeed = 300;
                }, 300);

            },
            wheelSetTime(k, e){
                this.setTime(e.wheelDeltaY > 0 ? 1:-1, k);
            },
            submit(){
                if(this.hasStep('t')){
                    let h = this.time.hour();
                    let m = this.time.minute();
                    this.date.hour(h);
                    this.date.minute(m);
                }

                this.selectedDate = this.date.clone();
                this.output = this.selectedDate.clone();
                this.visible = false;

                this.$emit('input',  this.outputValue);
                this.$emit('change', this.selectedDate.clone());
            },
            updateDates(d){

                d = this.getMoment(d?d:this.value);

                this.date = d.isValid() ? d : utils.moment();

                if(this.minDate && this.date.unix() < this.minDate.unix()){
                    this.date = this.minDate.clone();
                }else if(this.maxDate && this.date.unix() > this.maxDate.unix()){
                    this.date = this.maxDate.clone();
                }

                this.selectedDate = this.date.clone();
                this.time = this.date.clone();

                if(this.value !== '' && this.value.length !== 0){
                    this.output = this.selectedDate.clone();
                }
            },
            goToday(){
                let now = utils.moment();
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
                if(this.steps.indexOf(s) !== -1)
                    this.goStep(s);
            },
            setDirection(prop, val, old){
                if(typeof old.unix === 'function'){
                    this[prop] = val.unix() > old.unix() ? 'direction-next':'direction-prev';
                }
            },
            setMinMax(){

                let min = this.getMoment(this.min),
                    max = this.getMoment(this.max);
                if(this.min &&  min.isValid()){
                    this.minDate = min;
                }
                if(this.max && max.isValid()){
                    this.maxDate = max;
                }
            },
            getMoment(date){
                let d;
                if(this.selfInputFormat === 'x' || this.selfInputFormat === 'unix'){
                    d = utils.moment(date.toString().length === 10 ? date*1000 : date*1);
                }else{

                    try {
                        if(date){
                            let a = utils.moment(date, this.selfInputFormat);
                            let b = utils.moment(date, this.selfFormat);

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
                            d = utils.moment();
                        }
                    }catch (er){
                        d = utils.moment();
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
                return 'p-datetime-picker-' + c;
            },
            hasStep(step){
                return this.steps.indexOf(step) !== -1;
            },
            setOutput(e){
                if(!this.editable) return;
                let val = e.target.value;

                this.output = '';
                if(val){
                    try {
                        this.output = utils.moment(val, this.selfFormat);
                    }catch (er){
                        this.output = '';
                    }
                }
                if(this.output){
                    this.updateDates(val);
                    this.submit();
                }
            },
            wrapperClick(){
                this.visible = false;
                if(this.wrapperSubmit){
                    this.submit();
                }
            }
        },
        computed: {
            id(){
                return '_' + Math.random().toString(36).substr(2, 9);
            },
            input(){
                let input = false;
                if(this.value !== '' && this.value.length !== 0){
                    try {
                        input = utils.moment(this.value, this.selfFormat);
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
                let m = utils.getWeekArray(this.date, 6);
                let data = [];
                let selected = false;
                let min = this.minDate ? this.minDate.unix():0;
                let max = this.maxDate ? this.maxDate.unix():Infinity;
                m.forEach( w => {
                    let week = [];
                    w.forEach( d => {
                        let sel = (d === null || selected)? false:!this.selectedDate.diff(d, 'days');
                        let m = utils.moment(d);
                        week.push({
                            date: d,
                            formatted: d === null ? '' : m.jDate(),
                            selected: sel,
                            disabled: (m.startOf('jDay').unix() < min || m.startOf('jDay').unix() > max)
                        });
                        selected = sel;
                    });
                    data.push(week);
                });
                return data;
            },
            years(){
                if(!this.hasStep('y')) return [];
                let min = this.minDate ? this.minDate.jYear():1300;
                let max = this.maxDate ? this.maxDate.jYear():1430;
                let y = utils.getYearsList(min, max).reverse();
                let years = [], selectedFound = false, cy = this.date.jYear();
                y.forEach( item => {
                    let obj = { value : item, selected: false };
                    if(!selectedFound && cy === item){
                        obj.selected = true;
                        selectedFound = true;
                    }
                    years.push(obj);
                });
                return years;
            },
            months(){
                return this.hasStep('m') ? utils.getMonthsList(this.minDate, this.maxDate, this.date):[];
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
            }
        },
        created(){
            this.setMinMax();
            this.updateDates();
            this.setType();
            this.setView();
            setInterval(() => {
                this.now = utils.moment();
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

                if(this.element && !this.editable){
                    live(this.element, 'click', (e) => {
                        this.focus(e);
                    });
                }
            })
        },
        watch: {
            selectedDate(val, old){
                this.setDirection('directionClass', val, old);
            },
            date(val, old){
                this.setDirection('directionClassDate', val, old);
                this.checkScroll();

                if(this.minDate && this.date.unix() < this.minDate.unix()){
                    this.date = this.minDate.clone();
                }
                if(this.maxDate && this.date.unix() > this.maxDate.unix()){
                    this.date = this.maxDate.clone();
                }
            },
            time(val, old){
                this.setDirection('directionClassTime', val, old);
            },
            type(){this.setType()},
            view(){this.setView()},
            value(){this.updateDates()},
            min(){this.setMinMax()},
            max(){this.setMinMax()},
            visible(val){
                if(val){
                    if(this.type === 'datetime' && this.view === 'day'){
                        this.goStep('d');
                    }
                    this.checkScroll();
                }else{
                    this.$emit('close', null);
                }
            },
            show(val){
                this.visible = val;
            }
        },
        components: {Arrow, Btn, CalendarIcon, TimeIcon}
    }
</script>