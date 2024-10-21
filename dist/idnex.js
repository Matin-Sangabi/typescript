"use strict";
let number = 10;
let isValid = true;
// Array
const array = [1, 2, 3];
let user = ["1", 150];
//  Enums
var size;
(function (size) {
    size[size["small"] = 0] = "small";
    size[size["medium"] = 1] = "medium";
    size[size["large"] = 2] = "large";
})(size || (size = {}));
let mySize = size.medium;
console.log(mySize);
// functions
function renderSting(number, isValid) {
    if (isValid)
        return `this is ${number} `;
    return undefined;
}
// object
let employee = {
    id: 1,
    name: "matin",
    date: (date) => console.log(date),
};
let newEmployee = {
    id: 2,
    name: "Matin2",
    date: (date) => console.log(date),
};
// ? 2 - union type
function kgToLbs(weight) {
    if (typeof weight === "string") {
        return parseInt(weight) * 1.2;
    }
    return weight * 1.2;
}
let narrowing = 10;
if (typeof narrowing === "string") {
    console.log(parseInt(narrowing));
}
else {
    console.log(narrowing);
}
const quantity = 50;
// ? 6 - Nullable Types
function greet(name) {
    console.log(name);
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
// optional  element access
// customer[0] => customer?.[0]
let customer = ["matin"];
customer === null || customer === void 0 ? void 0 : customer[0];
//? 8- nullish
let rider = (speed) => {
    return { speed: speed !== null && speed !== void 0 ? speed : 300 };
};
// ? 9- Assertion
let phone = document.getElementById("test");
console.log(phone.TEXT_NODE);
//? 10 unknown types 
function render(document) {
    // if(document.instanceof())
}
//? 11 => never type
function prevent() {
    while (true) {
        console.log("test");
    }
}
