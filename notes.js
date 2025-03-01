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
console.log(typeof (names)); //object
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
ourTuple = [5, false, 'Coding God was here'];
// Incorrect initialization of tuple
var newTuple;
// initialized incorrectly which throws an error
//newTuple = [false, 'Coding God was mistaken', 5]; // Error
var nextTuple;
nextTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple); //[ 5, false, 'Coding God was here', 'Something new and wrong' ]
//readonly tuple
var moreTuple = [5, true, 'The Real Coding God'];
//moreTuple.push('Coding God took a day off'); //Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.
//Named Tuples
var namedTuple = [33.3, 57.9];
console.log(namedTuple); //[ 33.3, 57.9 ]
//console.log(x) //Error: Cannot find name 'x'.
//Destructuring Tuples
var graph = [55.2, 41.3];
var first = graph[0], second = graph[1];
console.log(first, second);
