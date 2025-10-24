
# Frontend Mentor - Weather app solution
A beautiful and responsive weather app designed to give you the latest weather updates, forecast details, and much more. Stay informed about your local weather with ease.


## 📌 Table of contents
- [Overview](#overview)
  - [🧪 The Challenge](#the-challenge)
  - [🖼️ Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [🛠️ Tech Stack](#tech-stack)
  - [✨ Features](#features)
  - [🧠 What I Learned](#what-i-learned)
  - [🔮 Further Improvements](#further-improvements)
  - [Useful resources](#useful-resources)




## Overview

### The challenge

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown 
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![Weather app's full screenshot on a laptop](public/images/Extensions-full-laptop.png)

![Weather app's screenshot on a mobile device](public/images/Extensions-mobile.png)


### Links
>Solution Url: [GitHub](https://github.com/Olorunshogo/frontend-mentor/blob/main/app/pages/intermediate/weather-app.vue)

> View Live 👉 [Weather App](https://frontend-mentor-18k6.vercel.app/intermediate/weather-app). 

> View the challenge on 👉 [Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app).


## My Process

### Tech Stack

- [Nuxt 4](https://nuxt.com/) - Vue framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Component Library:](https://ui.nuxt.com/) - For pre-built components
- [Icons:](https://lucide.dev/guide/packages/lucide-vue-next) && [Nuxt Icon:](https://nuxt.com/modules/icon) - Icon library 
- [Vercel](https://vercel.com/) - Deployment
- [Open Meteo API]() - Weather Forecast API

### Features
- ✅ Toggle extensions between **active** and **inactive** states
- 🔍 Filter by **All**, **active** or **inactive**
- ❌ Remove extensions from the list
- 🌗 Select color theme (light, dark, auto)
- 🧩 Responsive design for various screen sizes
- Accessibility features including keyboard navigation and ARIA labels
- 🔃 Smooth animations and transitions for interactive elements 
- 🖱️ Hover and focus states for all interactive elements
- 🔧 SEO optimized using useSeoMeta

### What I learned

Use this section to recap over some of your major learnings while working through this project. 
Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```


- Implementing dynamic filtering with `computed()` in Vue 3.
- Leveraging watchEffect() for reactive data assignment with Nuxt's `useFetch`.
- Managing dark/light theme integration with `@nuxtjs/color-mode`.
- SEO setup using `useSeoMeta` for Open Graph and Twitter preview cards.
- Building scalable, modular, and accessible components using ShadCN's UI architecture.


### Further Improvements

- Add drag-and-drop sorting for extensions
- Implement persistence via localStorage or a backend
- Create an edit option for extension details
- Add unit and E2E tests using Vitest + Playwright
- Improve accessibility (ARIA roles and keyboard navigation)
- Optimize performance for large extension lists (e.g., virtualization)
- Add user authentication for personalized extension management
- Integrate with real browser extension APIs for live data
- Implement bulk actions (activate/deactivate/remove multiple extensions)

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.



