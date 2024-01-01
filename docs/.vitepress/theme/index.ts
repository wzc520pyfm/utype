import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import TypeInfo from './components/TypeInfo.vue'

import './styles/custom.css'
import 'virtual:uno.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('TypeInfo', TypeInfo)
  }
} satisfies Theme