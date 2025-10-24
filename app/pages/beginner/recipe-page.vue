
<script setup lang='ts'>
    import { useSeoMeta, useHead } from 'nuxt/app';
  
    useHead({
        htmlAttrs: { lang: 'en' },
        link: [ { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' } ]
    });

    useSeoMeta({
        title: 'Frontend Mentor | Recipe Page',
        description: 'A clean and minimal recipe page with responsive layout and accessible design. Built as part of the Frontend Mentor beginner challenges.',

        ogTitle: 'Frontend Mentor | Recipe Page',
        ogDescription: 'Simple and elegant recipe page layout featuring ingredients, preparation steps, and nutrition info. Responsive and accessible.',
        ogImage: '/images/favicon-32x32.png',
        ogImageAlt: 'Logo',
        ogUrl: 'https://frontend-mentor-18k6.vercel.app/beginner/recipe-page',
        
        twitterCard: 'summary_large_image',
        twitterTitle: 'Frontend Mentor | Recipe Page',
        twitterDescription: 'Beginner-level recipe layout built with clean code and responsive UI. Includes cooking instructions, ingredients, and nutritional facts.',
        twitterImage: '/images/favicon-32x32.png',
        
        author: "Olorunshogo Moses BAMTEFA",
        keywords: 'frontend mentor recipe page, beginner frontend challenge, HTML CSS recipe layout, responsive UI, frontend mentor beginner, recipe card design',
        robots: 'index, follow'
        
    }); 

</script>

<template>
    <div class="relative p-8 text-(--stone-600) font-(--noto-sans) bg-(--stone-150) w-full h-full">

        <div class="flex flex-col gap-8 p-8 lg:p-12 bg-(--rose-50) rounded-lg shadow-xl w-full max-w-3xl mx-auto">

            <div class="">
                <NuxtImg
                    src="/images/beginner/recipe-page/omelette.jpeg"
                    alt="Simple Omelette Recipe"
                    loading="lazy"
                    class="w-full max-w-2xl h-full max-h-90 rounded-xl object-cover"
                />
            </div>
            
            <div class="flex flex-col gap-4">
                <h1 class="text-3xl sm:text-4xl lg:text-5xl text-(--stone-900) font-serif font-bold">Simple Omelette Recipe</h1>
                <p class="text-sm sm:text-base font-(--notosans)">
                    An easy and quick dish, perfect for any meal. 
                    This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </p>

                <!-- Preparation time -->
                <div class="flex flex-col gap-4 pl-4 py-8 bg-(--rose-50)">
                    <h2 class="text-2xl text-(--rose-800) font-bold">Preparation time</h2>

                    <ul class="list-disc list-inside text-base sm:text-lg">
                        <li>
                            <span class="font-bold">Total</span>
                            <span class="font-medium">: Approximately 10 minutes</span>
                        </li>
                        <li>
                            <span class="font-bold">Preparation</span>
                            <span class="font-medium">: 5 minutes</span>
                        </li>
                        <li>
                            <span class="font-bold">Cooking</span>
                            <span class="font-medium">: 5 minutes</span>
                        </li>
                    </ul>

                </div>

                <!-- Ingredients -->
                <div class="flex flex-col gap-4 py-8">
                    <h2 class="text-3xl sm:text-4xl text-(--brown-800) font-bold font-serif">Ingredients</h2>

                    <ul class="text-sm sm:text-base list-disc list-inside *:font-medium">
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>                         
                    </ul>

                </div>

                <hr class="border-(--stone-100)">

                <!-- Instructions -->
                <div class="flex flex-col gap-4 py-4">
                    <h2 class="text-2xl sm:text-3xl text-(--brown-800) font-bold font-serif">Instructions</h2>

                    <ul class="flex flex-col gap-2 text-sm sm:text-base list-inside list-decimal *:leading-loose">
                        <li>
                            <span class="text-(--stone-900) font-bold">Beat the eggs</span>:
                            In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
                            You can add a tablespoon of water or milk for a fluffier texture.
                        </li>

                        <li>
                            <span class="text-(--stone-900) font-bold">Heat the pan</span>:
                            Place a non-stick frying pan over medium heat and add butter or oil.
                        </li>

                        <li>
                            <span class="text-(--stone-900) font-bold">Cook the omelette</span>:
                            Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                        </li>

                        <li>
                            <span class="text-(--stone-900) font-bold">Add fillings (optional)</span>:
                            When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                        </li>

                        <li>
                            <span class="text-(--stone-900) font-bold">Fold and serve</span>:
                            As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                        </li>

                        <li>
                            <span class="text-(--stone-900) font-bold">Enjoy</span>:
                            Serve hot, with additional salt and pepper if needed.
                        </li>

                    </ul>

                </div>

                <hr class="border-(--stone-100)">

                <!-- Nutrition -->
                 <div class="flex flex-col gap-4 py-4">
                    <h2 class="text-2xl sm:text-3xl text-(--brown-800) font-bold font-serif">Nutrition</h2>

                    <p class="text-sm sm:text-base font-medium">The table below shows nutritional values per serving without the additional fillings.</p>

                    <table>
                        <tbody>
                            <tr class="border-b border-(--stone-100) text-base sm:text-lg">
                                <td class="pl-6 sm:pl-8 py-4 font-medium">Calories</td>
                                <td class="py-4 text-(--brown-800) font-bold">277kcal</td>
                            </tr>

                            <tr class="border-b border-(--stone-100) text-base sm:text-lg">
                                <td class="pl-6 sm:pl-8 py-4 font-medium">Carbs</td>
                                <td class="py-4 text-(--brown-800) font-bold">0g</td>
                            </tr>

                            <tr class="border-b border-(--stone-100) text-base sm:text-lg">
                                <td class="pl-6 sm:pl-8 py-4 font-medium">Protein</td>
                                <td class="py-4 text-(--brown-800) font-bold">20g</td>
                            </tr>

                            <tr class="border-b border-(--stone-100) text-base sm:text-lg">
                                <td class="pl-6 sm:pl-8 py-4 font-medium">Fat</td>
                                <td class="py-4 text-(--brown-800) font-bold">22g</td>
                            </tr>
                        </tbody>

                    </table>

                </div>
                
            </div>


        </div>

    </div>
</template>

<style lang="css" scoped>

</style>