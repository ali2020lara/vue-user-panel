import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { i18n } from './plugins/i18n'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(vuetify)
app.mount('#app')