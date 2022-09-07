import axios from "axios";
import _ from "lodash";

/*
Axios comes with it only type system, that we can use to our convenience
*/
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

// Inserting User interface into AxiosResponse<any, any> type 'data' generic
axios.get<User>("https://jsonplaceholder.typicode.com/users/1")
.then(res => {
    printUser(res.data)
}) // generic type AxiosResponse<any, any> includes data obj
.catch(err => console.error(err))


// Getting User array
axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
.then(res => {
    res.data.forEach(printUser)
})

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
}

_.sample(undefined)