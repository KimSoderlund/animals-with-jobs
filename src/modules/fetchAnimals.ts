import type { Animal } from "./IAnimal";

export default async function fetchAnimals(): Promise<Animal[] | null> {
    try {
        const response = await fetch('./data/data.json');
        if (!response.ok) {
            throw new Error('Could not fetch animals data');
        }
        const data: Animal[] = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch animals:', error);
        return null;
    }

}
