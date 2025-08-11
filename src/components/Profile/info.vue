<template>
    <v-text-field v-model="username" label="name" outlined clearable></v-text-field>
</template>

<script setup>
import { useUsername } from '@/composables/useUsername'

const { username } = useUsername()
</script>

<style></style>