function triple(value: number | string): number | string {
    if(typeof value === "string") {
        return value.repeat(3)
    }
    return value * 3
}

// In operator
interface Movie {
    title: string,
    duration: number
}

interface TVShow{
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow): number {
    if("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration; 
}

getRuntime({title: "Amadeus", duration: 140});
getRuntime({title: "Breaking Bad", numEpisodes: 64, episodeDuration: 40})

// instanceof

class User {
    constructor(public username: string){}
}

class Company {
    constructor(public name: string){}
}

function printName(entity: User | Company) {
    if(entity instanceof User) {
        console.log(entity.username);
    } else {
        console.log(entity.name)
    }
}

// Type predicates
interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

/* 
What the type predicate is implying: If this function returns true, 
then we know the value we passed is of type Cat.
isCat is a function we create to check if animal is Cat
*/ 
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string{
    if(isCat(animal)){
        return "Meow"
    } else {
        return "Wolf"
    }
}

// Discriminated Unions
interface Rooster {
    kind: "rooster";
    name: string;
    weight: number;
    age: number;
}

interface Cow {
    kind: "cow";
    name: string;
    weight: number;
    age: number;
}

interface Pig {
    kind: "pig";
    name: string;
    weigth: number;
    age: number;
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal){
    switch(animal.kind){
        case("pig"):
            return "Oink!";
        case ("cow"):
            return "Mooo!";
        case ("rooster"):
            return "Kokorokoo!";
        default: // We should never make it here, if we handled all cases correctly
            // If there is a type we didn't implement in this switch, 
            // TypeScript will complain with this line
            const shouldNeverGetHere: never = animal;
            return shouldNeverGetHere;
    }
}

const stevie: Rooster = {
    name: "Stevie",
    age: 1.5,
    weight: 2,
    kind: 'rooster'
}

console.log(getFarmAnimalSound(stevie)); // "Kokorokoo!"