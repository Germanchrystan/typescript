function square(num){ // num will be any
    num.toUpperCase();
    return num * num;
}

square(3);
square("asd");
square(true);

function properSquare(num: number) {
    return num * num;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
    return `${person} is ${age} years old, and is ${isFunny ? 'very' : 'not'} funny`
}

//============================================================================//
// Default Values
//============================================================================//
function greet(person: string = "stranger") {
    return `Hi there, ${person}`
}

//============================================================================//
// Anonymous Function Contextual Typing
//============================================================================//
const colors = ["red", "green", "blue"];

colors.map(color => { // => We don't need to clarify color: string
    return color.toUpperCase()
})

//============================================================================//
// Void return type
//============================================================================//
function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
    // return "Something" => ERROR
}

//============================================================================//
// Never return type
//============================================================================//
function makeError(msg: string): never {
    throw new Error(msg);
}

function gameLoop() {
    while(true){
        console.log("GAME LOOP RUNNING")
    }
}