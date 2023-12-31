import { defineConfig } from 'vitepress'
import { sidebar } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UType",
  description: "Collection of TS Utility Types",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Get Started', link: '/guide/' },
        ]
      },
      { text: 'Utility Types', link: '/types/mutable' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wzc520pyfm/utype' }
    ]
  }
})
