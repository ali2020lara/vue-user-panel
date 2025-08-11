<template>
    <div class="section-dashboard">
        <div class="section-dashboard__header">
            <div class="card-img">
              <img src="/images/header setting.svg" />
            </div>
        </div>
        <VContainer>
            <VRow>
                <VCol cols="12" lg="9" md="9"  class="mb-sm-12">
                    <div class="section-dashboard__body">
                        <div class="section-dashboard__body-items">
                            <div class="section-dashboard__body-item">
                                <div class="section-dashboard__body-item-img">
                                    <img :width="180" :height="180" aspect-ratio="16/9" cover :src="greet.icon"></img>
                                </div>
                                <div class="section-dashboard__body-item-title">
                                    <h1>{{greet.title}} {{ username }}</h1>
                                </div>
                            </div>
                            <Clock @greeting="greeting" />
                        </div>
                    </div>
                </VCol>
                <VCol cols="12" lg="3" md="3">
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
import { ref } from 'vue';
import Clock from '../Clock/clock.vue';

let greet = ref('');

function greeting(params: string) {
  console.log('greetinggreeting', params);
  greet.value = params;
}
import { useUsername } from '@/composables/useUsername'

const { username } = useUsername()
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

        .section-dashboard__body-items {
            background-color: rgb(var(--v-theme-whiteBg)) !important;
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