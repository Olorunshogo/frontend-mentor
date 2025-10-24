
<script setup lang='ts'>
    // import { useSeoMeta, useHead } from 'nuxt/app';
    import type { Quote } from "../types/types.js";
  
    useHead({
        htmlAttrs: { lang: 'en' },
        link: [ { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' } ]
    });

    useSeoMeta({
        title: 'Frontend Mentor | Browser extensions manager UI',
        description: 'A growing collection of frontend challenges built from scratch using modern frameworks like Nuxt, Tailwind CSS, and TypeScript. Projects are grouped by difficulty—beginner, intermediate, and advanced.',
        
        ogTitle: 'Frontend Mentor Projects by Olorunshogo',
        ogDescription: 'Explore real-world frontend projects categorized by difficulty and built with Nuxt, Vue, and Tailwind. Clean code, responsive layouts, and accessibility-first design.',
        ogImage: '/images/logo.png',
        ogImageAlt: 'Frontend Mentor UI project thumbnails',
        ogUrl: 'https://frontend-mentor-18k6.vercel.app/',
        
        twitterCard: 'summary_large_image',
        twitterTitle: 'Frontend Mentor Projects by Olorunshogo',
        twitterDescription: 'Browse through beginner to advanced frontend challenges built with Nuxt, Vue, and Tailwind.',
        twitterImage: '/images/logo.png',
        
        author: "Olorunshogo Moses BAMTEFA",
        keywords: 'frontend mentor projects, nuxt projects, vue challenges, frontend portfolio, responsive UI, frontend mentor collection, beginner to advanced frontend',
        robots: 'index, follow'
        
    }); 

    const {  data: kanyeQuotes, status, refresh } = useFetch<Quote>('/api/homeQuotes');

</script>

<template>
    <div class="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-8 sm:py-12 w-full max-w-7xl mx-auto h-full">
        
        <h1 class="text-center text-3xl font-bold text-(--black) dark:text-(--white)">
            <blockquote
                v-if="status === 'success'"
                class="max-w-3xl mx-auto p-6 sm:p-8 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md border-l-4 border-blue-500"
            >

                <p class="text-2xl sm:text-3xl font-semibold italic text-gray-800 dark:text-gray-100 leading-relaxed">
                    “{{ kanyeQuotes?.quote }}”
                </p>

                <footer class="mt-4 text-lg font-medium text-gray-600 dark:text-gray-400">
                    — Kanye
                </footer> 
  
            </blockquote>

             <!-- Fallback while loading -->
            <blockquote
                v-else
                class="max-w-3xl mx-auto p-6 sm:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow border-l-4 border-gray-400"
            >
                <p class="text-xl sm:text-2xl italic text-gray-500 dark:text-gray-400">
                “Loading wisdom from Kanye...”
                </p>
            </blockquote>
        </h1>

        <p class="text-sm font-normal">
            Check out the solutions I've provided to the challenges by
            <a 
                href="https://www.frontendmentor.io/" 
                target="_blank" rel="noopener noreferrer"
                class="underline decoration-2 underline-offset-4 hover:text-blue-600 focus:text-blue-700 focus:outline-none"
            >
                frontend mentor
            </a>
            .
        </p>

        <!-- Beginner Category Links -->
        <div class="flex flex-col gap-4">
            <h3>
                Category: <span class="text-lg font-semibold">Beginner</span>
            </h3>

            <div class="text-sm list-decimal list-inside">
                <li>
                    <NuxtLink
                        to="/beginner/recipe-page"
                        class="hover:text-blue-600 focus:text-blue-700 focus:outline-none cursor-pointer"
                    >
                        Recipe Page
                    </NuxtLink>
                </li>
            </div>
        </div>

        <!-- Intermediate Category Links -->
        <div class="flex flex-col gap-4">
            <h3>
                Category: <span class="text-lg font-semibold">Intermediate</span>
            </h3>
            <div class="text-sm list-decimal list-inside">
                <li>
                    <NuxtLink
                        to="/intermediate/bem-ui"
                        class="hover:text-blue-600 focus:text-blue-700 focus:outline-none cursor-pointer"
                    >
                        Browser Extension Manager - UI
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink
                        to="/intermediate/weather-app"
                        class="hover:text-blue-600 focus:text-blue-700 focus:outline-none cursor-pointer"
                    >
                        Weather App
                    </NuxtLink>
                </li>
            </div>
        </div>


    </div>
</template>

<style lang="css" scoped>
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    blockquote {
        animation: fadeIn 0.6s ease-out;
    }
</style>