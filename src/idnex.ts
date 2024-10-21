let number: number = 10;
let isValid: boolean = true;

// Array
const array: number[] = [1, 2, 3];
let user: [string, number] = ["1", 150];

//  Enums
enum size {
  small = 0,
  medium = 1,
  large = 2,
}

let mySize: size = size.medium;

console.log(mySize);

// functions
function renderSting(number: number, isValid: boolean): string | undefined {
  if (isValid) return `this is ${number} `;
  return undefined;
}

// object

let employee: {
  readonly id: number;
  name: string;
  date: (date: Date) => void;
} = {
  id: 1,
  name: "matin",
  date: (date: Date) => console.log(date),
};

// if read only
// employee.id= 0

// ? Advanced Types

// ? 1- aliases type

type Employee = {
  readonly id: number;
  name: string;
  date: (date: Date) => void;
};

let newEmployee: Employee = {
  id: 2,
  name: "Matin2",
  date: (date: Date) => console.log(date),
};

// ? 2 - union type
function kgToLbs(weight: number | string): number {
  if (typeof weight === "string") {
    return parseInt(weight) * 1.2;
  }
  return weight * 1.2;
}

// ? 3 - narrowing type
type Narrowing = string | number;

let narrowing: Narrowing = 10;

if (typeof narrowing === "string") {
  console.log(parseInt(narrowing));
} else {
  console.log(narrowing);
}

// ? 4 - Intersection type

type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

// combine those types
type UiWidth = Draggable & Resizable;

// ? 5 Literal Type

type Quantity = 50 | 100;

const quantity: Quantity = 50;

// ? 6 - Nullable Types

function greet(name: string | null | undefined) {
  console.log(name);
}

// greet(null)

// ? 7- optional types

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

// optional  element access
// customer[0] => customer?.[0]
let customer: string[] = ["matin"];
customer?.[0];

//? 8- nullish
let rider = (speed: number) => {
  return { speed: speed ?? 300 };
};

// ? 9- Assertion
let phone = <HTMLInputElement>document.getElementById("test");
console.log(phone.TEXT_NODE)

//? 10 unknown types 
function render (document : unknown) {
    // if(document.instanceof())
}


//? 11 => never type

function prevent () : never {
    while(true){
        console.log("test")
    }
}
