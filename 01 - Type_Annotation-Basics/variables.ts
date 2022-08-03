// String
let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
// movieTitle = 0 => ERROR: Type number is not assignable to type string
// movieTitle.upper() => ERROR: This method does not exist on type string
movieTitle.toUpperCase()

// Number
let numCatLives: number = 9;
numCatLives += 1;

// Boolean
let gameOver: boolean = false;
//============================================================================//
// Type Inference
//============================================================================//
let tvShow = "Olive Kitteridge"; // This is infered as a string
tvShow = "The Other Two";
// tvShow = false; // ERROR

let isFunny = false; // infered as a boolean

//============================================================================//
// Any Type
//============================================================================//
let thing: any = "hello";
thing = 1;
thing = false;
thing()
thing.toUpperCase()
thing.wcxqawdqw()


//============================================================================//
const movies = ["Arrival", "The Thing", "Aliens"]
let foundMovie; 
for(let movie of movies) {
    if (movie === "Aliens") {
        foundMovie = movie;
    }
}
// In this example foundMovie starts as a 'any' type
foundMovie = 1 // This won't return an error

// We should initialize a variable with a type
let otherFoundMovie: string; // This will eventually be a string
for(let movie of movies) {
    if (movie === "The Thing") {
        foundMovie = movie;
    }
}