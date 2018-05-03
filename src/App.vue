<template>
    <div id="app" class="container" style="padding-top: 50px">

        <h1 class="text-center" style="margin-bottom: 50px">VUE PERSIAN DATE TIME PICKER</h1>

        <!--============ Installation ===========-->
        <install-docs></install-docs>


        <!--============ Demo ===========-->
        <hr>
        <h1>DEMO</h1>

        <!--===== Date Picker =====-->
        <simple-date></simple-date>

        <simple-format></simple-format>

        <display-format></display-format>

        <min-and-max></min-and-max>

        <with-value></with-value>

        <initial-value></initial-value>

        <different-input-an-output></different-input-an-output>

        <view-prop></view-prop>

        <input-settings></input-settings>

        <editable-input></editable-input>

        <custom-input></custom-input>

        <custom-input-and-editable></custom-input-and-editable>

        <alt-field></alt-field>

        <auto-submit></auto-submit>

        <wrapper-submit></wrapper-submit>

        <picker-color></picker-color>

        <append-to></append-to>


        <!--===== DateTime Picker =====-->
        <h1 class="text-center hr">Datetime Picker</h1>

        <simple-datetime></simple-datetime>

        <datetime-min-and-max></datetime-min-and-max>


        <!--===== Time Picker =====-->
        <h1 class="text-center hr">Time Picker</h1>

        <simple-time></simple-time>

        <time-min-and-max></time-min-and-max>

        <!--============ Events ===========-->
        <h1 class="text-center hr">Events</h1>
        <events-docs></events-docs>


        <!--============ Props ===========-->
        <h1 class="hr">Props</h1>

        <props-docs></props-docs>


    </div>
</template>

<script>

    import InstallDocs from './components/InstallDocs.vue';
    import SimpleDate from './components/examples/SimpleDate.vue';
    import SimpleFormat from './components/examples/SimpleFormat.vue';
    import MinAndMax from './components/examples/MinAndMax.vue';
    import WithValue from './components/examples/WithValue.vue';
    import DifferentInputAnOutput from './components/examples/DifferentInputAnOutput.vue';
    import ViewProp from './components/examples/ViewProp.vue';
    import EditableInput from './components/examples/EditableInput.vue';
    import CustomInput from './components/examples/CustomInput.vue';
    import CustomInputAndEditable from './components/examples/CustomInputAndEditable.vue';
    import InputSettings from './components/examples/InputSettings.vue';
    import AltField from './components/examples/AltField.vue';
    import AutoSubmit from './components/examples/AutoSubmit.vue';
    import WrapperSubmit from './components/examples/WrapperSubmit.vue';
    import PickerColor from './components/examples/PickerColor.vue';
    import SimpleDatetime from './components/examples/SimpleDatetime.vue';
    import DatetimeMinAndMax from './components/examples/DatetimeMinAndMax.vue';
    import SimpleTime from './components/examples/SimpleTime.vue';
    import TimeMinAndMax from './components/examples/TimeMinAndMax.vue';
    import PropsDocs from './components/PropsDocs.vue';
    import EventsDocs from './components/EventsDocs.vue';
    import InitialValue from './components/examples/InitialValue.vue';
    import DisplayFormat from './components/examples/DisplayFormat.vue';
    import AppendTo from './components/examples/AppendTo.vue'

    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {},
        components: {
            InstallDocs,
            SimpleDate,
            SimpleFormat,
            MinAndMax,
            WithValue,
            DifferentInputAnOutput,
            ViewProp,
            EditableInput,
            CustomInput,
            CustomInputAndEditable,
            InputSettings,
            AltField,
            AutoSubmit,
            WrapperSubmit,
            PickerColor,
            SimpleDatetime,
            DatetimeMinAndMax,
            SimpleTime,
            TimeMinAndMax,
            PropsDocs,
            EventsDocs,
            InitialValue,
            DisplayFormat,
            AppendTo,
        },
    }
</script>

<style lang="scss">

    *{
        box-sizing: border-box;
    }

    html,body{
        font-family: sans-serif;
        font-size: 12px;
        font-weight: 400;
        background-color: #eeeeee;
    }

    code{
        direction: ltr;
        text-align: left;
        padding: 0;
        &:not(.inline){
            display: block;
            &:not(:empty){
                padding: 10px 15px;
                &.code{
                    margin-bottom: 15px;
                    display: inline-block;
                }
            }
        }
    }

    .p-datetime-picker-wrapper, input{
        font-family: IRANSans, Tahoma, sans-serif;
        font-size: 12px;
    }

    .p-datetime-picker-input-group{
        max-width: 250px;
    }

    .card{
        margin-bottom: 30px;
        box-shadow: 0 0 15px 0 rgba(0,0,0, 0.21);
    }

    #app{
        max-width: 1366px;
        margin: 0 auto;
    }

    hr{
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .hr{
        margin-top: 30px;
        margin-bottom: 30px;
        padding-top: 15px;
        padding-bottom: 15px;
        border-top: solid 1px #ddd;
        border-bottom: solid 1px #ddd;
    }

    .card-title{
        text-align: center;
    }

    input.is-editable{
        direction: ltr;
        text-align: left;
    }
</style>
