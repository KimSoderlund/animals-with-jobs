import type { Animal } from "./IAnimal";
import renderAnimalInfo from "./renderAnimalInfo.ts";

export default function renderListOfAnimals(animals: Animal[]): void {
    const listElement = document.querySelector(".list-of-animals ul");

    if (!listElement) {
        console.error("No list element in DOM");
        return;
    }

    listElement.innerHTML = "";

    animals.forEach((animal) => {
        const listItem = document.createElement("li");
        listItem.textContent = animal.name;
        listItem.addEventListener("click", () => {
            renderAnimalInfo(animal);
        });
        listElement.appendChild(listItem);
    });
}
