//===============================================//
// Type intersection
//===============================================//

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "Yellow"
}

//---------------------------------------------------//
/*
Types can be intersections between in line types as well.
This is a little clunky, but it can be used.
*/
//---------------------------------------------------//
type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & {
    age: number;
}

const chisty: CatDog = {
    numLives: 6,
    breed: 'Husky',
    age: 9
}