<template>
    <div class="clock-wrap">
        <div class="hour-wrap">
            <div class="digit-top">
                <div class="front">{{ time.h }}</div>
                <div class="back">{{ time.h }}</div>
            </div>
            <div class="digit-bottom">
                <div class="front">{{ time.h }}<div class="meridiem">am</div>
                </div>
            </div>
        </div>
        <div class="min-wrap">
            <div class="digit-top">
                <div class="front">{{ time.m }}</div>
                <div class="back">{{ time.m }}</div>
            </div>
            <div class="digit-bottom">
                <div class="front">{{ time.m }}</div>
            </div>
        </div>

        <div class="min-wrap">
            <div class="digit-top">
                <div class="front">{{ time.s }}</div>
                <div class="back">{{ time.s }}</div>
            </div>
            <div class="digit-bottom">
                <div class="front">{{ time.s }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted, onUnmounted, watch } from 'vue';
const time = reactive<{ h: string; m: string; s: string }>({
    h: '00',
    m: '00',
    s: '00',
});
const greeting = computed(() => {
    const hour = Number(time.h);
    if (hour >= 5 && hour < 12) {
        return 'Good Morning ';
    } else if (hour >= 12 && hour < 17) {
        return 'good afternoon';
    } else if (hour >= 17 && hour < 21) {
        return 'good evening';
    } else {
        return 'good night';
    }
});
const emit = defineEmits<{
  (e: 'greeting', value: string): void;
}>();

watch(greeting, (newVal) => {
    console.log('sddddddd',newVal);
    
  emit('greeting', newVal); // همینجا greeting رو بفرست
});

let timer: ReturnType<typeof setInterval> | null = null;

function updateClock(): void {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    time.h = h < 10 ? `0${h}` : `${h}`;
    time.m = m < 10 ? `0${m}` : `${m}`;
    time.s = s < 10 ? `0${s}` : `${s}`;
}

onMounted(() => {
    updateClock();
    timer = setInterval(updateClock, 1000);
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
});
</script>

<style lang="scss">
.clock-wrap {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 15px;
    border-radius: 12px;

    .hour-wrap,
    .min-wrap {
        width: 100px;
        height: 100px;
        position: relative;
    }

    .min-wrap {
        margin-left: 5px;
    }

    .digit-top,
    .digit-bottom {
        width: 100px;
        height: 64px;
        position: relative;
        overflow: hidden;
        z-index: 10;

        .front,
        .back {
            width: 100px;
            height: 64px;
            position: absolute;
            overflow: hidden;
            color: #fff;
            text-align: center;
            font-size: 73px;
            text-shadow: 1px 1px 1px #000;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.6);
            background-image: linear-gradient(to top, #111 0%, #222 100%);
            transform-style: preserve-3d;
            perspective: 200px;
            transition: transform 800ms, z-index 800ms;
            backface-visibility: hidden;
        }

        &.flip {
            .front {
                transform: rotateX(180deg);
                z-index: 20;
            }

            .back {
                transform: rotateX(0deg);
                z-index: 30;
            }
        }
    }

    .digit-top {
        line-height: 133px;
        border-radius: 8px 8px 2px 2px;

        .front {
            z-index: 30;
            border-radius: 5px 5px 0 0;
            transform-origin: 0 99px;
            transform: rotateX(0deg);
        }

        .back {
            z-index: 20;
            top: 100px;
            border-radius: 0 0 5px 5px;
            transform-origin: 0 -1px;
            transform: rotateX(180deg);
        }
    }

    .digit-bottom {
        background-color: #222;
        line-height: 5px;
        border-radius: 2px 2px 8px 8px;
        z-index: 5;

        .front {
            border-radius: 0 0 5px 5px;
        }
    }

    .meridiem {
        font-size: 14px;
        position: absolute;
        left: 15px;
        top: 45px;
    }
}
</style>