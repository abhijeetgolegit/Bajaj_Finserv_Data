

// // // function declaration syntax
// // function foo(){
// //     console.log('inside foo!');
// // }



// // // // function expression syntax
// // var bar = function(){
// //     console.log('inside bar!');
// // };

// // // IIFE - Immediately Invoked Function Expression
// // (function(){
// //   console.log('Initialize and OFF!');
// // }());// IIFE / Self Executing Function


// // (function(){
// //     console.log('Initialize and OFF!');
// // }())

// // var foo = (function(){
// //               return 10;
// //             }());

// // console.log(foo);

// function foo(){
//     // ES5 for in loop
//     // for(let i in arguments)
//     // {
//     //     console.log(arguments[i]);
//     // }

//     // ES2015 for of loop
//     for(let ele of arguments)
//     {
//         console.log(ele);
//     }
//     console.log('Inside foo! ');
// }

// foo();
// foo(3,4);
// foo('abcd',4,65,2.3);


function Average(...args){
    console.log(args);
    if(args.length > 0){
        let sum = args.reduce((total,n)=> total+n);
        return sum/args.length;
    }else
        return 0;
}

console.log('Average is '+Average([1,2,3]));
console.log('Average is '+Average(1,2,3));