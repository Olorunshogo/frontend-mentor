# rontend Mentor - Weather App ☀️🌧️

A sleek, user-friendly, and responsive weather application that provides real-time weather data for any location using the Open-Meteo API.
This is a solution to the [Frontend Mentor - Weather App challenge](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49).



## 📌 Table of contents
- [📖 Overview](#overview)
  - [🧪 The Challenge](#the-challenge)  
  - [🖼️ Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [🛠️ Tech Stack](#tech-stack)
  - [✨ Features](#features)
  - [🧠 What I Learned](#what-i-learned)
  - [🔮 Further Improvements](#further-improvements)



## Overview
This project replicates a **modern**, **minimalistic weather dashboard UI**, built with **Nuxt 4**. 
It emphasizes **real-time data**, **responsive layouts**, **accessibility**, and **a delightful user experience**.


### 🧪 The Challenge

Users should be able to:

- 🔍 Search for weather information by entering a **location** in the search bar  
- 🌤️ View **current weather conditions** — temperature, weather icon, and location details  
- 🌡️ See additional weather metrics like:
  - “Feels like” temperature  
  - Humidity percentage  
  - Wind speed  
  - Precipitation amounts  
- 📅 Browse a **7-day weather forecast** with daily high/low temperatures and weather icons  
- ⏰ View an **hourly forecast** showing temperature changes throughout the day  
- 🗓️ Switch between **different days** of the week in the hourly forecast section  
- ⚙️ Toggle between **Imperial** and **Metric** measurement units  
- 🌡️ Switch between **Celsius (°C)** and **Fahrenheit (°F)**  
- 🌬️ Toggle between wind speed in **km/h** or **mph** and precipitation in **mm**  
- 📱 Experience optimal layout and design across **mobile, tablet, and desktop**  
- 🖱️ See hover and focus states for all interactive elements  


### 🖼️ Screenshot

![Weather App full screenshot on a laptop](public/images/weather-laptop.png)

![Weather App screenshot on a mobile device](public/images/weather-mobile.png)






🔗 Links

> 🧩 **Solution URL:** [GitHub](https://github.com/Olorunshogo/frontend-mentor/blob/main/app/pages/intermediate/weather-app.vue)  
> 🌐 **Live Demo:** [Weather App](https://frontend-mentor-18k6.vercel.app/intermediate/weather-app)  
> 💡 **Challenge:** [Frontend Mentor](https://www.frontendmentor.io/)




## 🚀 My Process

### 🛠️ Tech Stack

- [Nuxt 4](https://nuxt.com/) — Vue framework  
- [TypeScript](https://www.typescriptlang.org/) — Strongly typed JavaScript  
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework  
- [Nuxt UI](https://ui.nuxt.com/) — Elegant and pre-built components  
- [Nuxt Image](https://nuxt.com/modules/image) — Optimized image handling  
- [Nuxt Icon](https://nuxt.com/modules/icon) — Icon support for consistent visuals  
- [Open-Meteo API](https://open-meteo.com/) — Real-time and forecast weather data  
- [Vercel](https://vercel.com/) — Deployment platform  




### ✨ Features

- 🔍 **Real-time weather search** by city or region  
- 🌤️ **Current conditions** with temperature, feels-like, humidity, wind, and precipitation  
- 📅 **7-day forecast** with daily highs/lows and icons  
- ⏰ **Hourly forecast** with day selector  
- ⚙️ **Unit toggling** for metric/imperial systems  
- 🧭 **Dynamic weather icons** that adapt to current conditions  
- 🌗 **Light/Dark mode support** with automatic detection  
- 📱 **Responsive design** optimized for all screen sizes  
- ♿ **Accessible navigation** with ARIA attributes and keyboard controls  
- ⚡ **Smooth transitions** and animated weather icons  
- 🔧 **SEO optimized** with `useSeoMeta` for Open Graph and Twitter cards  


### 🧠 What I Learned

- Efficiently fetching and mapping data from the **Open-Meteo API**  
- Implementing **computed properties** for dynamic data rendering (hourly and daily forecasts)  
- Managing **reactivity** in Nuxt using `ref()` and `watchEffect()`  
- Integrating **unit toggling logic** across multiple weather parameters  
- Using **Nuxt’s useSeoMeta()** for advanced SEO and metadata setup  
- Building **scalable, modular components** with Nuxt UI and Tailwind CSS  
- Creating **animated and accessible UI interactions** using transitions and ARIA labeling  




### 🔮 Future Improvements

- 📍 Add **geolocation detection** for auto-fetching the user’s current weather  
- 🗺️ Integrate a **map view** (e.g., Leaflet or Mapbox)  
- 🌈 Include **weather condition backgrounds** (e.g., rain, clear sky, snow)  
- 📲 Implement **offline mode** or caching with IndexedDB  
- 🧮 Add **temperature and unit persistence** via localStorage  
- 🧩 Improve accessibility with detailed ARIA roles and keyboard shortcuts  
- 🧪 Write **unit and E2E tests** using Vitest + Playwright  
- 🔋 Optimize performance for mobile and slow networks  
- 🌐 Add **multi-language support** (i18n)  
- 🌤️ Display **sunrise/sunset times** and **UV index**  
- 🌤️ Display sunrise/sunset times and UV index




