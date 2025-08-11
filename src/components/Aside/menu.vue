<template>
          <v-list-item prepend-icon="mdi-view-dashboard" link to="/dashboard" active-class="active-item"
            class=" rounded-lg">{{ t('dashboard') }}</v-list-item>
        <v-list-item prepend-icon="mdi-format-list-checks" link to="/todos" active-class="active-item"
            class="rounded-lg">{{ t('todos') }}</v-list-item>
        <v-list-item prepend-icon="mdi-weather-partly-cloudy" link to="/weather" active-class="active-item"
            class=" rounded-lg" >{{ t('weather') }}</v-list-item>
        <v-list-item prepend-icon="mdi-account" link to="/profile" active-class="active-item" class=" rounded-lg"
            >{{ t('profile') }}</v-list-item>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style>

</style>