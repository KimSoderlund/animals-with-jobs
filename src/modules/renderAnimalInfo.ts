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
    jobAndEmployment.classList.add("job-text");
    animalInfoElement.appendChild(jobAndEmployment);

    const ageContainer = document.createElement("div");
    ageContainer.classList.add("age-container");

    const ageTitle = document.createElement("p");
    ageTitle.textContent = "Age:";
    ageTitle.classList.add("faded-text");
    ageContainer.appendChild(ageTitle);

    const age = document.createElement("p");
    const currentYear = new Date().getFullYear();
    const birthYear = Number(animal.birthYear);
    const currentAge = currentYear - birthYear;
    age.textContent = `${currentAge} years old.`;
    age.classList.add("standard-text");
    ageContainer.appendChild(age);

    animalInfoElement.appendChild(ageContainer);

    const skills = document.createElement("div");
    skills.classList.add("skills-container");
    const skillsTitle = document.createElement("p");
    skillsTitle.textContent = "Skills:";
    skillsTitle.classList.add("faded-text");
    skills.appendChild(skillsTitle);
    
    const animalSkills = Array.isArray(animal.skills)
        ? animal.skills : animal.skills
        ? [animal.skills] : [];

    animalSkills.forEach((skill) => {
        const skillItem = document.createElement("p");
        skillItem.textContent = skill;
        skillItem.classList.add("standard-text");
        skills.appendChild(skillItem);
    });
    animalInfoElement.appendChild(skills);
}
