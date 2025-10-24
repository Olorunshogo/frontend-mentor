<script setup lang="ts">

import { computed, watch, ref, onMounted } from 'vue';
import type { SelectItem, DropdownMenuItem } from '@nuxt/ui';
import type { WeatherData } from '~/types/types';

 useHead({
   htmlAttrs: { lang: 'en' },
   link: [ { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' } ]
 });

 useSeoMeta({
   title: 'Frontend Mentor | Weather App',
   description: 'A sleek and user-friendly weather app that provides real-time weather data for any location. Get accurate forecasts and detailed weather information at your fingertips.',

   ogTitle: 'Frontend Mentor | Weather App',
   ogDescription: 'A beautiful and responsive weather app designed to give you the latest weather updates, forecast details, and much more. Stay informed about your local weather with ease.',
   ogImage: '/images/favicon-32x32.png',
   ogImageAlt: 'Weather App Logo',
   ogUrl: 'https://frontend-mentor-18k6.vercel.app/intermediate/weather-app',

   twitterCard: 'summary_large_image',
   twitterTitle: 'Frontend Mentor | Weather App',
   twitterDescription: 'Stay up-to-date with real-time weather information. Get accurate forecasts and detailed weather reports with our intuitive app.',
   twitterImage: '/images/favicon-32x32.png',

   author: "Olorunshogo Moses BAMTEFA",
   keywords: 'weather app, weather forecast, real-time weather, responsive weather UI, weather updates, frontend mentor challenge, web app',
   robots: 'index, follow'

 });

 // Geolocation and default
 const location: string = "Berlin, Germany";

 // Reactive units state
 const tempUnit = ref<'celsius' | 'fahrenheit'>('celsius');
 const windUnit = ref<'km/h' | 'mph'>('km/h');
 const precUnit = ref<'mm' | 'inch'>('mm');

 // Unit conversion functions
 const convertTemperature = (temp: number, toUnit: 'celsius' | 'fahrenheit'): number => {
   if (toUnit === 'fahrenheit') {
     return (temp * 9/5) + 32;
   }
   return temp;
 };

 const convertWindSpeed = (speed: number, toUnit: 'km/h' | 'mph'): number => {
   if (toUnit === 'mph') {
     return speed * 0.621371;
   }
   return speed;
 };

 const convertPrecipitation = (precip: number, toUnit: 'mm' | 'inch'): number => {
   if (toUnit === 'inch') {
     return precip * 0.0393701;
   }
   return precip;
 };

 // Computed values with unit conversion
 const currentTemp = computed(() => {
   const temp = weatherData.value?.current.temperature_2m ?? 0;
   return convertTemperature(temp, tempUnit.value);
 });

 const currentWindSpeed = computed(() => {
   const speed = weatherData.value?.current.wind_speed_10m ?? 0;
   return convertWindSpeed(speed, windUnit.value);
 });

 const dailyTemps = computed(() => {
   if (!weatherData.value?.daily) return [];
   return weatherData.value.daily.time.map((_, i) => ({
     max: convertTemperature(weatherData.value!.daily.temperature_2m_max?.[i] ?? 0, tempUnit.value),
     min: convertTemperature(weatherData.value!.daily.temperature_2m_min?.[i] ?? 0, tempUnit.value),
     code: weatherData.value!.daily.weather_code?.[i] ?? 0
   }));
 });

 const unitDropdown = computed(() => [
   { label: 'Switch Units', type: 'label' },

   { label: 'Temperature', type: 'label' },
   {
     label: 'Celsius(°C)',
     type: 'checkbox',
     checked: tempUnit.value === 'celsius',
     onUpdateChecked(checked: boolean) {
       if (checked) tempUnit.value = 'celsius';
     },
     onSelect(e: Event) {
       e.preventDefault();
     },
   },
   {
     label: 'Fahrenheit(°F)',
     type: 'checkbox',
     checked: tempUnit.value === 'fahrenheit',
     onUpdateChecked(checked: boolean) {
       if (checked) tempUnit.value = 'fahrenheit';
     }
   },

   { type: 'separator' },
   { label: 'Wind Speed', type: 'label' },
   {
     label: 'km/h',
     type: 'checkbox',
     checked: windUnit.value === 'km/h',
     onUpdateChecked(checked: boolean) {
       if (checked) windUnit.value = 'km/h';
     },
     onSelect(e: Event) {
       e.preventDefault();
     },
   },
   {
     label: 'mph',
     type: 'checkbox',
     checked: windUnit.value === 'mph',
     onUpdateChecked(checked: boolean) {
       if (checked) windUnit.value = 'mph';
     }
   },

   { type: 'separator' },
   { label: 'Precipitation', type: 'label' },
   {
     label: 'Millimetres',
     type: 'checkbox',
     checked: precUnit.value === 'mm',
     onUpdateChecked(checked: boolean) {
       if (checked) precUnit.value = 'mm';
     },
     onSelect(e: Event) {
       e.preventDefault();
     },
   },
   {
     label: 'Inches',
     type: 'checkbox',
     checked: precUnit.value === 'inch',
     onUpdateChecked(checked: boolean) {
       if (checked) precUnit.value = 'inch';
     },
     onSelect(e: Event) {
       e.preventDefault();
     },
   },

 ] satisfies DropdownMenuItem[]);

//  Fetch weather data
 const { data: weatherData, status, refresh, clear } = await useFetch<WeatherData>('/api/weather', {
  server: false,
  immediate: true, // Nuxt will trigger the first fetch automatically
  onResponse({ response }) {
    console.log('✅ Weather API responded:', response._data);
  },
  onResponseError({ error }) {
    console.error('❌ Weather fetch failed:', error);
  },

});

 watch(weatherData, (newVal) => {
   console.log('🌤 Weather data updated: ', newVal);
 });

 // Weather icon mapper
 function getWeatherIcon(code: number): string {
   if (code === 0) return 'clear'
   if (code >= 1 && code <= 3) return 'partly-cloudy'
   if (code >= 45 && code <= 48) return 'fog'
   if (code >= 51 && code <= 67) return 'drizzle'
   if (code >= 71 && code <= 77) return 'snow'
   if (code >= 80 && code <= 82) return 'rain'
   if (code >= 95 && code <= 99) return 'storm'
   return 'cloudy';
 };

// Clear on route change
const route = useRoute();
 watch(() => route.path, (path) => {
   if (path === '/') {
   clear()
   }
 });


// Dynamic week dropdown based on daily forecast & time series
const activeDayIndex = ref<string>('0');

// Day selector for hourly forecast
const selectedDayIndex = ref<number>(0);

const dayOptions = computed(() => {
  if (!weatherData.value?.daily?.time) return [];
  return weatherData.value.daily.time.map((time, index) => ({
    label: new Date(time).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
    value: index
  }));
});

const selectedHourlyForecast = computed(() => {
  if (!weatherData.value?.hourly) return [];
  const start = selectedDayIndex.value * 24;
  const end = start + 24;
  return weatherData.value.hourly.time.slice(start, end).map((time, idx) => ({
    time: new Date(time).toLocaleTimeString("en-US", { hour: "numeric", hour12: true }),
    temp: convertTemperature(weatherData.value!.hourly.temperature_2m[start + idx] ?? 0, tempUnit.value),
    code: weatherData.value!.hourly.weather_code[start + idx] ?? 0
  }));
});

// Date for display
const date = new Date();
const weekdayName = date.toLocaleDateString('en-Us', { weekday: 'short' });
const dayOfMonth = date.getDate();
const monthName = date.toLocaleDateString('en-Us', { month: 'short' });
const year = date.getFullYear();

const showDebug = ref(false);
</script>

<template>
  <div
    class="font-(--font-notosans) bg-linear-to-br from-(--weather-neutral-800) dark:from-(--weather-neutral-900) to-(--weather-neutral-600) dark:to-(--weather-neutral-800)"
  >
    <div
      class="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-8 sm:py-12 w-full max-w-7xl mx-auto h-full"
    >
      <!-- Header: Logo && Unit Bar -->
      <div
        class="relative flex items-center justify-between gap-2 p-2 rounded-xl border-b dark:border-0 border-(--border-gray) w-full max-w-7xl mx-auto"
      >
        <NuxtImg
          src="/images/intermediate/weather-app/weather-logo.svg"
          alt="Logo"
          loading="lazy"
          class="w-fit h-6 lg:h-8"
        />

        <UDropdownMenu
          :items="unitDropdown"
          :content="{ align: 'start' }"
          :ui="{ content: 'w-48' }"
        >
          <UButton
            label="Units"
            color="neutral"
            variant="outline"
            icon="lucide-gear"
            trailing-icon="i-lucide-chevron-down"
          ></UButton>
        </UDropdownMenu>
      </div>

      <div class="flex-1 relative">
        <!-- Loading State -->
        <div
          v-if="status === 'pending'"
          key="loading-state"
          class="flex flex-col items-center justify-center gap-4 w-full h-full"
        >
          <p class="text-(--white)">Loading weather data...</p>
        </div>

        <!-- Error State  -->
        <div
          v-else-if="status === 'error'"
          key="error-state"
          class="flex flex-col items-center justify-center gap-4 w-full h-full"
        >
          <NuxtImg
            src="/images/intermediate/weather-app/icon-error.svg"
            alt="Error icon"
            loading="lazy"
            class="w-8 h-8"
          />

          <h1 class="text-3xl text-center font-(--font-bricolage)">
            <span class="font-bold">Something went wrong</span>
          </h1>

          <button
            class="flex items-center gap-2 p-2 text-sm bg-(--weather-neutral-800) rounded-md shadow-md"
            @click="() => refresh()"
          >
            <NuxtImg
              src="/images/intermediate/weather-app/loading.svg"
              alt="Loading icon"
              loading="lazy"
              class="flex w-4 h-4"
            />
            Retry
          </button>
        </div>

        <!-- Success/Data State: Main Content -->
        <div
          v-else-if="status === 'success'"
          key="success-state"
          class="flex flex-col gap-8 w-full max-w-7xl mx-auto h-full"
        >
          <h1 class="text-3xl text-center py-4 font-(--font-bricolage)">
            <span class="font-bold">How's the sky looking today?</span>
          </h1>

          <div class="grid lg:grid-cols-[1fr_300px] gap-12 w-full h-full">
            <!-- Left Section: Forecast -->
            <div class="flex flex-col gap-8 w-full h-full">
              <div
                class="bg-image bg-no-repeat object-contain flex items-center justify-between gap-4 p-6 bg-(--weather-neutral-700) rounded-4xl lg:rounded-lg shadow-xl w-full min-h-60 h-78 lg:h-82"
              >
                <div class="flex flex-col gap-2">
                  <div class="flex flex-col">
                    <h3 class="text-xl text-(--white) font-semibold">{{ location }}</h3>
                    <div class="flex items-center gap-2">
                      <span class="text-xs">Lon: {{ weatherData?.longitude }}</span
                      >,
                      <span class="text-xs">Lat: {{ weatherData?.latitude }}</span>
                    </div>
                  </div>
                  <p class="flex items-center text-sm text-(--weather-neutral-300)">
                    {{ weekdayName }}, {{ monthName }} {{ dayOfMonth }}, {{ year }}
                  </p>
                </div>

                <div class="flex items-center gap-4">
                  <NuxtImg
                    :src="`/images/intermediate/weather-app/${getWeatherIcon(
                      weatherData?.current.weather_code ?? 0
                    )}.svg`"
                    loading="lazy"
                    class="w-12 h-12 object-fit"
                  />
                  <span class="text-2xl lg:text-3xl text-(--white) italic font-bold">
                    {{ Math.round(currentTemp) }}
                    {{ tempUnit === "fahrenheit" ? "°F" : "°C" }}
                  </span>
                </div>
              </div>

              <!-- Temperature, humidity, wind and precipitation -->
              <div
                class="grid grid-cols-2 lg:grid-cols-4 gap-4 *:flex *:flex-col *:gap-4 *:p-4 *:bg-(--weather-neutral-700) *:rounded-md *:shadow-md *:text-(--white) *:w-full *:max-w-[200px]"
              >
                <!-- Optionally add extra metrics like humidity, wind, precipitation -->
                <div>
                  <h4 class="text-sm">Humidity</h4>
                  <p class="text-xl text-(--weather-neutral-300) font-semibold">
                    {{ weatherData?.hourly.relative_humidity_2m?.[0] ?? 0 }}%
                  </p>
                </div>

                <div>
                  <h4 class="text-sm">Feels like</h4>
                  <p class="text-xl text-(--weather-neutral-300) font-semibold">
                    {{ Math.round(currentTemp) }}
                    {{ tempUnit === "fahrenheit" ? "°F" : "°C" }}
                  </p>
                </div>

                <div>
                  <h4 class="text-sm">Wind Speed</h4>
                  <p class="text-xl text-(--weather-neutral-300) font-semibold">
                    {{ Math.round(currentWindSpeed) }}
                    {{ windUnit }}
                  </p>
                </div>

                <div>
                  <h4 class="text-sm">Weather Code</h4>
                  <p class="text-xl text-(--weather-neutral-300) font-semibold">
                    {{ weatherData?.current.weather_code ?? 0 }}
                  </p>
                </div>
              </div>

              <!-- Daily Forecast -->
              <div class="flex flex-col gap-4">
                <h4 class="text-sm text-(--white) font-semibold">Daily Forecast</h4>

                <div class="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
                  <div
                    v-for="(day, i) in weatherData?.daily.time ?? []"
                    :key="i"
                    :class="{ 'bg-[--weather-blue-500]': parseInt(activeDayIndex) === i }"
                    class="flex flex-col gap-2 p-4 bg-(--weather-neutral-700) rounded-md shadow-md"
                  >
                    <span class="text-xs text-(--white) font-semibold text-center">
                      {{
                        new Date(day).toLocaleDateString("en-US", { weekday: "short" })
                      }}
                    </span>

                    <NuxtImg
                      :src="`/images/intermediate/weather-app/${getWeatherIcon(
                        weatherData?.daily.weather_code?.[i] ?? 0
                      )}.svg`"
                      alt="Daily forecast icon"
                      loading="lazy"
                      class="w-6 h-6 mx-auto"
                    />

                    <div
                      class="flex items-center justify-between gap-4 text-[10px] text-(--white) font-medium"
                    >
                      <span>{{ Math.round(dailyTemps[i]?.max ?? 0) }}°</span>
                      <span>{{ Math.round(dailyTemps[i]?.min ?? 0) }}°</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Section: Hourly Forecast -->
            <div
              class="flex flex-col gap-4 p-4 bg-(--weather-neutral-800) shadow-xl rounded-md"
            >
              <div class="flex items-center justify-between gap-4">
                <h4 class="text-sm text-(--white) font-semibold">Hourly Forecast</h4>
                <UDropdownMenu
                  :items="
                    dayOptions.map((option) => ({
                      label: option.label,
                      click: () => (selectedDayIndex = option.value),
                    }))
                  "
                  :content="{ align: 'start' }"
                  :ui="{ content: 'w-56' }"
                >
                  <UButton
                    :label="
                      dayOptions[selectedDayIndex]
                        ? dayOptions[selectedDayIndex].label
                        : 'Select Day'
                    "
                    color="neutral"
                    variant="outline"
                    icon="i-lucide-calendar"
                    trailing-icon="i-lucide-chevron-down"
                    size="sm"
                  />
                </UDropdownMenu>
              </div>
              <div class="space-y-2 max-h-96 overflow-y-auto">
                <div
                  v-for="(hour, index) in selectedHourlyForecast"
                  :key="index"
                  class="flex items-center justify-between text-(--white) px-4 py-3 bg-(--weather-neutral-600) rounded-md shadow-md"
                >
                  <div class="flex items-center gap-4">
                    <NuxtImg
                      :src="`/images/intermediate/weather-app/${getWeatherIcon(
                        hour.code
                      )}.svg`"
                      alt="Hourly icon"
                      class="w-6 h-6"
                    />
                    <span class="text-(--white) font-semibold">{{ hour.time }}</span>
                  </div>
                  <div class="text-(--white) font-semibold">
                    {{ Math.round(hour.temp) }}°
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Idle State -->
        <div v-else class="flex flex-col items-center justify-center gap-4 w-full h-full">
          <p class="text-(--white)">Fetching is idle at this point...</p>
        </div>
      </div>

      <!-- 🧠 DEBUG PANEL -->
      <div
        class="fixed bottom-0 left-0 right-0 bg-black/70 text-white text-sm z-50 backdrop-blur-md"
        v-if="showDebug"
      >
        <div class="flex justify-between items-center px-4 py-2 border-b border-gray-600">
          <div class="flex items-center gap-4">
            <span class="font-semibold text-green-400">🌤 Weather Debug Panel</span>
            <span
              >Status: <strong>{{ status }}</strong></span
            >
          </div>
          <button
            class="text-gray-300 hover:text-white text-xs bg-gray-700 px-2 py-1 rounded-md"
            @click="showDebug = false"
          >
            Close
          </button>
        </div>

        <div class="p-4 grid gap-2 grid-cols-2 md:grid-cols-4 text-xs">
          <div>
            <strong>Latitude:</strong> {{ weatherData?.latitude }},
            <strong>Latitude:</strong> {{ weatherData?.longitude }}
          </div>
        </div>

        <div class="p-4 border-t border-gray-600 max-h-[300px] overflow-auto">
          <p class="text-gray-400 mb-2 text-xs">Full Weather Data:</p>
          <pre class="text-[10px] whitespace-pre-wrap break-all">{{ weatherData }}</pre>
        </div>
      </div>

      <!-- Floating toggle button -->
      <button
        class="fixed bottom-4 right-4 bg-gray-800 hover:bg-gray-700 text-(--white) text-xs font-semibold px-3 py-2 rounded-md shadow-lg z-50"
        @click="showDebug = !showDebug"
      >
        {{ showDebug ? "Hide Debug" : "Show Debug" }}
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.bg-image {
  background-image: url("/images/intermediate/weather-app/bg-mobile.svg");
  background-size: cover;
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 1024px) {
  .bg-image {
    background-image: url("/images/intermediate/weather-app/bg-large.svg");
  }
}
</style>
