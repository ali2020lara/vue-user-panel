<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item :title="username"></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <Menu />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="whiteBg" dark v-if="$vuetify.display.mobile">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span>{{ t(routeName.name) }}</span>
    </v-app-bar>
    <v-app-bar v-else app color="whiteBg" dark>
      <v-toolbar-title>{{ t(routeName.name) }}</v-toolbar-title>
    </v-app-bar>
    <Aside v-if="$vuetify.display.lgAndUp"></Aside>
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
import { useI18n } from 'vue-i18n'
import { useUsername } from '@/composables/useUsername'

const { username } = useUsername()
const { t } = useI18n()
const routeName = useRoute()

import { ref, watch } from 'vue'
import Menu from '@/components/Aside/menu.vue';
const drawer = ref(false)
const group = ref(null)

watch(group, () => {
  drawer.value = false
})
</script>