// Typescript supports function overloading

// function hello(){
//     console.log('Hello World!');
// }

// hello();
// hello('Sourav');

function hello():void;
function hello(name:string):void;

function hello(...args:string[]){
   if(args.length === 0){
    console.log('Hello World!');
   }
   else if(args.length === 1){
    console.log(`Hello ${args[0]}`);
   }
}

hello();
hello('Sourav');