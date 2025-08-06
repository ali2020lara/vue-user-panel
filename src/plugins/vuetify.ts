// src/plugins/vuetify.ts
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { darkTheme, lightTheme } from './vuetifyTheme'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    // defaultTheme: 'dark',
    rtl: true,
    themes: {
        light: lightTheme,
        dark: darkTheme,
    }
  },
})

export default vuetify



// // src/plugins/vuetify.js
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import { aliases, mdi } from 'vuetify/iconsets/mdi'

// export default createVuetify({
//   icons: {
//     defaultSet: 'mdi',
//     aliases,
//     sets: {
//       mdi,
//     },
//   },
//   theme: {
//     defaultTheme: 'light',
//   },
// })
