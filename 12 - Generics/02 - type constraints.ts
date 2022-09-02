interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

printDoubleLength("hello");
printDoubleLength([]);

/*

This could also be done with

function printDoubleLength(thing: Lengthy): number{
    return thing.length * 2;
}

But they may be some case in which we must implement this using generics.
*/