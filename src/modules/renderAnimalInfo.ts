const animalInfoElement = document.querySelector(".animal-info");
import type { Animal } from "./IAnimal";

export default function renderAnimalInfo(animal: Animal): void {
    if (!animalInfoElement) {
        console.error("No animal info element in DOM");
        return;
    }

    animalInfoElement.innerHTML = "";
    const image = document.createElement("img");
    image.src = `/images/${animal.imageUrl}`;
    image.classList.add("animal-image");
    animalInfoElement.appendChild(image);
  
    const nameAndType = document.createElement("h2");
    nameAndType.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    nameAndType.classList.add("animal-name-and-type");
    animalInfoElement.appendChild(nameAndType);
  
    const jobAndEmployment = document.createElement("p");
    const isEmployed = animal.employmentEndDate ? "Currently not employed" : "Currently employed";
    jobAndEmployment.textContent = `${animal.job} - ${isEmployed}`;
    jobAndEmployment.classList.add("standard-text");
    animalInfoElement.appendChild(jobAndEmployment);

    const age = document.createElement("p");
    const currentYear = new Date().getFullYear();
    const birthYear = Number(animal.birthYear);
    const currentAge = currentYear - birthYear;
    age.textContent = `Age: ${currentAge} years old.`;
    animalInfoElement.appendChild(age);

    const skills = document.createElement("div");
    const skillsTitle = document.createElement("p");
    skillsTitle.textContent = "Skills:";
    skills.appendChild(skillsTitle);
    
    const animalSkills = Array.isArray(animal.skills)
        ? animal.skills : animal.skills
        ? [animal.skills] : [];

    animalSkills.forEach((skill) => {
        const skillItem = document.createElement("p");
        skillItem.textContent = skill;
        skills.appendChild(skillItem);
    });
    animalInfoElement.appendChild(skills);
}
