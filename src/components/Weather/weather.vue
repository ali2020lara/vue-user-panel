<template>
  <v-container>
    <v-text-field v-model="city" label="city" outlined clearable></v-text-field>

    <v-btn @click="fetchWeather" color="primary" class="mt-2">
      search
    </v-btn>
<div v-if="weather" class="weather">
  <div class="img">
    <img v-if="weather.weathercode >= 1 && weather.weathercode <= 67" src="/images/Moon cloud mid rain.svg" />
    <img v-else-if="weather.weathercode >= 71 && weather.weathercode <= 99" src="/images/Sun cloud angled rain.svg" />
    <!-- <img v-else src="/images/sun.svg" /> -->
    <!-- <img v-else src="/images/sun2.png" /> -->
    <v-icon v-else class="sun">mdi-white-balance-sunny</v-icon>
  </div>
  <div class="items">
    <span class="temperature">{{ weather.temperature }}°C</span>
    <span>{{ weather.windspeed }} km/h</span>
    <span>{{ cityResult }}</span>
  </div>
</div>

  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface WeatherData {
  time: string
  interval: number
  temperature: number
  windspeed: number
  winddirection: number
  is_day: number
  weathercode: number
  description?: string
}

type WeatherDescriptions = Record<number, string>

const city = ref<string>('')
const cityResult = ref<string>('')
const weather = ref<WeatherData | null>(null)

const weatherDescriptions: WeatherDescriptions = {
  0: "☀️ آفتابی",
  1: "🌤 کمی ابری",
  2: "⛅ نیمه‌ابری",
  3: "☁️ ابری",
  45: "🌫 مه",
  48: "🌫 مه یخ‌زده",
  51: "🌦 باران ریز (کم)",
  53: "🌦 باران ریز (متوسط)",
  55: "🌧 باران ریز (زیاد)",
  56: "🌧 باران یخ‌زده (کم)",
  57: "🌧 باران یخ‌زده (زیاد)",
  61: "🌦 بارش باران (کم)",
  63: "🌧 بارش باران (متوسط)",
  65: "🌧 بارش باران (زیاد)",
  66: "🌧 باران یخ‌زده (کم)",
  67: "🌧 باران یخ‌زده (زیاد)",
  71: "❄️ برف (کم)",
  73: "❄️ برف (متوسط)",
  75: "❄️ برف (زیاد)",
  77: "❄️ دانه‌های برف",
  80: "🌦 رگبار باران (کم)",
  81: "🌦 رگبار باران (متوسط)",
  82: "🌧 رگبار باران (زیاد)",
  85: "❄️ رگبار برف (کم)",
  86: "❄️ رگبار برف (زیاد)",
  95: "⛈ رعد و برق",
  96: "⛈ رعد و برق همراه با تگرگ",
  99: "⛈ رعد و برق شدید همراه با تگرگ"
}

async function fetchWeather(): Promise<void> {
  if (!city.value) return

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.value)}&count=1`
    )
    const geoData = await geoRes.json()

    if (!geoData.results || geoData.results.length === 0) {
      alert('شهر پیدا نشد!')
      return
    }

    const { latitude, longitude, name, country } = geoData.results[0]
    cityResult.value = `${name}, ${country}`

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
    const weatherData = await weatherRes.json()
    
    const w = weatherData.current_weather as WeatherData
    weather.value = {
        ...w,
        description: weatherDescriptions[w.weathercode] || "نامشخص"
    }
    console.log('ddddddddddd',weatherData);
  } catch (err) {
    console.error(err)
  }
}

</script>
<style lang="scss">
.weather {
  position: relative;
  width: 386px;
  margin-top: 10px;
  height: 184px;
  left: 0px;
  top: 1px;
  border-radius: 28px 236px 30px 23px;
  background: linear-gradient(90deg, #5936B4 0%, #362A84 103.55%);

  .img {
    position: absolute;
    right: 0;
    .sun {
    font-size: 100px;
    color: yellow;
    }
  }

  .items {
    color: #fff;
    position: absolute;
    left: 20px;
    top: 20px;
    bottom: 20px;
    flex-direction: column;
    display: flex
;
    .temperature {
      font-size: 64px;
    }
  }
}
</style>