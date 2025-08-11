<template>
    <div>
        <span>{{ t('change_theme') }}</span>
        <v-btn :icon="theme.global.name.value === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            @click="toggleTheme"></v-btn>
    </div>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const theme = useTheme()
function toggleTheme() {
    theme.global.name.value =
        theme.global.name.value === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme.global.name.value)
}
</script>

<style></style>