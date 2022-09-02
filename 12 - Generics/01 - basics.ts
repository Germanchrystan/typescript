function getRandomElement<T>(list: T[]): T {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

getRandomElement<string>(["a", "b", "c"]);
getRandomElement<number>([71, 44, 23, 47, 35]);
// Generic types can be inferred
getRandomElement([true, false]) // T is boolean