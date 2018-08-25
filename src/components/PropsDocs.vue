<template>
    <div>

        <highlight-code :lang="'javascript'">
            &lbrace;
                /**
                 * Default input value
                 * @type Number String
                 * @default []
                 * @example 1396/08/01 22:45 | 2017/07/07 20:45 | {unix} | 20:45
                 */
                value: "1396/05/05 22:50",

                /**
                 * Initial value of picker (if value is empty)
                 * @type Number String
                 * @default []
                 * @example 1370/01/01 22:45 | 2017/01/01 20:45 | {unix} | 20:45
                 * @version 1.0.9
                 */
                initialValue: '1380/01/01',

                /**
                 * Format for {value}
                 * @type String
                 * @default Null
                 * @example jYYYY/jMM/jDD HH:mm | YYYY/MM/DD HH:mm | x | unix | HH:mm
                 * @if empty {inputFormat} = {format}
                 * @see https://github.com/jalaali/moment-jalaali
                 */
                inputFormat: 'jYYYY/jMM/jDD HH:mm',

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
                format: 'jYYYY/jMM/jDD HH:mm',

                /**
                 * Step to view on startup
                 * @type String
                 * @default "day"
                 * @supported day | month | year | time
                 * @example year
                 * @desc {year} will show the "year" panel at first
                 */
                view: 'day',

                /**
                 * The picker type
                 * @type String
                 * @default "date"
                 * @supported date | datetime | year | month | time
                 */
                type: 'datetime',

                /**
                 * The minimum of selectable period
                 * Based on {inputFormat}
                 * @type String
                 * @default Null
                 * @example 1396/08/01 22:45 | 22:45
                 */
                min: '1396/01/01 00:00',

                /**
                 * The maximum of selectable period
                 * Based on {inputFormat}
                 * @type String
                 * @default Null
                 * @example 1396/08/01 22:45 | 22:45
                 */
                max: '1396/12/29 23:00',

                /**
                 * Editable input or just readonly
                 * @type Boolean
                 * @default False
                 * @if false, the picker will shown on input focus
                 * @if true, the picker will shown on label click
                 * @note if use  <... :editable="true"> with <... :element="...">
                 *     then you have to control the <... :show="true or false">
                 */
                editable: false,

                /**
                 * The specified input element ID
                 * @type String
                 * @default Undefined
                 * @desc Sometimes you don't want to use picker default input,
                 * so you can use our own input element with "id" attribute
                 * and use  <... element="the_id_of_input">
                 */
                element: 'my-input-element-id',

                /**
                 * The form input name when not using {element}
                 * @type String
                 * @default Undefined
                 */
                name: 'input_name',

                /**
                 * The form input className when not using {element}
                 * @type String
                 * @default "form-control"
                 */
                inputClass: 'form-control',

                /**
                 * The form input placeholder when not using {element}
                 * @type String
                 * @default Null
                 */
                placeholder: 'Select a date ...',

                /**
                 * The name of hidden input element
                 * @type String
                 * @default Null
                 * @if empty, the hidden input will not be created
                 */
                altName: 'hidden_input_name',

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
                altFormat: 'YYYY-MM-DD HH:mm:ss [GMT]ZZ',

                /**
                 * Show or hide the picker
                 * @type Boolean
                 * @default False
                 */
                show: false,

                /**
                 * Primary color of picker
                 * @type String
                 */
                color: '#417df4',

                /**
                 * Auto submit and hide picker when date selected
                 * @type Boolean
                 * @default False
                 */
                autoSubmit: false,

                /**
                 * Auto submit when clicking the wrapper
                 * @type Boolean
                 * @default false
                 * @version 1.0.6
                 */
                wrapperSubmit: false,

                /**
                 * Place to append picker
                 * @type String query selector
                 * @default null
                 * @desc If you want to append picker to another container like 'body',
                 * pass the container as append-to="body",  append-to="#app",  append-to="#my-container"
                 * @example 'body', '.main-container', '#app' ...
                 * @version 1.1.1
                 */
                appendTo: 'body',


                /**
                 * Disable or enable the datepicker
                 * @type Boolean
                 * @default false
                 * @version 1.1.4
                 */
                disabled: false,

                /**
                 * Disabling
                 * @type Array, String, Function, RegExp
                 * @default undefined
                 * @desc disable some dates
                 * @example ['1397/02/02', '1390/10/10'] - "1397/05/20" - /1397\/05\/(.*)/ ...
                 * @version 1.1.4
                 */
                disable: '1397/02/02',

                /**
                 * Label for display
                 * @type String
                 * @version 1.1.4
                 */
                label: 'Date',

                /**
                 * Highlight items
                 * @type Function
                 * @desc This prop accepts only function that return an object of attributes.
                 * @version 1.1.5
                 */
                highlight: () => ({ style: {'color: green'} })
            &rbrace;
        </highlight-code>
    </div>
</template>