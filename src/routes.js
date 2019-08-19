import Header from './components/includes/Header.vue'
import Sidebar from './components/includes/Sidebar.vue'
import InstallDocs from './components/InstallDocs.vue'
import SimpleDate from './components/examples/SimpleDate.vue'
import SimpleFormat from './components/examples/SimpleFormat.vue'
import MinAndMax from './components/examples/MinAndMax.vue'
import WithValue from './components/examples/WithValue.vue'
import DifferentInputAnOutput from './components/examples/DifferentInputAnOutput.vue'
import ViewProp from './components/examples/ViewProp.vue'
import EditableInput from './components/examples/EditableInput.vue'
import CustomInput from './components/examples/CustomInput.vue'
import CustomInputAndEditable from './components/examples/CustomInputAndEditable.vue'
import InputSettings from './components/examples/InputSettings.vue'
import AltField from './components/examples/AltField.vue'
import AutoSubmit from './components/examples/AutoSubmit.vue'
import PickerColor from './components/examples/PickerColor.vue'
import SimpleDatetime from './components/examples/SimpleDatetime.vue'
import SimpleTime from './components/examples/SimpleTime.vue'
import AppendTo from './components/examples/AppendTo.vue'
import DisableDates from './components/examples/DisableDates.vue'
import WithLabel from './components/examples/WithLabel.vue'
import Highlight from './components/examples/Highlight.vue'
import Gregorian from './components/examples/Gregorian.vue'
import Timezone from './components/examples/Timezone'
import PropsDocs from './components/PropsDocs.vue'
import EventsDocs from './components/EventsDocs.vue'

const cmp = component => ({
  default: component,
  header: Header,
  sidebar: Sidebar
})

export const routes = [
  {
    path: '/',
    name: 'home',
    meta: { pageTitle: 'Home' },
    components: cmp(SimpleDate)
  },
  {
    path: '/installation',
    name: 'installation',
    meta: { pageTitle: 'Installation' },
    components: cmp(InstallDocs)
  },
  {
    path: '/formatting',
    name: 'formatting',
    meta: { pageTitle: 'Formatting' },
    components: cmp(SimpleFormat)
  },
  {
    path: '/min-max',
    name: 'min-max',
    meta: { pageTitle: 'Min and Max' },
    components: cmp(MinAndMax)
  },
  {
    path: '/initial-value',
    name: 'initial-value',
    meta: { pageTitle: 'Initial value' },
    components: cmp(WithValue)
  },
  {
    path: '/different-input-output',
    name: 'different-input-output',
    meta: { pageTitle: 'Different input-output' },
    components: cmp(DifferentInputAnOutput)
  },
  {
    path: '/view',
    name: 'view',
    meta: { pageTitle: 'View at startup' },
    components: cmp(ViewProp)
  },
  {
    path: '/editable',
    name: 'editable',
    meta: { pageTitle: 'Editable' },
    components: cmp(EditableInput)
  },
  {
    path: '/custom-input',
    name: 'custom-input',
    meta: { pageTitle: 'Custom input' },
    components: cmp(CustomInput)
  },
  {
    path: '/custom-editable-input',
    name: 'custom-editable-input',
    meta: { pageTitle: 'Custom editable input' },
    components: cmp(CustomInputAndEditable)
  },
  {
    path: '/input-settings',
    name: 'input-settings',
    meta: { pageTitle: 'Input settings' },
    components: cmp(InputSettings)
  },
  {
    path: '/alt-field',
    name: 'alt-field',
    meta: { pageTitle: 'Alt field' },
    components: cmp(AltField)
  },
  {
    path: '/auto-submit',
    name: 'auto-submit',
    meta: { pageTitle: 'Auto submit' },
    components: cmp(AutoSubmit)
  },
  {
    path: '/theme',
    name: 'theme',
    meta: { pageTitle: 'Theme' },
    components: cmp(PickerColor)
  },
  {
    path: '/append-to',
    name: 'append-to',
    meta: { pageTitle: 'Append to container' },
    components: cmp(AppendTo)
  },
  {
    path: '/disabling',
    name: 'disabling',
    meta: { pageTitle: 'Disabling' },
    components: cmp(DisableDates)
  },
  {
    path: '/label',
    name: 'label',
    meta: { pageTitle: 'Picker label' },
    components: cmp(WithLabel)
  },
  {
    path: '/highlight',
    name: 'highlight',
    meta: { pageTitle: 'Highlighting' },
    components: cmp(Highlight)
  },
  {
    path: '/locale',
    name: 'locale',
    meta: { pageTitle: 'Localization' },
    components: cmp(Gregorian)
  },
  {
    path: '/timezone',
    name: 'timezone',
    meta: { pageTitle: 'Timezone' },
    components: cmp(Timezone)
  },
  {
    path: '/datetime-picker',
    name: 'datetime-picker',
    meta: { pageTitle: 'Datetime picker' },
    components: cmp(SimpleDatetime)
  },
  {
    path: '/time-picker',
    name: 'time-picker',
    meta: { pageTitle: 'Time picker' },
    components: cmp(SimpleTime)
  },
  {
    path: '/events',
    name: 'events',
    meta: { pageTitle: 'Events' },
    components: cmp(EventsDocs)
  },
  {
    path: '/props',
    name: 'props',
    meta: { pageTitle: 'Props' },
    components: cmp(PropsDocs)
  },
  {
    path: '*',
    name: '404',
    meta: { pageTitle: 'Home', showInMenu: false },
    components: cmp(SimpleDate)
  }
]
