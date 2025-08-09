<template>
  <v-app>
    <v-app-bar app color="whiteBg" dark>
      <v-toolbar-title>{{ routeName.name }}</v-toolbar-title>
    </v-app-bar>
    <Aside></Aside>
    <v-main>
      <v-container class="py-4">
        <div>
                  <VContainer>
            <VRow>
              <VCol cols="12">

                <router-view />
              </VCol>
            </VRow>
          </VContainer>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Aside from '@/components/Aside/aside.vue';
import { useRoute } from 'vue-router';
const routeName = useRoute()
</script>