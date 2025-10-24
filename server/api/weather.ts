
import type { WeatherData } from "~/types/types";

export default defineEventHandler(async (event) => {
//     // const query = getQuery(event);

//     // const lat = query.lat || '9.05785'; // Default to Abuja, Nigeria
//     // const lon = query.lon || '7.49508';
//     // const tempUnit = query.temp_unit || 'celsius';
//     // const windUnit = query.wind_unit || 'kmh';
//     // const precUnit = query.prec_unit || 'mm';

	const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m";
    try {
        const res = await fetch(url);
        if (!res.ok) {
            // throw new Error(`HTTP error: ${req.status} ${req.statusText}`);
            throw createError({
                statusCode: res.status,
                statusMessage: `Weather API returned ${res.status} ${res.statusText}`,
            });
        }

        const data = (await res.json()) as WeatherData;
        console.log("This is the current kanye quote", data);

        return data;

    } catch (error: any) {
        console.error('❌ Weather API Error: ', error);
        throw createError({
            statusCode: 500,
            statusMessage: `Failed to fetch weather data: ${error.message}`,
        });
    }

});






