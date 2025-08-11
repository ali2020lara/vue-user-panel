import Dashboard from '@/components/Dashboard/dashboard.vue'
import Profile from '@/components/Profile/profile.vue'
import Todos from '@/components/Todos/todos.vue'
import Weather from '@/components/Weather/weather.vue'
import Panel from '@/layouts/panel.vue'
// import { useUserStore } from '@/stores/user.js'
import { createRouter, createWebHistory } from 'vue-router'
import { useUsername } from '@/composables/useUsername'
import UserName from '@/components/Dialog/userName.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Panel,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'todos',
          name: 'todos',
          component: Todos,
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'weather',
          name: 'weather',
          component: Weather
        },
          { path: 'set-name', name: 'SetName', component: UserName }
      ],
    },
  ],
})
router.beforeEach((to, from, next) => {
  const { username } = useUsername()
  if (!username.value && to.name !== 'SetName') {
    next({ name: 'SetName' })
  } else {
    next()
  }
})
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()

//   if (!userStore.name && to.name !== 'name') {
//     next({ name: 'name' }) // اگر اسم نداره، بفرست صفحه وارد کردن نام
//   } else {
//     next()
//   }
// })
export default router
