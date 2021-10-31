const { description } = require('../../package')

module.exports = {
  base: '/vue-persian-datetime-picker/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue persian datetime picker',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#417df4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Examples',
        link: '/guide/formatting.html'
      },
      {
        text: 'Github',
        link: 'https://github.com/talkhabi/vue-persian-datetime-picker'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'installation',
            'examples',
            'recommend-config',
          ]
        },
        {
          title: 'Examples',
          collapsable: true,
          children: [
            'formatting',
            'min-max',
            'initial-value',
            'different-input-format',
            'view',
            'simple-mode',
            'popover',
            'range',
            'multiple',
            'editable',
            'custom-input',
            'input-settings',
            'auto-submit',
            'theme',
            'append-to',
            'disabling',
            'label',
            'highlight',
            'localization',
            'timezone',
            'datetime-picker',
            'time-picker',
            'use-router',
          ]
        },
        {
          title: 'Slots - Events',
          collapsable: true,
          children: [
            'slots',
            'events',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
