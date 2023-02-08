

// // Function Declaration syntax - it is getting hoisted

// foo();

// function foo(){
//     console.log('Inside foo!');
// }

// foo();
// // Function Expression syntax - not getting hoisted

// bar();

// var bar = function(){
//     console.log('Inside bar!');
// }

// bar();

// Lambda Expression / Arrow Function

// Func Decln
let hello: ()=>void;

// Func Defn
hello = () => {
    console.log('Welcome to Arrow Function!');
}

// Function call
hello();

let multiplication = function(x:number,y:number):number{
    return x*y;
}

let mult = (x:number,y:number):number => x*y; // Lambdra Expression

let multiply = (x:number,y:number):number => {
    console.log('Inside multiply!');
    return x*y;
}
console.log('Result is '+multiplication(4,5));
console.log('Result is '+mult(4,5));
console.log('Result is '+multiply(4,5));