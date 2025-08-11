import { createI18n } from 'vue-i18n'

const messages = {
  fa: {
    hello: 'سلام',
    user_info: 'اطلاعات کاربر',
    theme: 'تم',
    language: 'زبان',
    change_theme: 'تغییر تم',
    dark: 'تاریک',
    light: 'روشن',
    profile: 'پروفایل',
    dashboard: 'داشبورد',
    weather: 'آب و هوا',
    todos: 'کارها',
    goodMorning: 'صبح بخیر',
    goodAfternoon: 'ظهر بخیر',
    goodEvening: 'عصر بخیر',
    goodNight: 'شب بخیر',
  },
  en: {
    hello: 'Hello',
    user_info: 'User Info',
    theme: 'Theme',
    language: 'Language',
    change_theme: 'Change Theme',
    dark: 'Dark',
    light: 'Light',
    profile: 'Profile',
    dashboard: 'Dashboard',
    weather: 'Weather',
    todos: 'Todos',
    goodMorning: 'Good Morning',
    goodAfternoon: 'Good afternoon',
    goodEvening: 'Good evening',
    goodNight: 'Good night',

  }
}

const savedLocale = localStorage.getItem('locale') || 'fa'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages
})
