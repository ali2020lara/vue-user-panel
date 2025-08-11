<template>
  <div class="section-dashboard">
    <div class="section-dashboard__header">
      <div class="card-img">
        <img src="/images/header setting.svg" />
      </div>
    </div>
    <VContainer>
      <VRow>
        <VCol cols="12" lg="9" md="9" class="mb-sm-12">
          <div class="section-dashboard__body">

            <v-card width="100%">
              <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">{{ t('user_info') }}</v-tab>
                <v-tab value="two">{{ t('theme') }}</v-tab>
                <v-tab value="three">{{ t('language') }}</v-tab>
              </v-tabs>

              <v-card-text>
                <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="one">
                    <info />
                  </v-tabs-window-item>
                  <v-tabs-window-item value="two">
                    <theme />
                  </v-tabs-window-item>
                  <v-tabs-window-item value="three">

                    <v-btn @click="toggleLocale">
                      {{ locale === 'fa' ? 'English' : 'فارسی' }}
                    </v-btn>

                  </v-tabs-window-item>
                </v-tabs-window>
              </v-card-text>
            </v-card>
          </div>
        </VCol>
        <VCol cols="12" lg="3" md="3" :class="{'mt-5': $vuetify.display.mobile }" >
          <div class="card-avatar">
            <div class="card-avatar__item">
              <v-img :width="180" :height="180" aspect-ratio="16/9" cover src="/images/user.svg"></v-img>
            </div>
          </div>
          <div class="card-info-user">
            <h2>{{ username }}</h2>
            <span>Front end</span>
            <div class="d-flex ga-3">
              <v-btn icon="mdi-instagram" variant="outlined"></v-btn>
              <v-btn icon="mdi-linkedin" variant="outlined"></v-btn>
              <v-btn icon="mdi-facebook" variant="outlined"></v-btn>
            </div>
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>
<script setup lang="ts">
import { useUsername } from '@/composables/useUsername'
import Info from '@/components/Profile/info.vue'
import Theme from '@/components/Profile/theme.vue'




import { ref, onMounted } from 'vue'
import { useLocale as useVuetifyLocale } from 'vuetify'

import { useI18n } from 'vue-i18n'

const vuetifyLocale = useVuetifyLocale()

const tab = ref('one')
const { username } = useUsername()



const { t, locale } = useI18n()

function toggleLocale() {
  const next = locale.value === 'fa' ? 'en' : 'fa'

  locale.value = next
  localStorage.setItem('locale', next)
  vuetifyLocale.current.value = next

  // 3. update document direction & lang (برای اطمینان کامل)
  document.documentElement.setAttribute('lang', next)
  document.documentElement.setAttribute('dir', next === 'fa' ? 'rtl' : 'ltr')

  // 4. بعضی وقتا لازم است کلاس v-locale--is-rtl رو دستی هم بزنیم (fallback)
  if (next === 'fa') {
    document.documentElement.classList.add('v-locale--is-rtl')
    document.documentElement.classList.remove('v-locale--is-ltr')
  } else {
    document.documentElement.classList.remove('v-locale--is-rtl')
    document.documentElement.classList.add('v-locale--is-ltr')
  }
}

onMounted(() => {
  // sync localStorage → document attrs
  document.documentElement.setAttribute('lang', locale.value)
  document.documentElement.setAttribute('dir', locale.value === 'fa' ? 'rtl' : 'ltr')

  // sync theme reactive flag
  // isDark.value = theme.global.name.value === 'dark'
})
//1 function toggleLocale() {
//   if (locale.value === 'fa') {
//     locale.value = 'en'
//     vuetify.rtl = false
//   } else {
//     locale.value = 'fa'
//     vuetify.rtl = true
//   }
//   localStorage.setItem('locale', locale.value)
// }







// function toggleLocale() {
//   locale.value = locale.value === 'fa' ? 'en' : 'fa'
//   localStorage.setItem('locale', locale.value)
// }
</script>

<style lang="scss">
body {
  background-color: rgb(var(--v-theme-white)) !important;
}


.section-dashboard {
  .card-avatar {
    background-color: rgb(var(--v-theme-whiteBg));
    position: relative;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 100%;
    height: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    .card-avatar__item {
      top: -41px;
      position: absolute;
      background: rgb(var(--v-theme-whiteBg));
      width: 180px;
      height: 180px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 8px solid rgb(var(--v-theme-primary));
    }
  }

  .section-dashboard__header {
    background-color: rgb(var(--v-theme-whiteBg));
    height: 154px;
    border-radius: 10px;
    position: relative;

    .card-img {
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      top: 0;
      overflow: hidden;
      border-radius: 10px;
      background: rgb(var(--v-theme-whiteBg)) !important;

      svg {
        stroke: rgb(var(--v-theme-blue));
      }
    }

    .card-welcome {
      .card-title {
        h1 {
          font-size: 56px;
          font-weight: 600;
        }
      }
    }
  }

  .section-dashboard__body {
    gap: 10px;
    border-radius: 10px;
    display: flex;
    background-color: rgb(var(--v-theme-whiteBg));

    .v-card {
      box-shadow: none;
    }

    .section-dashboard__body-items {
      background-color: rgb(var(--v-theme-white));
      width: 100%;
      border-radius: 10px;
      position: relative;

      .section-dashboard__body-item {
        display: flex;
        align-items: center;
        gap: 30px;

        .section-dashboard__body-item-img {}

        .section-dashboard__body-item-title {}
      }
    }
  }

  .card-info-user {
    gap: 12px;
    background-color: rgb(var(--v-theme-whiteBg));
    padding: 60px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
</style>