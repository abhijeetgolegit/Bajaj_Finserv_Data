// Datatypes
// Any
// Never
// Unknown
// Primitive
    // Number
    // Boolean
    // String
    // Void
    // Null
    // Undefined
// Array
// Tuple
// Enum

// Variables created are optionally typesafe
// Untyped variable, not typesafe and will not get intellisence
// var a;
// a = 10;
// a = 'abcd'

// // Type Annotation
// let x:number;
// x = 10;

// // Type Inference - describes where and how TypeScript infers types when
// // you don't explicitly annotate them.
// // Implicitly typed
// var data = 10;
// //data = true;

// // Explicitly typed
// var age:number;
// age = 10;
// //age = '10';

// function add(x:any,y:any){
//     return x+y;
// }

// function add(x:number,y:number){
//     return x+y;
// }

// console.log(add(4,5));
// //console.log(add(4,'ABC'));

// // any - a generic type used when a variable's type is unknown or
// // when variable's type hasn't yet beed defined.

// var notSure:any = 4;
// console.log('notSure '+notSure+' typeof notSure '+typeof notSure);
// notSure = 'may be a string';
// console.log('notSure '+notSure+' typeof notSure '+typeof notSure);


// // unknown is a typesafe counterpart of any

// let vAny:any = 10;
// let vUnknown:unknown = 10;

// console.log('vUnknown '+vUnknown+' typeof vUnknown '+typeof vUnknown);
// vUnknown = 'abcd';
// console.log('vUnknown '+vUnknown+' typeof vUnknown '+typeof vUnknown);

// vAny.method();
// // vUnknown.method();

// never - we can detect unreachable code or check if a function didnot
//return anything when it is supposed to be.

function throwError(errorMsg:string):never{
    console.log('Inside throwError!');
    throw new Error(errorMsg);
}

function keepProcessing():never{
    while(true){
        console.log('I always does something and never ends!');
    }
}

//throwError('Error Message!');
//keepProcessing();
console.log('Last Statement!');