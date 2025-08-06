<template>
  <v-app>
            <v-app-bar app color="whiteBg" dark>
          <v-toolbar-title>My App</v-toolbar-title>
        </v-app-bar>
    <Aside></Aside>
    <v-main>
      <v-container class="py-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Aside from '@/components/Aside/aside.vue';

// نیازی به کد خاصی نیست
</script>


<!-- <template>
    <v-main>
        <v-container>panel
        </v-container>
    </v-main>
</template> -->

<!-- <script setup lang="ts">
</script>

<style></style> -->