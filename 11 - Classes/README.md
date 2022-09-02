# JavaScript Classes
Classes are templates for creating objects in JavaScript. They contain a few different important pieces which allow for creation and extension of customized (and nicely organized) objects.

~~~js
// Our blueprint for a person
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`
    }
}
// Using our blueprint to make a real person
const jimmy = new Person('Jimmy', 25);
jimmy.greet(); //Hello, my name is Jimmy
~~~

## Private properties
In JavaScript, we have a way of identifying a class property as private by starting its variable name with a `#`.

~~~js
class Player {
    let #score = 0; // private property
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
~~~

It TypeScript we have the keywords `public` and `private` to use as access identifiers. 

~~~ts
class Player {
    public readonly firstName: string;
    public readonly lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;
    }
}
~~~

TypeScript identifiers don't work at runtime, but are cleaner to use, and much more commmon.

## Parameter properties shorthand
By adding access identifiers to the parameters of the constructor, we can save ourselves the trouble of defining the body of the constructor function.
~~~ts
class Player {
    constructor(public first: string, public last: string, private score: number){} // Shorthand!
}
~~~

This example will translate into this 
~~~js
class Player {
    constructor (first, last, score) {
        this.first = first;
        this.last = last;
        this.score = score;
    }
}
~~~

## Protected Modifier
When we create a private property, it is only available to the confines of the class itself, not outside of it, or even within child classes that inherit from the original one. 

~~~ts
class Player {
    private _score: number; // Private property
    constructor (first, last, 0) {
        this.first = first;
        this.last = last;
        this._score = 0;
    }
}

class SuperPlayer extend Player {// An admin player
    isAdmin: boolean = true;
    maxScore(){
        this._score = 999999999; // Error: Property '_score' is private and only accessible within class 'Player'.,
    }
}
~~~

We can make a class property avaible to itself and its child classes with the use of the `protected` modifier

~~~ts
class Player {
    protected _score: number; // protected property
    constructor (first, last, 0) {
        this.first = first;
        this.last = last;
        this._score = 0;
    }
}

class SuperPlayer extends Player { 
    isAdmin: boolean = true;
    maxScore(){
        this._score = 999999999; // Now it can be accessed
    }
}
~~~

## Classes and interfaces
Classes can `implement` an specific interface

~~~ts
interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string);
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string; public color: string){}

    print(){
        console.log(`Brand: ${this.brand} Color: ${this.color}`)
    }
}

const jacket1 = new Jacket("Prada", "red");
~~~

## Abstract classes
With an abstract we define a pattern that must be implemented byu a child class. This looks very similar to how we use interfaces, but a key difference: in abstract classes we can define the shape of some methods, as well as the functionality of others. With interfaces we can only describe the shape. In that sense, an abstract class works as a sort of hybrid. 

~~~ts
abstract class Employee {
    constructor(public first: string, public last: string) {}

    abstract getPay(): number // Shape: This method needs to exist in every class that extends Employee
    greet(){console.log("Hello");} // Functionality: this method is already defined
}

class FullTimeEmployee extends Employee {
    constructor(public first: string, public last: string, private salary: number){
        super(first, last);
    }
    getPay() {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    
    constructor(
        public first: string, 
        public last: string, 
        private hourlyRate: number,
        private hoursWorked: number
    ) {
        super(first, last);
    }
    getPay(): number {
        return this.hourlyRate * this.hoursWorked;
    }
}
~~~
