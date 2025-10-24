
<script setup lang='ts'>
    
</script>

<template>
    <div class="default-layout font-(--font-notosans) bg-gradient-to-br from-(--light-bg-1) dark:from-(--dark-bg-1) to-(--light-bg-2) dark:to-(--dark-bg-2) scroll-smooth ">            
        
        <!-- Navigation Bar -->
        <AppNavbar class="relative z-50 inset-0 bottom-[unset] cursor-default bg-transparent w-full" />     
        
        <div class="flex-1">
            <slot />  
        </div>
        
        <!-- Footer -->
        <AppFooter />

    </div>
</template>


<style lang="css" scoped>
    .default-layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: max-content minmax(0, 1fr) max-content;
        min-height: 100vh;
        min-height: 100dvh;
        width: 100vw;
        font-size: 1rem;
        font-family: var(--font-notosans);
        font-weight: normal;
    }
</style>