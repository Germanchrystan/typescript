# Array Types
Arrays cam be typed using a type annotation followed by empty array brackets, like `number[]` for an array of numbers.
These arrays only allow data of that one type inside them.

~~~ts
let names: string[] = ["hello", "world"];
let ages: number[] = [24, 32, 19, 29];

// Alternate syntax
let names: Array<string> = ["hello", "world"];
let ages: Array<number> = [24, 32, 19, 29];
~~~