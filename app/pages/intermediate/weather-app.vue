
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

 // Reactive units state
 const tempUnit = ref<'celsius' | 'fahrenheit'>('celsius');
 const windUnit = ref<'km/h' | 'mp/h'>('km/h');
 const precUnit = ref<'mm' | 'inch'>('mm')

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
      e.preventDefault()
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
         checked: windUnit.value === 'mp/h',
         onUpdateChecked(checked: boolean) {
             if (checked) windUnit.value = 'mp/h';
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
             e.preventDefault()
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
             e.preventDefault()
         },
     },

 ] satisfies DropdownMenuItem[]);

 // Geolocation and default
 const lat = ref<number>(9.05785);
 const lon = ref<number>(7.49508);
 const selectedLocation = ref<string>('Abuja, Nigeria')


 //  Fetch weather data
 const query = computed(() => ({
     lat: lat.value,
     lon: lon.value,
     temp_unit: tempUnit.value,
     wind_unit: windUnit.value,
     prec_unit: precUnit.value
 }));

 const { data: weatherData, status, refresh, clear } = await useFetch<WeatherData | null | undefined>(
     '/api/weather',
     // {
     // query: {
     //     lat: lat.value,
     //     lon: lon.value,
     //     temp_unit: tempUnit,
     //     wind_unit: windUnit,
     //     prec_unit: precUnit
     // },

     // // query,
     // key: computed(
     //     () =>
     //         `weather-${lat.value}-${lon.value}-${tempUnit.value}-${windUnit.value}-${precUnit.value}`
     // ),
     // server: false,
     // immediate: false, // Nuxt will trigger the first fetch automatically
     // transform: (data) => data ?? null, // Ensure data is not undefined
     // onResponse({ response }) {
     //     console.log('✅ Weather API responded:', response._data);
     // },
     // onResponseError({ error }) {
     //     console.error('❌ Weather fetch failed:', error);
     // },
 //}
 );

 watch(weatherData, (newVal) => {
     console.log('🌤 Weather data updated: ', newVal);
 });

console.log("Weather Data is: ", weatherData);

 // Watch units to refresh
 watch([tempUnit, windUnit, precUnit], () => {
     refresh();
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

 // Geolocation & initial fetch
 // onMounted(async () => {
 //     console.log('🌍 Initializing fetch...');
 //     if (navigator.geolocation) {
 //         navigator.geolocation.getCurrentPosition(
 //         async (position) => {
 //             lat.value = position.coords.latitude;
 //             lon.value = position.coords.longitude;
 //             // Optionally reverse‑geocode to get location name if needed
 //             // await refresh();
 //         },
 //         async (error) => {
 //             console.log('Geolocation permission denied or failed, using default (Abuja, Nigeria)');
 //             lat.value = 9.05785;
 //             lon.value = 7.49508;
 //             // await refresh();
 //         }
 //         );
 //     } else {
 //         // If geolocation unsupported
 //         console.log('Geolocation not supported, using default (Abuja, Nigeria)');
 //         lat.value = 9.05785;
 //         lon.value = 7.49508;
 //         // refresh();
 //     }

 //     if (weatherData.value) {
 //         console.log("✅ Weather data already available:", weatherData.value);
 //     } else {
 //         console.log("🌍 Triggering fetch...");
 //         await refresh();
 //     }
 // });

 // Clear on route change
 const route = useRoute();
 watch(() => route.path, (path) => {
     if (path === '/') {
         clear()
     }
 });


 // Dynamic week dropdown based on daily forecast & time series
 const activeDayIndex = ref<string>('0');
//  const weekDropdown = computed<SelectItem[]>(() => {
//      if (!weatherData.value?.daily?.time) return [];
//      return weatherData.value.daily.time.map((time: Date, i: number) => ({
//          label: time.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }),
//          value: i.toString(),
//      }));l
//  });

 // Hourly forecast for selected day
 // const hourlyForecast = computed(() => {
 //     if (!weatherData.value?.hourly) return [];
 //     const i = parseInt(activeDayIndex.value);
 //     const start = i * 24;
 //     const end = start + 8;
 //     return weatherData.value.hourly.time.slice(start, end).map((time: Date, idx: number) => ({
 //         time: time.toLocaleTimeString("en-US", { hour: "numeric", hour12: true }),
 //         temp: weatherData.value!.hourly.temperature_2m[start + idx] ?? 0,
 //         code: weatherData.value!.hourly.weather_code[start + idx] ?? 0,
 //     }));
 // });

 // // Selected day for summary
 // const selectedDay = computed(() => {
 //     if (!weatherData.value?.daily) return null;
 //     const index = parseInt(activeDayIndex.value);
 //     return {
 //         date: weatherData.value.daily.time[index],
 //         tempMin: weatherData.value.daily.temperature_2m_min[index],
 //         tempMax: weatherData.value.daily.temperature_2m_max[index],
 //         code: weatherData.value.daily.weather_code[index]
 //     }
 // });

 // Date for display
 const date = new Date();
 const weekdayName = date.toLocaleDateString('en-Us', { weekday: 'short' });
 const dayOfMonth = date.getDate();
 const monthName = date.toLocaleDateString('en-Us', { month: 'short' });
 const year = date.getFullYear();

 const showDebug = ref(true);
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

        <!-- <UDropdownMenu 
                    :items="unitDropdown" :content="{ align: 'start' }" :ui="{ content: 'w-48' }">
                    <UButton
                        label="Units" color="neutral" variant="outline"
                        icon="i-lucide-gear" trailing-icon="i-lucide-chevron-down"
                    ></UButton>
                </UDropdownMenu>  -->

        <UDropdownMenu
          :items="[
                        { label: 'Celsius', type: 'checkbox', checked: tempUnit === 'celsius', onUpdateChecked: (v:boolean)=>v&&(tempUnit='celsius') },
                        { label: 'Fahrenheit', type: 'checkbox', checked: tempUnit === 'fahrenheit', onUpdateChecked: (v:boolean)=>v&&(tempUnit='fahrenheit') },
                    ]"
        >
          <UButton label="Units" icon="i-lucide-gear" variant="outline" />
        </UDropdownMenu>
      </div>

      <!-- <pre class="text-xs text-(--white)">{{ weatherData }}</pre> -->

      <!-- 
                http://localhost:3000/api/weather?lat=9.05785&lon=7.49508&temp_unit=celsius&wind_unit=kmh&prec_unit=mm
            -->

      <div class="flex-1 relative">
        <!-- Loading State -->
        <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
          <p class="text-(--white)">Loading weather data...</p>
        </div>

        <!-- Error State  -->
        <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
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
        <div class="flex flex-col gap-8 w-full max-w-7xl mx-auto h-full">
          <h1 class="text-3xl text-center py-4 font-(--font-bricolage)">
            <span class="font-bold">How's the sky looking today?</span>
          </h1>

          <!-- Search Bar -->
          <!-- <div class="flex items-center gap-8 justify-between w-full max-w-2xl mx-auto">
                        <!-- Input with leading icon --
                        <div class="relative flex-1">
                            <Icon
                                name="mdi:magnify"
                                class="absolute left-3 top-1/2 -translate-y-1/2 text-(--white) text-lg pointer-events-none"
                            />
                            <input 
                                type="search" id="search" name="search" 
                                v-model="searchKeyword"
                                class="w-full text-sm text-(--white) px-10 py-3 font-medium bg-(--weather-neutral-800) border-none rounded-md shadow-xl"
                                placeholder="Search for a place..."
                            />
                        </div>

                        <div class="relative flex-1">
                            <Icon name="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-(--white) text-lg pointer-events-none" />
                            <input type="search" id="search" name="search" v-model="searchKeyword" @keyup.enter="handleSearch" class="w-full text-sm text-(--white) px-10 py-3 font-medium bg-(--weather-neutral-800) border-none rounded-md shadow-xl" placeholder="Search for a place…" />
                        </div>
                        

                        <button class="flex items-center px-6 py-2 font-semibold bg-(--weather-blue-500) shadow-xl rounded-md">
                            Search
                        </button>
                    </div> -->

          <!-- Search Bar with Autocomplete -->
          <!-- <div class="flex items-center gap-8 justify-between w-full max-w-2xl mx-auto">
                        <USelectMenu
                            v-model="selectedLocation" 
                            :items="geoResults" 
                            searchable
                            placeholder="Search for a place..."
                            leading-icon="i-mdi-magnify"
                            :loading="loadingSearch"
                            @update:search="handleSearch"
                            @update:modelValue="selectLocation"
                            class="flex-1"
                        />
                    </div> -->

          <div class="grid lg:grid-cols-[1fr_300px] gap-12 w-full h-full">
            <!-- Left Section: Forecast -->
            <div class="flex flex-col gap-8 w-full h-full">
              <div
                class="bg-image bg-no-repeat object-cover flex items-center justify-between gap-4 p-6 bg-(--weather-neutral-700) rounded-xl shadow-xl w-full h-48 lg:h-62"
              >
                <div class="flex flex-col gap-2">
                  <h3 class="text-xl text-(--white) font-semibold">Abuja, Nigeria</h3>
                  <p class="flex items-center text-sm text-(--weather-neutral-300)">
                    {{ weekdayName }}, {{ monthName }} {{ dayOfMonth }}, {{ year }}
                  </p>
                </div>

                <div class="flex items-center gap-6 lg:gap-8">
                  <!-- <NuxtImg 
                                        :src="`/images/intermediate/weather-app/${getWeatherIcon(weatherData.value?.current.weather_code ?? 0)}.svg`"
                                        alt="Current weather icon"
                                        loading="lazy"
                                        class="w-8 h-8 object-fit"
                                    /> -->

                  <NuxtImg
                    src="/images/intermediate/weather-app/sunny.svg"
                    loading="lazy"
                    class="w-12 h-12 object-fit"
                  />
                  <span class="text-3xl lg:text-4xl text-(--white) italic font-bold">
                    <!-- {{ Math.round(weatherData.value?.current.temperature_2m) ?? 0 }}° -->
                    62°
                    <!-- {{ weatherData.latitude }}  -->
                  </span>
                </div>
              </div>

              <!-- Temperature, humidity, wind and precipitation --
                            <div class="grid sm:grid-cols-2 lg:grid-cols-4">
                                <!-- Optionally add extra metrics like humidity, wind, precipitation --
                                <!-- <div class="p-4 bg-(--weather-neutral-700) rounded-md shadow-md text-(--white)">
                                    <h4 class="font-semibold">Feels like</h4>
                                    <p>{{ Math.round(weatherData.value?.current.temperature_2m ?? 0) }}°</p>
                                </div>
                                <div class="p-4 bg-(--weather-neutral-700) rounded-md shadow-md text-(--white)">
                                    <h4 class="font-semibold">Humidity</h4>
                                    <p>{{ weatherData.value?.hourly.relative_humidity_2m?.[0] ?? 0 }}%</p>
                                </div>
                                <div class="p-4 bg-(--weather-neutral-700) rounded-md shadow-md text-(--white)">
                                    <h4 class="font-semibold">Wind Speed</h4>
                                    <p>{{ weatherData.value?.current.wind_speed_10m ?? 0 }} {{ windUnit === 'kmh' ? 'km/h' : 'mph' }}</p>
                                </div>
                                <div class="p-4 bg-(--weather-neutral-700) rounded-md shadow-md text-(--white)">
                                    <h4 class="font-semibold">Precipitation</h4>
                                    <p>{{ weatherData.value?.daily.precipitation_sum?.[0] ?? 0 }} {{ precUnit === 'mm' ? 'mm' : 'in' }}</p>
                                </div> --
                            </div> -->

              <!-- Daily Forecast -->
              <!-- <div class="flex flex-col gap-4">
                                <h4 class="text-sm text-(--white) font-semibold">Daily Forecast</h4>
                            
                                <div class="grid gap-2 grid-cols-3 lg:grid-cols-7">
                                    <div
                                        v-for="(day, i) in weatherData.value?.daily.time ?? []"
                                        :key="i"
                                        :class="{ 'bg-[--weather-blue-500]': parseInt(activeDayIndex) === i }"
                                        @click="activeDayIndex = i.toString()"
                                        class="flex flex-col gap-2 p-4 bg-(--weather-neutral-700) rounded-md shadow-md"
                                    >
                                        <span class="text-xs text-(--white) font-semibold text-center">
                                            {{ day.toLocaleDateString('en-US', { weekday: 'short' }) }}
                                        </span>
                                        <!-- <NuxtImg 
                                            src="/images/intermediate/weather-app/rain.svg"
                                            alt="Daily forecast icon"
                                            loading="lazy"
                                            class="w-6 h-6 mx-auto"
                                        /> --
                                        <NuxtImg 
                                            :src="`/images/intermediate/weather-app/${getWeatherIcon(weatherData.value?.daily.weather_code?.[i] ?? 0)}.svg`"
                                            alt="Daily forecast icon"
                                            loading="lazy"
                                            class="w-6 h-6 mx-auto"
                                        />

                                        <div class="flex items-center justify-between gap-4 text-[10px] text-(--white) font-medium">
                                            <span>{{ Math.round(weatherData.value?.daily.temperature_2m_max?.[i] ?? 0) }}°</span>
                                            <span>{{ Math.round(weatherData.value?.daily.temperature_2m_min?.[i] ?? 0) }}°</span>
                                        </div>

                                    </div>
                                </div>
                            </div> -->
            </div>

            <!-- Right Section: Hourly Forecast -->
            <div
              class="flex flex-col gap-4 p-4 bg-(--weather-neutral-800) shadow-xl rounded-md"
            >
              <!-- <div v-if="hourlyForecast.length" class="space-y-2">
                                <div 
                                    v-for="(forecast, index) in hourlyForecast"
                                    :key="index"
                                    class="flex items-center justify-between text-(--white) px-4 py-4 bg-(--weather-neutral-600) rounded-md shadow-md"
                                >

                                    <div class="flex items-center gap-4">
                                        <!-- Weather Icon --
                                        <NuxtImg
                                            :src="`/images/intermediate/weather-app/${getWeatherIcon(forecast.code)}.svg`"
                                            alt="Hourly icon"
                                            class="w-6 h-6" 
                                        />

                                        <span class="text-(--white) font-semibold">{{ forecast.time }}</span>
                                    </div>

                                    <div class="text-(--white) font-semibold">{{ forecast.temp }}°</div>

                                </div>
                            </div>                             -->
            </div>
          </div>
        </div>

        <!-- Idle State -->
        <div class="flex flex-col items-center justify-center gap-4 w-full h-full">
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
          <div><strong>Latitude:</strong> {{ lat }}</div>
          <!-- <pre>{{ weatherData }}</pre>                    <div><strong>Longitude:</strong> {{ lon }}</div> -->
          <div><strong>Temp Unit:</strong> {{ tempUnit }} - {{ tempUnit }}</div>
          <div><strong>Wind Unit:</strong> {{ windUnit }}</div>
          <div><strong>Precip Unit:</strong> {{ precUnit }}</div>
        </div>

        <div class="p-4 border-t border-gray-600 max-h-[300px] overflow-auto">
          <p class="text-gray-400 mb-2 text-xs">Full Weather Data:</p>
          <!-- <pre class="text-[10px] whitespace-pre-wrap break-all">{{ weatherData }}</pre> -->
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
