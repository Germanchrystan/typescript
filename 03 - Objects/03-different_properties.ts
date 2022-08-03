//=============================================
// Optional properties
//=============================================
type dimensionalPoint = {
    x: number;
    y: number;
    z?: number
}

const myPoint: dimensionalPoint = {x: 1, y: 3}; // z property is optional

//=============================================
// Read only
//=============================================
type User = {
    readonly id: number // This object is read only
    username: string;
}


const user: User = {
    id: 12414212,
    username: "Catgurl"
}

// user.id = 21414 => ERROR: read-only property