// var arr1 = [10,20,30];
// var arr2= ['Abhijeet','Manish','Ramakant'];
// var arr3 = [12,'Sachin'];

// var arr4:number [];// array Literal Syntax
// arr4 = [11,22,33,44];

// var arr5:Array<number>;
// arr5 = [44,33,22,11];

// var arr6:Array<string>=['ABC','PQR','XYZ'];

// var arr7 = new Array();
// console.log(arr7);
// console.log(arr7.length);

// var arr8 = new Array(10);
// console.log(arr8);
// console.log(arr8.length);

// var arr9 = new Array('Sachin');
// console.log(arr9);
// console.log(arr9.length);

// var arr10 = Array.of(100,200);
// console.log(arr10);
// console.log(arr10.length);


// var arr = [11,22,33];

// var arr11 = new Array(arr);
// console.log(arr11);
// console.log(arr11.length);

// var arr12 = Array.from(arr);
// console.log(arr12);
// console.log(arr12.length);

// var arr13 = [...arr];
// console.log(arr13);
// console.log(arr13.length);

// Type Alias
let messageA:string = 'Hello';

type chars = string;
let messageB:chars = 'Hi';

console.log(messageA+' '+messageB);
console.log(typeof messageA+' '+ typeof messageB);

type alphanumeric = number|string;

var a:number|string;
var b:alphanumeric;

a = 5;
b = 'five';

console.log(a+' '+b);

console.log(typeof a+' '+typeof b);

let empListTemp:Array<{id:number,name:string,city:string}>;

type Employee = {
    id:number,
    name:string,
    city:string
}

let empList:Employee[];

empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramakant", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" },
    { id: 4, name: "Subodh", city: "Mumbai" },
    { id: 5, name: "Abhishek", city: "Mathura" }
];

console.log('foreach of an Array');
empList.forEach((item,index)=>{
    console.log(`${index}    ${JSON.stringify(item)}`);
})

console.log('for in loop');
for(let i in empList){
    console.log(`${JSON.stringify(empList[i])}`);
}

console.log('for of loop');
for(let emp of empList){
    console.log(`${JSON.stringify(emp)}`);
}

console.log('for of loop with index');
for(let [index,item] of empList.entries()){
    console.log(`${index}    ${JSON.stringify(item)}`);
}
var r1 = empList.find(e => e.id === 4);
console.log(r1);    

var r2 = empList.findIndex(e => e.id === 4);
console.log(r2);

var empIds = empList.map(e => e.id);
console.log(empIds);

var empNames = empList.map(e => e.name);
console.log(empNames);

var result = empNames.includes('Abhijeet');
console.log(result);