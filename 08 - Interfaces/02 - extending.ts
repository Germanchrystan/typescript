interface Dog {
    name: string;
    age: number;
    breed: string;
    bark(): string;
}

interface ServiceDog extends Dog {
    job: "Drug Sniffer" | "Bomb Detecter" | "Guide Dog" 
}

const Chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!";
    },
    job: "Guide Dog"
}

// We can extend from multiple interfaces
interface Person {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Person,Employee {
    level: string,
    languages: string[]
}

const pierre: Engineer = {
    name: "Pierre",
    id: 1,
    email: "pierre@email.com",
    level: "Junior",
    languages: ["JavaScript", "Python"]
}