//Använd fetch för att hämta datan i data/data.json
//Använd try/catch och om anropet lyckas, returnera datan. Annars, returnera "null"
//Typa upp funktionen med vad den returnerar
export default async function fetchAnimals() {
    try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
            throw new Error('Could not fetch animals data');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Failed to fetch animals:', error);
        return null;
    }
}
