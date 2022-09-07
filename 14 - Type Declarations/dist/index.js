"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var lodash_1 = __importDefault(require("lodash"));
// Inserting User interface into AxiosResponse<any, any> type 'data' generic
axios_1.default.get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    printUser(res.data);
}) // generic type AxiosResponse<any, any> includes data obj
    .catch(function (err) { return console.error(err); });
// Getting User array
axios_1.default.get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
    res.data.forEach(printUser);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
}
lodash_1.default.sample(undefined);
