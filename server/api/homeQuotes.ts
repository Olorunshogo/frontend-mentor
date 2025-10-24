
// import { defineEventHandler } from "nuxt/app";
// import { createError } from "nuxt/app";
import type { Quote } from '~/types/types';

export default defineEventHandler(async (event) => {

    const url = 'https://api.kanye.rest/'; 

    try {
        const res = await fetch(url);

        if (!res.ok) {
            throw createError({
                statusCode: res.status,
                statusMessage: `API request failed with status ${res.status}`,
            });
        }

        const data = await res.json() as Quote;
        console.log("This is the current Kanye quote: ", data);
        
        return data;

    } catch (error) {
        return createError ({
            statusCode: 500,
            statusMessage: "Failed to Kanye quotes"
        })
    }

});
