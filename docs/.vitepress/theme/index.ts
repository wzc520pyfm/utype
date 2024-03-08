import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from 'vitepress-plugin-twoslash/client'
import type { EnhanceAppContext } from 'vitepress'

import TypeInfo from './components/TypeInfo.vue'

import 'vitepress-plugin-twoslash/style.css'
import 'virtual:uno.css'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue as any)
    // register global components
    app.component('TypeInfo', TypeInfo)
  }
} satisfies Theme