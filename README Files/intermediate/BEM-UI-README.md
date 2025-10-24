
# # Frontend Mentor - Browser Extensions Manager UI
A clean, intuitive, and responsive user interface for managing browser extensions. This is a solution to the [Frontend Mentor - Browser Extensions Manager UI challenge](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

>Solution Url: [GitHub](https://github.com/Olorunshogo/frontend-mentor/blob/main/app/pages/intermediate/bem-ui.vue)

> View Live 👉 [Browser Extension Manager UI](https://frontend-mentor-18k6.vercel.app/intermediate/bem-ui/). 

> View the challenge on 👉 [Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).




## 📌 Table of contents
- [🧪 The Challenge](#the-challenge)
- [📖 Overview](#overview)
- [🖼️ Screenshot](#screenshot)
- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
- [📁 Project Structure](#project-structure)
- [🧠 What I Learned](#what-i-learned)
- [🔮 Further Improvements](#further-improvements)



### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Overview
This project replicates a browser extension manager dashboard UI. Built with ***Nuxt 4***, it emphasizes responsive design, accessibility, and a smooth user experience. It supports light/dark modes, interactive filtering, and extension state management.


### Screenshot

![Extensions page full screenshot on a laptop](public/images/Extensions-full-laptop.png)

![Extensions page screenshot on a mobile device](public/images/Extensions-mobile.png)


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


### Tech Stack

- [Nuxt 4](https://nuxt.com/) - Vue framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Component Library:](https://ui.nuxt.com/) - For pre-built components
- [Icons:](https://lucide.dev/guide/packages/lucide-vue-next) && [Nuxt Icon:](https://nuxt.com/modules/icon) - Icon library 
- [Vercel](https://vercel.com/) - Deployment



### What I learned

- Implementing dynamic filtering with `computed()` in Vue 3.
- Leveraging watchEffect() for reactive data assignment with Nuxt's `useFetch`.
- Managing dark/light theme integration with `@nuxtjs/color-mode`.
- SEO setup using `useSeoMeta` for Open Graph and Twitter preview cards.
- Building scalable, modular, and accessible components using ShadCN's UI architecture.


### Future Improvements

- Add drag-and-drop sorting for extensions
- Implement persistence via localStorage or a backend
- Create an edit option for extension details
- Add unit and E2E tests using Vitest + Playwright
- Improve accessibility (ARIA roles and keyboard navigation)
- Optimize performance for large extension lists (e.g., virtualization)
- Add user authentication for personalized extension management
- Integrate with real browser extension APIs for live data
- Implement bulk actions (activate/deactivate/remove multiple extensions)
