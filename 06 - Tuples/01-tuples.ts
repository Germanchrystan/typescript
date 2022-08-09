// Fixed in the length and type
// This array must have three numbers
const color: [number, number, number] = [255, 0, 255];


type HTTPResponse = [number, string];
const success: HTTPResponse = [200, "OK"];
// success[0] = "201"

// We can push more values to a tuple after its creation
success.push(123);

const responses: HTTPResponse[] = [[200, "OK"], [201, "Created"], [404, "Not Found"]]