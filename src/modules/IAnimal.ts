export interface Animal {
    name: string;
    kindOfAnimal: string;
    job: string;
    skills: string[];
    birthYear: number | string;
    imageUrl: string;
    employmentStartDate: string | number;
    employmentEndDate?: string | number;
}