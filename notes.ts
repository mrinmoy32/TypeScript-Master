//***************** TO RUN .ts FILE FROM NODE Terminal *******************
//A. Using ts-node fileName.ts
//npm install -g ts-node typescript '@types/node'
//ts-node typescript-file.ts
//B. Using typescript compiler by converting .ts file to .js file
//npm install -g typescript
//tsc typescript-file.ts (***to directly change with watch: tsc typescript-file.ts --watch)
//node typescript-file.js
//---------------------------
//To install TS compiler: npm install typescript --save-dev
//To create tsconfig.json: npx tsc --init

//==================================================================================================

//1. What is TypeScript?
//TypeScript is a syntactic superset of JavaScript which adds static typing.
//This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

//2. Why should I use TypeScript?
//JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
//TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
//For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

//========================================================================================================

// The main objective of having types is that we can have static types and intellicense can help
// in coding with method suggestion for that type

// Static Types: TypeScript's static types allow for early detection of type-related errors, improving code reliability and reducing runtime bugs.

// While JavaScript also benefits from IntelliSense in VS Code, TypeScript's explicit type definitions offer more accurate and detailed suggestions, making it easier to write and maintain code

//3. TypeScript Simple Types
//--------------------------------
//There are three main primitives in JavaScript and TypeScript.

// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"

//There are also 2 less common primitives used in later versions of Javascript and TypeScript.

// bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
// symbol - are used to create a globally unique identifier.

//4. Type Assignment
//----------------------------------
// Unlike JS encourages to use only let and const. That's because var declarations are accessible anywhere within their containing function, module, namespace, or global scope

//A. Explicit Type Assignment: writing out the type
let firstName: string = "Dylan";

//B. Implicit Type Assignment: TypeScript will "guess" the type, based on the assigned value
let lastName = "Smith";

console.log(firstName, lastName); //Dylan Smith

//boolean
const myBool: boolean = true;
console.log("myBool: ", myBool);

//number
let myNumber: number;
myNumber = 3;
console.log("myNumber: ", myNumber);

//template string
const sentence = `It is a template string and myBool is ${myBool}, myNumber is ${myNumber}`;
console.log(sentence);

//5. Error In Type Assignment - TypeScript will throw an error if data types do not match.
//-------------------------------------

//let color : string = "Blue"; // type string
//color = 33; // error TS2322: Type 'number' is not assignable to type 'string'

//let color = "Blue"; // inferred to type string
//color = 33; // error TS2322: Type 'number' is not assignable to type 'string'.

//********* JavaScript will not throw an error for mismatched types.**********

//6. TypeScript Special Types: TypeScript has special types that may not refer to any specific type of data.
//--------------------------------------

//A> Type: any - any is a type that disables type checking and effectively allows all types to be used.
//Example without any
//let u = true;
//u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
//Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
//Example with any
let v: any = true;
v = "string"; // no error as it can be "any" type
console.log(Math.round(v)); // no error as it can be "any" type //Output: NaN

//B. Type: unknown - unknown is a similar, but safer alternative to any.
//C. Type: never - never effectively throws an error whenever it is defined.
//let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
//D. Type: undefined & null - undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
//These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
let y: undefined = undefined;
console.log(y);
let z: null = null;
console.log(z);

//7. TypeScript Arrays: TypeScript has a specific syntax for typing arrays.
//---------------------------------------

const names: string[] = [];
console.log(typeof names); //object
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

//readonly
// const colors: readonly string[] = ["Blue"];
// colors.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
//Type Inference: TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number = numbers[3]; // no error
console.log(head);

//8. TypeScript Tuples: A tuple is a typed array with a pre-defined length and types for each index.
//------------------------------------------
//Tuples are great because they allow each element in the array to be a known type of value

// simple Tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, "Coding God was here"];

// Incorrect initialization of tuple
let newTuple: [number, boolean, string];
// initialized incorrectly which throws an error
//newTuple = [false, 'Coding God was mistaken', 5]; // Error

let nextTuple: [number, boolean, string];
nextTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple); //[ 5, false, 'Coding God was here', 'Something new and wrong' ]

//readonly tuple
const moreTuple: readonly [number, boolean, string] = [
  5,
  true,
  "The Real Coding God",
];
//moreTuple.push('Coding God took a day off'); //Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.

//Named Tuples
const namedTuple: [x: number, y: number] = [33.3, 57.9];
console.log(namedTuple); //[ 33.3, 57.9 ]
//console.log(x) //Error: Cannot find name 'x'.

//Destructuring Tuples
const graph: [number, number] = [55.2, 41.3];
const [first, second] = graph;
console.log(first, second);

//9. TypeScript Object Types: TypeScript has a specific syntax for typing Object.
//---------------------------------------

const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

console.log(car)

//Type Inference
//TypeScript can infer the types of properties based on their values.

const bike = {model: "Apache 4v"}
bike.model = "pulsar 220" // no error
console.log(bike)
// bike.model = 2024 // "Type 'number' is not assignable to type 'string'.

// In TS object all the properties should be present and according to the type else will get error
// To have optional properties use ?

const mobile: {brand: string, year?: number} = {brand: "Samsung"} // no error
console.log(mobile) // { brand: 'Samsung' }
mobile.year = 2023
console.log(mobile) // { brand: 'Samsung', year: 2023 }

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

const modelYearMap: {[index: string]: number} = {};
modelYearMap.realme_3pro = 2018
console.log(modelYearMap)
// modelYearMap.samsung_s24 = "2024" // error: Type 'string' is not assignable to type 'number'.


// In TypeScript, null and undefined are subtypes of all other types.
// This means you can assign null or undefined to variables of type number, string, or boolean.
// The above statement was true in older versions of TypeScript (before TypeScript 2.0)

// let isNew: boolean = null; // ❌ Error: Type 'null' is not assignable to type 'boolean'.
// let myName: string = undefined; // ❌ Error: Type 'undefined' is not assignable to type 'string'.

// ✅ Correct way in strict mode: explicitly define the type using a union

let isNew2: boolean | null = null;
let myName2: boolean | undefined = undefined;

//--------------------------- Enum ----------------------
// Enums allow defining a set of named constants.

// Numeric Enum ------------------
enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction.Up);    // Output: 1
console.log(Direction.Right); // Output: 4 (auto-incremented)

// ✅ Useful for flags, indexes, or numeric values that require auto-incrementing.

enum StatusCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized,   // 401 (auto-incremented)
  Forbidden       // 402 (auto-incremented)
}

let responseStatusCode: StatusCode;
responseStatusCode = StatusCode.Unauthorized;
console.log(responseStatusCode); // Output: 401


// String Enum ----------------------
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING"
}

console.log(Status.Success); // Output: "SUCCESS"
console.log(Status.Pending); // Output: "PENDING"

let orderStatus: Status = Status.Success;
console.log(orderStatus); // Output: "SUCCESS"
// orderStatus = "Done" // Error: Type '"Done"' is not assignable to type 'Status'

// Example Alternative with Union Types (if enums feel overkill): ------------------------
type RequestStatus = "SUCCESS" | "FAILURE" | "PENDING";
let orderRequestStatus: RequestStatus = "SUCCESS";

//Enum ensures (Strict Type Checking) ------------------
// ✅ Prevents incorrect assignments by ensuring only predefined values are used.

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let userRole: Role;
userRole = Role.Admin; // ✅ Allowed
// userRole = "SuperUser"; // ❌ Error: Type '"SuperUser"' is not assignable to type 'Role'.

// Heterogeneous Enum (Mixed values) ------------------
enum Result {
  Pass = "PASS",
  Fail = 0
}

console.log(Result.Pass); // Output: "PASS"
console.log(Result.Fail); // Output: 0

//  Reverse Mapping (For Numeric Enums) -----------
enum StatusCode {
  Success = 1,
  Failure = 2
}

console.log(StatusCode.Success);  // Output: 1
console.log(StatusCode[1]);       // Output: "Success" (Reverse mapping)

// Enums can be looped over, which is not possible with normal objects.
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

// Looping over enum values
for (let color in Colors) {
  console.log(color, Colors[color as keyof typeof Colors]);
}


//----------------- Union of Types -----------------
let multiType: number | boolean;
multiType = 20;
multiType = true;

//----------------- Any Type -----------------
let anyType: any;
anyType = 20;
anyType = true;
anyType = "Hello";

// The 'any' type doesn't provide IntelliSense support.

// ------------------- Casting with as ---------------

let x: unknown = 'hello';
console.log((x as string).length);

let x2: unknown = 4;
console.log((x2 as string).length); // prints undefined since numbers don't have a length

// ------------------- Casting with <> ---------------

let x3: unknown = 'hello';
console.log((<string>x3).length);



//---------------- Functions -----------------
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(5, 10);
// add(5); // Error: Expected 2 arguments but got 1

//---------------- Optional Parameters -----------------
// Optional parameters should be placed after required parameters.
// If no value is provided for an optional parameter, it defaults to undefined.

function addOptional(num1: number, num2?: number): number {
    if (num2 !== undefined) 
        return num1 + num2;
    else 
        return num1;
}

addOptional(5, 10);
addOptional(5); // No error, num2 defaults to undefined

//---------------- Default Parameters -----------------
function addDefault(num1: number, num2: number = 10): number {
    return num1 + num2;
}

addDefault(5, 20); // Output: 25
addDefault(5);     // Output: 15

//---------------- Interface ---------------------
// It is possible to specify an object type in TypeScript.

// Bad practice: Defining an object type directly in a function parameter.
function greet(person: { firstName: string; lastName: string }) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: "Virat",
    lastName: "Kohli"
};

greet(p);

// Using an interface is a better approach as it makes the code more maintainable.

interface Person {
    firstName: string;
    lastName: string;
}

function greet2(person: Person) {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
}

let p2: Person = {
    firstName: "Rohit",
    lastName: "Sharma"
};

greet2(p2);

// It is also possible to make properties optional, which is useful for form submissions where not all fields are required.
interface NewPerson {
    firstName: string;
    lastName?: string;
}

//---------------- Classes & Access Modifiers -----------------
// Similar to ES6, TypeScript also allows defining and using classes.
// Access Modifiers are keywords that sets the accessiblity of properties and methods of a class
// public, private, protected

// Modifier	           |  Access Level
// --------------------|------------------------------------------------
// public (default)	   |  Accessible from anywhere
// private	           |  Accessible only inside the class (not event in it's instances)
// protected	         |  Accessible inside the class and its subclasses (but not in their instances)


// ----------- Public ------------------
class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet(): string {   // public by default as no access modifier is specified
        return `Hi, ${this.employeeName}`;
    }
}

let emp1 = new Employee("Pal");
console.log(emp1.employeeName);
console.log(emp1.greet());

//---------------- Inheritance in TS -----------------
// Allows a child class to inherit properties and methods from a parent class.
// Supports method overriding.


class Manager extends Employee {
    constructor(managerName: string) { // To initialize the base Employee class constructor
        super(managerName); 
    }

    delegateTask(): string {
        return `Manager delegating task`;
    }
}

let manager = new Manager("John");
console.log(manager.employeeName);
console.log(manager.delegateTask());
console.log(manager.greet());


// ----------- Private -------------
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }

  public getBalance(): number {
    return this.balance; // ✅ Allowed inside class
  }
}

const myAccount = new BankAccount(1000);
console.log(myAccount.getBalance()); // ✅ Allowed (via method)
// console.log(myAccount.balance); // ❌ Error: Property 'balance' is private.

// ---------- Protected ---------------

class Police {
  protected empId: number;

  constructor(empId: number) {
    this.empId = empId;
  }

  protected showId(): void {
    console.log(`Employee ID: ${this.empId}`);
  }
}

class Officer extends Police {
  constructor(empId: number) {
    super(empId);
  }

  public display(): void {
    this.showId(); // ✅ Allowed (protected method)
  }
}

const policeOfficer = new Officer(101);
policeOfficer.display(); // ✅ Allowed
// console.log(policeOfficer.empId); // ❌ Error: Property 'empId' is protected.


//------------ Readonly Properties (readonly) --------------
// Prevents modification after initialization (at runtime).
// Can be public, private, or protected.

class Car {
  readonly model: string;

  constructor(model: string) {
    this.model = model;
  }

  changeModel(newModel: string) {
    // this.model = newModel; // ❌ Error: Cannot assign to 'model' because it is a read-only property.
  }
}

const myCar = new Car("Tesla Model S");
console.log(myCar.model); // ✅ Allowed
// myCar.model = "BMW"; // ❌ Error


// ================Additional topics ===============:
//--------------------------------------
// Getters & Setters:

// Abstraction in TypeScript: Abstraction is hiding the implementation details and only showing the essential features.TypeScript supports abstraction using abstract classes.
// ✅ Benefits of Abstraction
// ✔ Forces subclasses to implement certain methods.
// ✔ Reduces code duplication.
// ✔ Increases maintainability.

abstract class Animal {
  abstract makeSound(): void; // Abstract method (must be implemented)

  public move(): void {
    console.log("The animal is moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}

const myDog = new Dog();
myDog.makeSound(); // Output: Woof! Woof!
myDog.move(); // Output: The animal is moving...

const myCat = new Cat();
myCat.makeSound(); // Output: Meow! Meow!


// Encapsulation in TypeScript:  Encapsulation means hiding the internal details of a class and allowing access only through methods.
// ✅ Benefits of Encapsulation
// ✔ Prevents direct modification of class properties.
// ✔ Provides controlled access via getters and setters.
// ✔ Protects data integrity.

// 🔹 Example: Encapsulation with private Properties (above BankAccount example)

// Polymorphism in TypeScript: Polymorphism means "many forms"—a method can behave differently based on the object that calls it.

// ✅ Benefits of Polymorphism
// ✔ Enables code reusability.
// ✔ Allows dynamic method behavior.
// ✔ Simplifies code maintenance.
// 🔹 Example: Method Overriding (Runtime Polymorphism)

class Shape {
  public draw(): void {
    console.log("Drawing a shape...");
  }
}

class Circle extends Shape {
  public draw(): void {
    console.log("Drawing a circle...");
  }
}

class Square extends Shape {
  public draw(): void {
    console.log("Drawing a square...");
  }
}

let shapes: Shape[] = [new Circle(), new Square(), new Shape()];

shapes.forEach(shape => {
  shape.draw();
});


// -------------- TypeScript Generics ------------

// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}

let value = new NamedValue<number>('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10

// Generics in type aliases allow creating types that are more reusable.
type Wrapped<T = string> = { value: T }; // T has an optional default value of string

const wrappedValue: Wrapped<number> = { value: 10 };

// -------------------Type Aliases--------------------

// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
// type CarYear = number
// type CarType = string
// type CarModel = string
// type Car = {
//   year: CarYear,
//   type: CarType,
//   model: CarModel
// }

// const carYear: CarYear = 2001
// const carType: CarType = "Toyota"
// const carModel: CarModel = "Corolla"
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel
// };