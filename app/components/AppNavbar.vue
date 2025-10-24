
<script setup lang='ts'>
    import { ref, computed } from 'vue'; 
    import type { DropdownMenuItem } from '@nuxt/ui';

    const mobileNavLinks = ref<DropdownMenuItem[][]>([
        [
            {
                label: 'Links',
                type: 'label'
            },

            // Beginner
            {
                label: 'Beginner',
                icon: 'i-lucide-sprout',
                children: [
                    {
                        label: 'Recipe Page',
                        icon: 'i-lucide-file-text',
                        description: 'A clean and minimal recipe page with responsive layout and accessible design. Built as part of the Frontend Mentor beginner challenges.',
                        to: '/beginner/recipe-page'
                    },
                    
                ]
            },

            // Intermediate
            {
                label: 'Intermediate',
                icon: 'i-lucide-trending-up',
                children: [
                    {
                        label: 'Browser Extension Manager - UI',
                        icon: 'i-lucide-file-text',
                        description: 'A sleek and responsive browser extensions manager interface designed to help you manage your browser extensions with ease..',
                        to: '/intermediate/bem-ui'
                    },
                    {
                        label: 'Weather App',
                        icon: 'i-lucide-sun',
                        description: 'A modern and intuitive weather app UI that allows users to check current weather conditions, forecasts, and more, all in a sleek and responsive design.',
                        to: '/intermediate/weather-app'
                    },
                    
                ]
            },

            // Advanced
            // {
            //     label: 'Advanced',
            //     icon: 'i-lucide-database',
            //     children: [
            //         {
            //             label: 'Browser Extension Manager - UI',
            //             icon: 'i-lucide-file-text',
            //             description: 'A sleek and responsive browser extensions manager interface designed to help you manage your browser extensions with ease..',
            //             to: '/intermediate/bem-ui'
            //         },
                    
            //     ]
            // },

        ],
    ]);


    const desktopBeginnerNavLinks = ref<DropdownMenuItem[][]>([
        [
            {
                label: 'Links',
                type: 'label'
            },
            
            {
                label: 'Recipe Page',
                icon: 'i-lucide-file-text',
                description: 'A slth ease..',
                to: '/beginner/recipe-page'
            },                
        ]
    ]);

    const desktopIntermediateNavLinks = ref<DropdownMenuItem[][]>([
        [
            {
                label: 'Links',
                type: 'label'
            },
            
            {
                label: 'Browser Extension Manager - UI',
                icon: 'i-lucide-file-text',
                description: 'A sleek and responsive browser extensions manager interface designed to help you manage your browser extensions with ease..',
                to: '/intermediate/bem-ui'
            },
            {
                label: 'Weather App',
                icon: 'i-lucide-sun',
                description: 'A modern and intuitive weather app UI that allows users to check current weather conditions, forecasts, and more, all in a sleek and responsive design.',
                to: '/intermediate/weather-app'
            },                
        ]
    ]);

    const desktopAdvanceNavLinks = ref<DropdownMenuItem[][]>([
        [
            {
                label: 'Links',
                type: 'label'
            },
            
            {
                label: 'Browser Extension Manager - UI',
                icon: 'i-lucide-file-text',
                description: 'A sleek and responsive browser extensions manager interface designed to help you manage your browser extensions with ease..',
                to: '/intermediate/bem-ui'
            },
                
        ]
    ]);

</script>

<template>
    <header>
        <div class="px-4 sm:px-8 bg-(--neutral-400) dark:bg-(--neutral-700) border-b dark:border-0 border-(--border-gray) w-full h-full">

            <!-- Mobile Nav -->
            <div class="flex sm:hidden items-center justify-between p-2 px-(--section-px)) shadow-lg w-full max-w-7xl mx-auto">
                <!-- Logo -->
                <NuxtLink to="/" class="flex items-center gap-2">
                    <NuxtImg 
                        src="/images/logo.png" 
                        alt="Logo" 
                        class="h-8 object-cover" 
                    />
                    <div class="text-sm lg:text-lg font-semibold text-(--white) dark:text-(--neutral-100) opacity-100 w-full">Frontend Mentor</div>
                </NuxtLink>

                <div class="flex items-center gap-4">

                    <UDropdownMenu :items="mobileNavLinks">
                        <UButton 
                            icon="i-lucide-menu" 
                            color="info"
                            variant="outline" 
                        />
                    </UDropdownMenu>

                    <UColorModeSwitch />

                </div>
                
            </div>

            <!-- Tablet Nav -->
             <div class="hidden sm:flex  lg:hidden items-center justify-between p-2 sm:px-(--section-px-sm) shadow-lg w-full max-w-7xl mx-auto">
                <!-- Logo -->
                <NuxtLink to="/" class="flex items-center gap-2">
                    <NuxtImg 
                        src="/images/logo.png" 
                        alt="Logo" 
                        class="h-8 object-cover" 
                    />
                    <div class="text-sm lg:text-lg font-semibold text-(--white) dark:text-(--neutral-100) opacity-100 w-full">Frontend Mentor</div>
                </NuxtLink>

                <div class="flex items-center gap-4">

                    <UDropdownMenu :items="mobileNavLinks">
                        <UButton 
                            label="Mobile Nav"
                            icon="i-lucide-menu" 
                            color="info"
                            variant="outline" 
                        />
                    </UDropdownMenu>

                    <UColorModeSwitch />

                </div>
                
            </div>

            <!-- Desktop Navigation -->            
            <div class="hidden lg:flex items-center justify-between p-2 lg:px-(--section-px-lg) shadow-lg w-full max-w-7xl mx-auto">
                <!-- Logo -->
                <NuxtLink to="/" class="relative flex items-center gap-2">
                    <NuxtImg 
                        src="/images/logo.png" 
                        alt="Logo" 
                        class="h-8 object-cover" 
                    />
                    <div class="relative left-8 lg:left-12 text-sm lg:text-lg font-semibold text-(--white) dark:text-(--neutral-100) opacity-100 w-fit">Frontend Mentor</div>
                </NuxtLink>


                <div class="flex items-center gap-2">
                    <UDropdownMenu :items="desktopBeginnerNavLinks">
                        <UButton 
                            label="Beginner"
                            trailing-icon="i-lucide-sprout" 
                            color="primary" 
                            variant="outline" 
                        />
                    </UDropdownMenu>

                    <UDropdownMenu :items="desktopIntermediateNavLinks">
                        <UButton 
                            label="Intermediate"
                            trailing-icon="i-lucide-trending-up" 
                            color="warning" 
                            variant="outline" 
                        />
                    </UDropdownMenu>

                    <UDropdownMenu :items="desktopAdvanceNavLinks">
                        <UButton 
                            label="Advanced"
                            trailing-icon="i-lucide-zap" 
                            color="error"
                            variant="outline" 
                        />
                    </UDropdownMenu>

                </div>
                
                <UColorModeSelect />
                
            </div>

        </div>
    </header>
</template>

<style lang="css" scoped>

</style>