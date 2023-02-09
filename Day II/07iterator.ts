// // Iterator

// class Queue<T> implements IterableIterator<T>{
//     private _data:T[] = [];
//     private _i=0;
//     enqueue(d:T){
//         this._data.push(d);
//     }

//     dequeue():T|undefined{
//         return this._data.shift();
//     }

//     // getter property
//     get Data(){
//         return this._data;
//     }
    
//     [Symbol.iterator]():IterableIterator<T>{
//         return this;
//     }

//     next(...args:[]|[undefined]):IteratorResult<T,any>{
//         if(this._i < this._data.length){
//             return {
//                 done:false,
//                 value:this._data[this._i++]
//             }
//         }else{
//             return {
//                 done:true,
//                 value:undefined
//             }
//         }
//     }
// }

// type Order = {
//     id:number,
//     description:string;
// }

// let ordersQ = new Queue<Order>();
// ordersQ.enqueue({id:101,description:'Mobile Order'});
// ordersQ.enqueue({id:102,description:'Tablet Order'});
// ordersQ.enqueue({id:103,description:'Laptop Order'});

// // for(const item of ordersQ.Data){
// //     console.log(`${item.id}             ${item.description}`);
// // }

// for(const item of ordersQ){
//     console.log(`${item.id}             ${item.description}`);
// }
