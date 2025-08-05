<template>
    <v-navigation-drawer class="pa-7" permanent color="whiteBg" :width="256">
        <v-list-item prepend-icon="mdi-view-dashboard" link to="/dashboard" active-class="active-item"
            class=" rounded-lg" title="Dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-format-list-checks" link to="/todos" active-class="active-item"
            class="rounded-lg" title="Todos"></v-list-item>
        <v-list-item prepend-icon="mdi-weather-partly-cloudy" link to="/weather" active-class="active-item"
            class=" rounded-lg" title="Weather"></v-list-item>
        <v-list-item prepend-icon="mdi-account" link to="/profile" active-class="active-item" class=" rounded-lg"
            title="Profile"></v-list-item>


        <template v-slot:append>
            <div class="d-flex align-center">
                <v-btn prepend-icon="mdi-white-balance-sunny" @click="setTheme" variant="text"
                    :active="themeMode === 'light'" width="98px" height="36px">
                    Light
                </v-btn>
                <v-btn prepend-icon="mdi-moon-waning-crescent" @click="setTheme" :active="themeMode === 'dark'"
                    variant="text" width="98px" height="36px">
                    Dark
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const themeMode = ref<'light' | 'dark'>('light')
const setTheme = (mode: 'light' | 'dark') => {
    themeMode.value = mode
}
</script>

<style lang="scss">
.active-item {
    background-color: rgb(var(--v-theme-primary)) !important;
    border-radius: 10px;
    box-shadow: 4px 4px 32px 0px #675AFF12;
    color: rgb(var(--v-theme-white)) !important;
}
</style>