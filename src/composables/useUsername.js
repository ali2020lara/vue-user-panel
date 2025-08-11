import { ref, watch } from 'vue'

const username = ref(localStorage.getItem('username') || '')

watch(username, (newVal) => {
  localStorage.setItem('username', newVal)
})

export function useUsername() {
  return {
    username
  }
}
