<template>
    <v-navigation-drawer class="pa-7" permanent color="whiteBg" :width="256">
        <Menu />
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import Menu from './menu.vue';
</script>

<style lang="scss">
.active-item {
    background-color: rgb(var(--v-theme-primary)) !important;
    border-radius: 10px;
    box-shadow: 4px 4px 32px 0px #675AFF12;
    color: rgb(var(--v-theme-white)) !important;
}
</style>