let zero: 0 = 0;
// zero = 2 => ERROR: Type 2 is not assignable to type 0

let mood: "Happy" | "Sad" = "Happy";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

let today: DayOfWeek = "Monday";
// today = "Mon" => ERROR