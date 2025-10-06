import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  base: '/yo/',
  title: 'cv',
  description: 'My first VuePress Site',

  theme: defaultTheme({
     logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',


    navbar: [ { text: "Home", link: "/" },
      { text: "Resume", link: "/Resume" }, 
      { text: "projects", link:"/project"},
],
  }),

  bundler: viteBundler(),
})
