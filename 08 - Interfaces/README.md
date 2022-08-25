# Interfaces
Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax), We can use them to create reusable, modular types that describe the shapes of objects.

~~~ts
interface Person{
    name: string;
    age: number;
};

// Use the same type alias in annotation
const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${age}`
}

sayHappyBirthday({name: 'Jerry', age: 42});
~~~

Interfaces can behave in a very similar to Type Aliases
~~~ts
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
}
~~~
But we can use interfaces to describe the methods a type has
~~~ts
interface PersonInterface {
    sayHi: (name: string) => string;
    greet(): string; // Both ways of describing a method
}
~~~

## Interfaces vs Type Aliases
- Adding new properties: One thing we can do with interfaces is reopen and add new properties to interfaces after we have already described them.
This can't be done with types.

Imagine you might have an interface described in a file somewhere else, or coming from a third party library even, and you want to add something on to it, but you don't want to overwrite and eliminate everything.

~~~ts
interface Dog {
    name: string;
    age: number;

}

interface Dog {
    breed: string;
    bark(): string;
}

const gandalf: Dog = {
    name: "Gandalf",
    age: 9,
    breed: "NewFoundland",
    bark(){
        return "Woof";
    }
}
~~~ 

- Shape of an Object: Interfaces can only describe the shape of an object. We can't use interfaces to describe, for example, a literal.

~~~ts
type Color = "red" | "green" // We can't do this with an interface
~~~

- Extending Properties: We can extend interfaces. With types we could accomplish a similar thing using intersection types
~~~ts
// Extending Interfaces
interface Name {
    name: string;
}

interface Person extends Name {
    age: number;
}
~~~
~~~ts
// Using intersection for types
type Name = {
    name: string;
}

type Person = Name & {
    age: number;
}
~~~