// // Global Scope
// // Module Scope - local to module(file)
// // Local Scope - Function Scope
// // Block Scope =- within the block using let, const

// // var i = 10;
// // var i = 20;
// // console.log(i);

// // a1 = 'abcd';
// // console.log(a1);
// // var a1; // javascript hoisting - moving declarations at the begining 

// var g = 9;
// function foo(){
//     var l = 5;
//     //var x;
//     //console.log('g '+g+' l '+l+' x '+x);
//     {
//        //var x = 6; // Function level scope because javascript hoisting happens 
//                     // means declaration of var variable is getting hoisted
//                     // at the begining of the function.
//        //x=6;
//        //let x = 6; // block level scope
//        const x = 6; // block level scope

//        console.log('g '+g+' l '+l+' x '+x);
//     }
//   //  console.log('g '+g+' l '+l+' x '+x);
// }

// foo();

// const obj = {
//                 id:10,
//                 name:'Sachin'
//             }

//     obj.id = 20;
// //obj = {} // you can't assign another object to it
// console.log(obj.id+' '+obj.name);
