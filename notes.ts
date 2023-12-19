//1. What is TypeScript?
//TypeScript is a syntactic superset of JavaScript which adds static typing.
//This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

//2. Why should I use TypeScript?
//JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
//TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
//For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

//To install TS compiler: npm install typescript --save-dev

//To create tsconfig.json: npx tsc --init
//========================================================================================================

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
    //A. Explicit Type Assignment: writing out the type
    let firstName: string = "Dylan";

    //B. Implicit Type Assignment: TypeScript will "guess" the type, based on the assigned value
    let lastName = "Smith";
    console.log(firstName, lastName)