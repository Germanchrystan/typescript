const emptyArray: [] = [] // We can not add any value inside this array. Not even with push
// emptyArray.push("some value") => ERROR

let anyUsers = [] // Any array infered

const activeUsers: string[] = [];
activeUsers.push("Tony");

const ageList: number[] = [14,51,32]
ageList[0] = 53;

const bools: Array<boolean> = [true, false]

// We can also work with arrays of custom types
type Point = {
    x: number,
    y: number,
}

const coords: Point[] = []
coords.push({x: 23, y: 8})

//==================================================//
// Multidimensional arrays
//==================================================//
const board: string[][] = [
    ["X", "0", "X"],
    ["X", "0", "X"],
    ["X", "0", "X"],
];