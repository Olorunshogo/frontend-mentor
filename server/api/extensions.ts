
import extensions from '../data/extensions.json';

export default defineEventHandler(async (event: string) => {
    // Simulate a delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 500));

    return extensions;
});