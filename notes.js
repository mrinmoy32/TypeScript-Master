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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var firstName = "Dylan";
//B. Implicit Type Assignment: TypeScript will "guess" the type, based on the assigned value
var lastName = "Smith";
console.log(firstName, lastName); //Dylan Smith
//boolean
var myBool = true;
console.log("myBool: ", myBool);
//number
var myNumber;
myNumber = 3;
console.log("myNumber: ", myNumber);
//template string
var sentence = "It is a template string and myBool is ".concat(myBool, ", myNumber is ").concat(myNumber);
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
var v = true;
v = "string"; // no error as it can be "any" type
console.log(Math.round(v)); // no error as it can be "any" type //Output: NaN
//B. Type: unknown - unknown is a similar, but safer alternative to any.
//C. Type: never - never effectively throws an error whenever it is defined.
//let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
//D. Type: undefined & null - undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
//These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.
var y = undefined;
console.log(y);
var z = null;
console.log(z);
//7. TypeScript Arrays: TypeScript has a specific syntax for typing arrays.
//---------------------------------------
var names = [];
console.log(typeof names); //object
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
//readonly
// const colors: readonly string[] = ["Blue"];
// colors.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
//Type Inference: TypeScript can infer the type of an array if it has values.
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers[3]; // no error
console.log(head);
//8. TypeScript Tuples: A tuple is a typed array with a pre-defined length and types for each index.
//------------------------------------------
//Tuples are great because they allow each element in the array to be a known type of value
// simple Tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// Incorrect initialization of tuple
var newTuple;
// initialized incorrectly which throws an error
//newTuple = [false, 'Coding God was mistaken', 5]; // Error
var nextTuple;
nextTuple = [5, false, "Coding God was here"];
// We have no type safety in our tuple for indexes 3+
ourTuple.push("Something new and wrong");
console.log(ourTuple); //[ 5, false, 'Coding God was here', 'Something new and wrong' ]
//readonly tuple
var moreTuple = [
    5,
    true,
    "The Real Coding God",
];
//moreTuple.push('Coding God took a day off'); //Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.
//Named Tuples
var namedTuple = [33.3, 57.9];
console.log(namedTuple); //[ 33.3, 57.9 ]
//console.log(x) //Error: Cannot find name 'x'.
//Destructuring Tuples
var graph = [55.2, 41.3];
var first = graph[0], second = graph[1];
console.log(first, second);
//9. TypeScript Object Types: TypeScript has a specific syntax for typing Object.
//---------------------------------------
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009,
};
console.log(car);
//Type Inference
//TypeScript can infer the types of properties based on their values.
var bike = { model: "Apache 4v" };
bike.model = "pulsar 220"; // no error
console.log(bike);
// bike.model = 2024 // "Type 'number' is not assignable to type 'string'.
// In TS object all the properties should be present and according to the type else will get error
// To have optional properties use ?
var mobile = { brand: "Samsung" }; // no error
console.log(mobile); // { brand: 'Samsung' }
mobile.year = 2023;
console.log(mobile); // { brand: 'Samsung', year: 2023 }
// Index Signatures
// Index signatures can be used for objects without a defined list of properties.
var modelYearMap = {};
modelYearMap.realme_3pro = 2018;
console.log(modelYearMap);
// modelYearMap.samsung_s24 = "2024" // error: Type 'string' is not assignable to type 'number'.
// In TypeScript, null and undefined are subtypes of all other types.
// This means you can assign null or undefined to variables of type number, string, or boolean.
// The above statement was true in older versions of TypeScript (before TypeScript 2.0)
// let isNew: boolean = null; // ❌ Error: Type 'null' is not assignable to type 'boolean'.
// let myName: string = undefined; // ❌ Error: Type 'undefined' is not assignable to type 'string'.
// ✅ Correct way in strict mode: explicitly define the type using a union
var isNew2 = null;
var myName2 = undefined;
//--------------------------- Enum ----------------------
// Enums allow defining a set of named constants.
// Numeric Enum ------------------
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // Output: 1
console.log(Direction.Right); // Output: 4 (auto-incremented)
// ✅ Useful for flags, indexes, or numeric values that require auto-incrementing.
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["Forbidden"] = 402] = "Forbidden"; // 402 (auto-incremented)
})(StatusCode || (StatusCode = {}));
var responseStatusCode;
responseStatusCode = StatusCode.Unauthorized;
console.log(responseStatusCode); // Output: 401
// String Enum ----------------------
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
    Status["Pending"] = "PENDING";
})(Status || (Status = {}));
console.log(Status.Success); // Output: "SUCCESS"
console.log(Status.Pending); // Output: "PENDING"
var orderStatus = Status.Success;
console.log(orderStatus); // Output: "SUCCESS"
var orderRequestStatus = "SUCCESS";
//Enum ensures (Strict Type Checking) ------------------
// ✅ Prevents incorrect assignments by ensuring only predefined values are used.
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var userRole;
userRole = Role.Admin; // ✅ Allowed
// userRole = "SuperUser"; // ❌ Error: Type '"SuperUser"' is not assignable to type 'Role'.
// Heterogeneous Enum (Mixed values) ------------------
var Result;
(function (Result) {
    Result["Pass"] = "PASS";
    Result[Result["Fail"] = 0] = "Fail";
})(Result || (Result = {}));
console.log(Result.Pass); // Output: "PASS"
console.log(Result.Fail); // Output: 0
//  Reverse Mapping (For Numeric Enums) -----------
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 1] = "Success";
    StatusCode[StatusCode["Failure"] = 2] = "Failure";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Success); // Output: 1
console.log(StatusCode[1]); // Output: "Success" (Reverse mapping)
// Enums can be looped over, which is not possible with normal objects.
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
// Looping over enum values
for (var color in Colors) {
    console.log(color, Colors[color]);
}
//----------------- Union of Types -----------------
var multiType;
multiType = 20;
multiType = true;
//----------------- Any Type -----------------
var anyType;
anyType = 20;
anyType = true;
anyType = "Hello";
// The 'any' type doesn't provide IntelliSense support.
//---------------- Functions -----------------
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// add(5); // Error: Expected 2 arguments but got 1
//---------------- Optional Parameters -----------------
// Optional parameters should be placed after required parameters.
// If no value is provided for an optional parameter, it defaults to undefined.
function addOptional(num1, num2) {
    if (num2 !== undefined)
        return num1 + num2;
    else
        return num1;
}
addOptional(5, 10);
addOptional(5); // No error, num2 defaults to undefined
//---------------- Default Parameters -----------------
function addDefault(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
addDefault(5, 20); // Output: 25
addDefault(5); // Output: 15
//---------------- Interface ---------------------
// It is possible to specify an object type in TypeScript.
// Bad practice: Defining an object type directly in a function parameter.
function greet(person) {
    console.log("Hello ".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Virat",
    lastName: "Kohli"
};
greet(p);
function greet2(person) {
    console.log("Hello ".concat(person.firstName, " ").concat(person.lastName));
}
var p2 = {
    firstName: "Rohit",
    lastName: "Sharma"
};
greet2(p2);
//---------------- Classes & Access Modifiers -----------------
// Similar to ES6, TypeScript also allows defining and using classes.
// Access Modifiers are keywords that sets the accessiblity of properties and methods of a class
// public, private, protected
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        return "Hi, ".concat(this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Pal");
console.log(emp1.employeeName);
console.log(emp1.greet());
//---------------- Inheritance -----------------
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateTask = function () {
        return "Manager delegating task";
    };
    return Manager;
}(Employee));
var manager = new Manager("John");
console.log(manager.employeeName);
console.log(manager.delegateTask());
console.log(manager.greet());
