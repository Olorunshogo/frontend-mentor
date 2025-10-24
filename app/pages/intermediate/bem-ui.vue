
<script setup lang='ts'>
    import { useHead, useSeoMeta, useFetch } from 'nuxt/app';
    import { ref, watchEffect, computed } from 'vue';
    import type { Extension } from '~/types/types';
  
    useHead({
        htmlAttrs: { lang: 'en' },
        link: [ { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' } ]
    });

    useSeoMeta({
        title: 'Frontend Mentor | Browser extensions manager UI',
        description: 'A clean and intuitive user interface for managing browser extensions. Easily view, activate, deactivate, and remove your extensions with a responsive design.',
        
        ogTitle: 'Frontend Mentor | Browser extensions manager UI',
        ogDescription: 'A sleek and responsive browser extensions manager interface designed to help you manage your browser extensions with ease. Toggle between active and inactive states, remove extensions, and more.',
        ogImage: '/images/favicon-32x32.png',
        ogImageAlt: 'Logo',
        ogUrl: 'https://frontend-mentor-18k6.vercel.app/intermediate/bem-ui',
        
        twitterCard: 'summary_large_image',
        twitterTitle: 'Frontend Mentor | Browser extensions manager UI',
        twitterDescription: 'Easily manage your browser extensions with an intuitive UI. View, toggle, and remove extensions seamlessly.',
        twitterImage: '/images/favicon-32x32.png',
        
        author: "Olorunshogo Moses BAMTEFA",
        keywords: 'browser extensions manager, UI design, extension management, active extensions, deactivate extensions, remove extensions, web UI, responsive UI, frontend mentor',
        robots: 'index, follow'
        
    }); 

    const activeFilter = ref<'all' | 'active' | 'inactive'>('all');

    function toggleFilter(filter: 'all' | 'active' | 'inactive') {
        activeFilter.value = filter;
    };

    // Fetch extensions data from the API   
    const { data: staticData, error, pending } = useFetch<Extension[]>('/api/extensions');
    const extensions = ref<Extension[]>([]);

    watchEffect(() => {
        if (staticData.value) {
            extensions.value = staticData.value;
        }
    });

    function removeExtension(extensionName: string) {
        if (extensions.value) {
            extensions.value = extensions.value.filter((ext: { name: string }) => ext.name !== extensionName);
        }
    };

    function toggleActiveState(extension: any) {
        if (extension) {
            extension.isActive = !extension.isActive;
        }
    };

    // Filter extensions based on active/inactive state
    const filteredExtensions = computed(() => {
        if (activeFilter.value === 'active') {
            return (extensions.value ?? []).filter((ext: { isActive: boolean }) => ext.isActive);
        } else if (activeFilter.value === 'inactive') {
            return (extensions.value ?? []).filter((ext: { isActive: boolean }) => !ext.isActive);
        }
        return extensions.value || [];        
    });

</script>

<template>
    <div class="font-(--font-notosans) bg-gradient-to-br from-(--light-bg-1) dark:from-(--dark-bg-1) to-(--light-bg-2) dark:to-(--dark-bg-2)">
        
        <div class="flex flex-col gap-8 lg:gap-12 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-8 sm:py-12 w-full max-w-7xl mx-auto h-full">
                              
            <!-- Logo/Title Bar -->
            <div class="relative flex items-center gap-2 p-2 bg-(--neutral-400) dark:bg-(--neutral-700) rounded-xl border-b dark:border-0 border-(--border-gray) shadow-lg w-full max-w-7xl mx-auto">
                <img src="/images/logo.png" alt="Logo" class="w-fit h-6 lg:h-8" />
                <span class="absolute left-8 lg:left-12 text-sm lg:text-lg font-semibold text-(--neutral-900) dark:text-(--neutral-100) opacity-0">Extensions</span>
            </div>

            <div class="flex-1 relative">
                <div class="flex flex-col gap-16 w-full max-w-7xl mx-auto h-full">

                    <!-- Extensions List -->
                    <div class="flex flex-col gap-6 lg:gap-8 w-full h-fit">

                        <!-- Extensions List Header -->
                        <div class="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-between w-full h-full">
                            
                            <h1 class="text-(--neutral-900) dark:text-(--neutral-0) font-bold text-xl lg:text-2xl">Extensions List</h1>

                            <!-- Buttons -->
                            <div class="flex items-center gap-2">
                                <button 
                                    class="flex items-center text-sm p-2 font-semibold px-4 py-1 rounded-full border-b shadow-xl hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                                    :class="{ 
                                        'text-(--neutral-900) dark:text-(--neutral-100) bg-transparent dark:bg-(--neutral-700) border-(--border-gray) dark:border-transparent': activeFilter !== 'all',
                                        'text-(--white) dark:text-(--neutral-900) bg-(--red-700) dark:bg-(--red-400) hover:bg-(--red-500) dark:hover:bg-(--red-500) border-(--red-700) dark:border-transparent': activeFilter === 'all'
                                    }"
                                    @click="toggleFilter('all')"
                                >
                                    All
                                </button>

                                <button 
                                    class="flex items-center text-sm p-2 font-semibold px-4 py-1 rounded-full border-b shadow-xl hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                                    :class="{ 
                                        'text-(--neutral-900) dark:text-(--neutral-100) bg-transparent dark:bg-(--neutral-700) border-(--border-gray) dark:border-transparent': activeFilter !== 'active',
                                        'text-(--white) dark:text-(--neutral-900) bg-(--red-700) dark:bg-(--red-400) hover:bg-(--red-500) dark:hover:bg-(--red-500) border-(--red-700) dark:border-transparent': activeFilter === 'active'
                                    }"
                                    @click="toggleFilter('active')"
                                >
                                    Active
                                </button>

                                <button 
                                    class="flex items-center text-sm p-2 font-semibold px-4 py-1 rounded-full border-b shadow-xl hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                                    :class="{ 
                                        'text-(--neutral-900) dark:text-(--neutral-100) bg-transparent dark:bg-(--neutral-700) border-(--border-gray) dark:border-transparent': activeFilter !== 'inactive',
                                        'text-(--white) dark:text-(--neutral-900) bg-(--red-700) dark:bg-(--red-400) hover:bg-(--red-500) dark:hover:bg-(--red-500) border-(--red-700) dark:border-transparent': activeFilter === 'inactive'
                                    }"
                                    @click="toggleFilter('inactive')"
                                >
                                    Inactive
                                </button>
                            </div>

                        </div>

                        <!-- Extensions List -->
                        <div class="w-full h-full">
                            
                            <div v-if="pending" class="text-(--neutral-900) dark:text-(--neutral-100)">Loading extensions data...</div>
                            <div v-else-if="error" class="text-(--neutral-900) dark:text-(--neutral-100)">Failed to load extensions data: {{ error.statusCode }} - {{ error.message }}.</div>


                            <ul v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full h-fit">

                                <!-- Extension Card -->                        
                                <li class="flex flex-col gap-8 p-4 shadow-lg bg-(--light-bg-2) dark:bg-(--neutral-800) border-b border-(--border-gray) dark:border-(--neutral-600) rounded-xl"
                                    v-for="(extension, index) in filteredExtensions"
                                    :key="extension.name"
                                    v-if="extensions && extensions.length > 0"
                                >
                                
                                    <div class="flex gap-4 w-full h-fit">
                                        <img :src="extension.logo" :alt="extension.name" class="w-12 h-12"/>
                                        <div class="flex flex-col gap-1">
                                            <h2 class="text-sm lg:text-base text-(--neutral-900) dark:text-(--neutral-100) font-semibold">{{ extension.name }}</h2>
                                            <p class="text-xs lg:text-sm text-(--neutral-700) dark:text-(--neutral-200)">{{ extension.description }}</p>
                                        </div>
                                    </div>
                                
                                
                                    <!-- Remove and Active Toggle Buttons -->
                                    <div class="flex items-center justify-between">

                                        <button 
                                            class="text-xs text-(--neutral-900) dark:text-(--neutral-100) hover:text-(--neutral-100) dark:hover:text-(--neutral-900) bg-transparent dark:hover:bg-(--red-400) font-semibold px-4 py-1 rounded-full border-b border-(--border-gray) dark:border-(--neutral-600) dark:hover:border-(--red-400) hover:border-(--border-gray) focus:border-(--red-700) shadow-lg hover:bg-(--red-700) hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                                            @click="removeExtension(extension.name)"
                                        >
                                            Remove
                                        </button>

                                        <!-- Toggle Active State Button -->
                                        <button 
                                            class="flex w-12 h-fit px-1 py-1 rounded-full shadow-lg hover:bg-(--red-400) focus:border-(--red-700) hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                                            :class="{ 
                                                'bg-(--neutral-300) dark:bg-(--neutral-700)': !extension.isActive,
                                                'bg-(--red-700) dark:bg-(--red-400) hover:bg-(--red-500) dark:hover:bg-(--red-500)': extension.isActive
                                            }"
                                            @click="toggleActiveState(extension)"
                                        >
                                            <div 
                                                class="w-5 h-5 rounded-full shadow-lg bg-(--light-bg-1) border-b border-(--border-gray) delay-100 duration-500 ease-in-out transition-all"
                                                :class="{ 
                                                    'translate-x-1': !extension.isActive, 
                                                    'translate-x-4': extension.isActive 
                                                }"
                                            ></div>
                                        </button>
                                        
                                    </div>

                                </li>
                            </ul>

                        </div>

                    </div>
                    
                </div>
            </div>

        </div>              
    </div>
</template>

<style lang="css" scoped>

</style>