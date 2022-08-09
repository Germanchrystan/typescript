let age: number | string = 21; // We shouldn't add many types though.
age = 23;
age = "24";

type MapPoint = {
    x: number;
    y: number;
}

type MapLocation = {
    lat: number;
    long: number;
}

let coordinates: MapPoint | MapLocation = { x: 1, y: 32 };
coordinates = { lat: 332.13, long: 123.32 };
