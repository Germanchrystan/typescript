import React from "react";
import { JsxElement } from "typescript";

interface GreeterProps {
    person: string
}

function Greeter({ person }: GreeterProps): JSX.Element { // This type can be inferred
    return <h1>Greetings, {person}</h1>
}

export default Greeter;