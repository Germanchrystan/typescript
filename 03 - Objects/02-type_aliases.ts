//========================================================//
// Type aliases
//========================================================//
type Point = {
    x: number,
    y: number,
}

function doublePoint(point: Point): Point{
    return {x: point.x*2, y: point.y*2}
}

type MyNum = number; // Why would you do this? Maybe clarification. Just an example
let age: MyNum = 34242;
//========================================================//
// Nesting objects
//========================================================//
type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: Credits
}
type Credits = {
    producer: string;
    writer: string;
}

function calculatePayout(song: Song): number{
    return song.numStreams * .0033
}

function printSong(song: Song): void {
    console.log(`
    ${song.title} - ${song.artist}
    producer: ${song.credits.producer}
    writer: ${song.credits.writer}
    `)
}

const song: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 1241251521,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    }
}

printSong(song)
console.log(calculatePayout(song))