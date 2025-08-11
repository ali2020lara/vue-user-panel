// src/plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { darkTheme, lightTheme } from './vuetifyTheme'
import { fa, en } from 'vuetify/locale'

const savedTheme = localStorage.getItem('theme') || 'light'
const savedLocale = localStorage.getItem('locale') || 'fa'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: savedTheme,
    locale: {
      locale: savedLocale,
      messages: { fa, en },
    },
    rtl: { fa: true },
    themes: {
      light: lightTheme,
      dark: darkTheme,
    }
  },
})

export default vuetify;