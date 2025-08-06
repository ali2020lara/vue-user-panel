import Dashboard from '@/components/Dashboard/dashboard.vue'
import Profile from '@/components/Profile/profile.vue'
import Todos from '@/components/Todos/todos.vue'
import Weather from '@/components/Weather/weather.vue'
import Panel from '@/layouts/panel.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
        }
      ],
    },
  ],
})

export default router
