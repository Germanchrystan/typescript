# Objects
Objects can be typed by declaring what the object should look like in the annotation.
Accessing a property that isn't defined or performing operations without keeping types in mins will throw errors!
~~~ts
// A function with an object type parameter
const printName = (name: {first: string; last: string}) => {
    return `Name: ${first} ${last}`
}
~~~

## Type Alias
INstead of writing out object types in an annotation, we can declare them separately in a type alias, which is simply the desired shape of an object. This allows us to make our code more readable and even reuse the types elsewhere in our code. 
~~~ts
type Person = {
    name: string;
    age: number;
}

const sayHappyBirthday = (person: Person) = {
    return `Hey ${person.name}, congrats on turning ${person.age}!`
}

sayHappyBirthday({name: "Jerry", age: 42})
~~~
These types can be nested as well
~~~ts
const describePerson = (person: {
    name: string;
    age: number;
    parentNames: {
        mom: string;
        dad: string;
    }
}) => {
    return `Person: ${name},
    Age: ${age},
    parents: ${parentNames.mom}, ${parentNames.dad}`;
}
~~~