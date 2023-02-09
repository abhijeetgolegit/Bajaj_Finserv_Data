// Tuple - stores a fixed collection of values of same or varied types.
// maintaining the sequence.

var dataArr1:(number | string)[];
// dataArr1 = [1,'Sachin'];
// console.log(dataArr1);

// dataArr1 = ['Sachin',1];
// console.log(dataArr1);


// dataArr1 = ['Sachin','Sourav'];
// console.log(dataArr1);


// dataArr1 = ['Sachin',1,'Mumbai',400010];
// console.log(dataArr1);

// A tuple works like array with some additional considerations
// The number of elements in the tuple is fixed.
// The types of elements are known and need to be same.

// let dataRow:[number,string];

// dataRow = [11,'Rahul'];
// console.log(dataRow);


// dataRow = [12,'Yuvi'];
// //dataRow = ['Mahi','Yuvi'];
// //dataRow = [12,13];
// //dataRow = [12,'Yuvi',2323];
// //console.log(dataRow);

// function insert(data:(number|string)[]){
//     // code to inser the data as a row of a table
// // }

// function insert(data:[number,string]){
//     // code to inser the data as a row of a table
// }

// // insert(['Abhijeet',11,'Pune',411038]);
// // insert(['Abhijeet',11]);
// insert([11,'Pune']);