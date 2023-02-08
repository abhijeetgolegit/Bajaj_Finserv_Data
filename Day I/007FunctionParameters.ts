// In TypeScript, function parameters are required and you cannot pass extra
// arguments to the function

// function hello_typescript(name:string){
//     console.log('Hello '+name);
// }

// //hello_typescript();
// hello_typescript('Abhijeet');
// //hello_typescript(33);
// //hello_typescript('Abhijeet',41);

// Optional Parameters
// A required parameter cannot follow optional parameter

// function Add(x?:number,y?:number):number{
//     x = x || 0;
//     y = y || 0;
//     return x+y;
// }

// Default Parameters
// A required parameter cannot follow a default parameter
function Add(x:number=0,y:number=0):number{
    return x+y;
}
console.log(Add(3,4)); 
console.log(Add(3)); 
console.log(Add());   



