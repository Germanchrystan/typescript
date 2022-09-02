function makeEmptyArray<T = number>(): T[] {
    return [];
}

const arr = makeEmptyArray(); // By default this will be an array of numbers
const arr2 = makeEmptyArray<boolean>();