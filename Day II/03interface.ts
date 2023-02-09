// const area = function (rect: { h: number, w?: number }) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1 = {h:20,w:10};
// console.log(area(s1));

// let s2 = {h:20,w:10,d:30};
// console.log(area(s2));

// let s3 = {h:20,d:30};
// console.log(area(s3));


// // Type Alias

// type Shape = { h: number, w?: number };

// const area = function (rect:Shape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1:Shape = {h:20,w:10};
// console.log(area(s1));

// let s2:Shape = {h:20};
// console.log(area(s2));

// let s3:Shape = {h:20,w:30};
// console.log(area(s3));

// Interfaces and Type alias are very similar and you can choose freely between them.
// Use tyupe aliases wehn defining primitive, union, intersection, function or tupe types.
// User of interfaces when defining object types or to take advantage of declaration merging.

// interface IShape{ 
//     h: number, 
//     w?: number 
// };

// const area = function (rect:IShape) {
//     rect.w = rect.w || rect.h;
//     return rect.h * rect.w;
// }

// let s1:IShape = {h:20,w:10};
// console.log(area(s1));

// let s2:IShape = {h:20};
// console.log(area(s2));

// let s3:IShape = {h:20,w:30};
// console.log(area(s3));

// interface IPerson{
//     name:string;
//     age:number;
//     greet(message:string):string;
// }

// let p1:IPerson = {
//     name:'Abhijeet',
//     age:40,
//     greet:function(m){
//         return "Hello";
//     }
// }


// let p2:IPerson = {
//     name:'Aayush',
//     age:22,
//     greet:function(m){
//         return "Hola";
//     }
// }

// console.log(p1.greet('s'));
// console.log(p2.greet('s'));

//  type Person = {
//     name:string;
//     age:number;
//     greet(message:string):string;
// }

// let p3:Person = {
//     name:'Manish',
//     age:41,
//     greet:function(m){
//         return "Hi";
//     }
// }

// console.log(p3.greet('s'));

// Declaration Merging

// // Type Alias

// type Shape = {
//     height:number;
// }

// type Shape = {
//     width:number;
// }

// // Interface Declaration Merging works only with the interface

// interface IShape{
//     height:number;
// }

// interface IShape{
//     width:number;
// }

// let s1:IShape = {height:20,width:25};


interface ICustomer{
    doShopping():string;
}

interface IEmployee{
    doWork():string;
}

// Union (TypeGuard)

var person1: ICustomer | IEmployee;

//Type Alias

type ICustOrEmp = ICustomer | IEmployee;

var person2:ICustOrEmp = {
    doShopping():string{
        return 'Shopping Online!';
    },
    doWork():string{
        return 'Work from Home!';
    }
}

console.log((<ICustomer>person2).doShopping());
console.log((<IEmployee>person2).doWork());

var person3:ICustOrEmp = {
    doWork():string{
        return 'Work from Home!';
    }
}