
// // REST Parameter - Aggregate all the remaining parameters into a single variable

// // Variiable Argument function
// function Average(...args:number[]):number{
//     if(args.length > 0){
//         let sum = args.reduce((total,n)=> total+n);
//         return sum/args.length;
//     }else
//         return 0;
// }

// // console.log('Average is '+Average([11,22,33,44]));
// // console.log('Average is '+Average([11,22]));

// console.log('Average is '+Average());
// console.log('Average is '+Average(1,2,3));
// console.log('Average is '+Average(11,22,33,44));
// // REST Parameter
// // Whenever you will have ... (ellipsis) is on the left hand side
// // of an assignment operator i.e. REST Parameter.

// // Spread Operator

// let str = "abcd";
// console.log(str);
// console.log(...str);

// let arr = [1,2,3,4,5];
// console.log('Average is '+Average(...arr));

// // Spread Operator
// // Whenever you will have ... (ellipsis) is on the right hand side
// // of an assignment operator i.e. Spread Operator.

// let newArr = [...arr, 6,7,8];
// console.log(newArr);

// In TypeScript, REST and Spread can be used with an Array and an Object Type

// // Array Spread
// var numArr1 = [10,20,30,40,[50,60]];

// // // Reference Copy
// //  var numArr2 = numArr1;

// // // Shallow Copy
// // var numArr2 = [...numArr1];

// // // Deep Copy
//  var numArr2 = JSON.parse(JSON.stringify(numArr1));

// numArr1[0] = 11;
// numArr2[0] = 1000;

// console.log('numArr 1', numArr1);
// console.log('numArr 2', numArr2);
// (numArr2[4] as Number[])[0] = 5000;

var numArr1 = [10,20,30,40,50];

// Destructuring - Javascript expression that allows to unpack values from
// arrays or properties from objects, into distinct variables

// var x = numArr1[0];
// var y = numArr1[1];

// console.log(x+' '+y);

// var [x, ,y] = numArr1;
// console.log(x+' '+y);

// var [x, y, ...z] = numArr1;
// console.log('x '+x+' y '+y+' z '+z);

var emp1 = {id:100,name:'Aayush',address:{city:'Delhi'}};
//console.log(emp1);

// // Reference Copy
// var emp2 = emp1;

// // Shallow Copy
// var emp2 = {...emp1};

// // Deep Copy
// var emp2 = JSON.parse(JSON.stringify(emp1 ));

// emp2.id = 200;
// emp2.address.city = 'Pune';


// console.log('Employee 1 '+JSON.stringify(emp1));
// console.log('Employee 2 '+JSON.stringify(emp2));


var emp = {id:100,ename:'Manish',state:'Maharashtra',
    city:'Pune', pincode:411038};

    // var {id,ename} = emp;
    // console.log(id+' '+ename);

    var {id,ename,...address} = emp;
    console.log(id+' '+ename);
    console.log(address)
