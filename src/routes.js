import { createRouter, createWebHistory } from 'vue-router'
import Header from './components/includes/Header'
import Sidebar from './components/includes/Sidebar'
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
import Localization from './components/examples/Localization.vue'
import Timezone from './components/examples/Timezone'
import Range from './components/examples/Range'
import Multiple from './components/examples/Multiple'
import Popover from './components/examples/Popover'
import PropsDocs from './components/PropsDocs.vue'
import EventsDocs from './components/EventsDocs.vue'
import Slots from './components/Slots.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { pageTitle: 'Home' },
    components: {
      default: SimpleDate,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/installation',
    name: 'installation',
    meta: { pageTitle: 'Installation' },
    components: {
      default: InstallDocs,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/formatting',
    name: 'formatting',
    meta: { pageTitle: 'Formatting' },
    components: {
      default: SimpleFormat,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/min-max',
    name: 'min-max',
    meta: { pageTitle: 'Min and Max' },
    components: {
      default: MinAndMax,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/initial-value',
    name: 'initial-value',
    meta: { pageTitle: 'Initial value' },
    components: {
      default: WithValue,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/different-input-output',
    name: 'different-input-output',
    meta: { pageTitle: 'Different input-output' },
    components: {
      default: DifferentInputAnOutput,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/view',
    name: 'view',
    meta: { pageTitle: 'View at startup' },
    components: {
      default: ViewProp,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/range',
    name: 'range',
    meta: { pageTitle: 'Range Select' },
    components: {
      default: Range,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/multiple',
    name: 'multiple',
    meta: { pageTitle: 'Multiple Select' },
    components: {
      default: Multiple,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/editable',
    name: 'editable',
    meta: { pageTitle: 'Editable' },
    components: {
      default: EditableInput,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/custom-input',
    name: 'custom-input',
    meta: { pageTitle: 'Custom input' },
    components: {
      default: CustomInput,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/custom-editable-input',
    name: 'custom-editable-input',
    meta: { pageTitle: 'Custom editable input' },
    components: {
      default: CustomInputAndEditable,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/input-settings',
    name: 'input-settings',
    meta: { pageTitle: 'Input settings' },
    components: {
      default: InputSettings,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/alt-field',
    name: 'alt-field',
    meta: { pageTitle: 'Alt field' },
    components: {
      default: AltField,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/auto-submit',
    name: 'auto-submit',
    meta: { pageTitle: 'Auto submit' },
    components: {
      default: AutoSubmit,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/theme',
    name: 'theme',
    meta: { pageTitle: 'Theme' },
    components: {
      default: PickerColor,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/append-to',
    name: 'append-to',
    meta: { pageTitle: 'Append to container' },
    components: {
      default: AppendTo,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/disabling',
    name: 'disabling',
    meta: { pageTitle: 'Disabling' },
    components: {
      default: DisableDates,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/label',
    name: 'label',
    meta: { pageTitle: 'Picker label' },
    components: {
      default: WithLabel,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/highlight',
    name: 'highlight',
    meta: { pageTitle: 'Highlighting' },
    components: {
      default: Highlight,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/locale',
    name: 'locale',
    meta: { pageTitle: 'Localization' },
    components: {
      default: Localization,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/timezone',
    name: 'timezone',
    meta: { pageTitle: 'Timezone' },
    components: {
      default: Timezone,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/datetime-picker',
    name: 'datetime-picker',
    meta: { pageTitle: 'Datetime picker' },
    components: {
      default: SimpleDatetime,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/time-picker',
    name: 'time-picker',
    meta: { pageTitle: 'Time picker' },
    components: {
      default: SimpleTime,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/popover',
    name: 'popover',
    meta: { pageTitle: 'Popover' },
    components: {
      default: Popover,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/slots',
    name: 'slots',
    meta: { pageTitle: 'Slots' },
    components: {
      default: Slots,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/events',
    name: 'events',
    meta: { pageTitle: 'Events' },
    components: {
      default: EventsDocs,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/props',
    name: 'props',
    meta: { pageTitle: 'Props' },
    components: {
      default: PropsDocs,
      header: Header,
      sidebar: Sidebar
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: { pageTitle: 'Home', showInMenu: false },
    components: {
      default: SimpleDate,
      header: Header,
      sidebar: Sidebar
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.pageTitle) {
    document.title = to.meta.pageTitle + ' | ' + ' vue persian datetime picker'
  }
  next()
})

export { router, routes }
