

// // Eager Execution
// function idNormal(){
//     console.log('Id is created!, Normal Function!.....');
// }

// idNormal();

// // Lazy
// // Generator function
// function* idGen(){
//     console.log('Id is created!, Generator Function!.....');
// }
// let genObj = idGen();
// console.log(genObj);
// // function only starts execution once next is called on the generator object
// console.log(genObj.next());

// // The function pauses as soon as yield statement is encountered.

// function* idGen(){
//     console.log('Generator Execution Started!');
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     console.log('Generator Execution Ended!');
// }

// let genObj = idGen();
// console.log(genObj.next());
// console.log('Paused 1.....');
// console.log(genObj.next());
// console.log('Paused 2.....');
// console.log(genObj.next());
// console.log('Paused 3.....');
// console.log(genObj.next());
// console.log('Paused 4.....');
// console.log(genObj.next());

// function* demoGenerator(mynums:any){
//     for(let i=0;i<mynums.length;i++){
//         yield mynums[i];
//     }
// }


// let myNumbers = [111,222,333,444,555,666];
// let myItr = demoGenerator(myNumbers);
// for(let i=0;i<myNumbers.length;i++){
//     console.log(myItr.next());
// }


class Queue<T>{
    private _data:T[] = [];
    private _i=0;
    enqueue(d:T){
        this._data.push(d);
    }

    dequeue():T|undefined{
        return this._data.shift();
    }

    // getter property
    get Data(){
        return this._data;
    }
    
    // *[Symbol.iterator](){
    //     for(let i=0;i<this._data.length;i++){
    //         yield this._data[i];
    //     }
    // }

    *[Symbol.iterator](){
       yield* this._data;
    }
}

type Order = {
    id:number,
    description:string;
}

let ordersQ = new Queue<Order>();
ordersQ.enqueue({id:101,description:'Mobile Order'});
ordersQ.enqueue({id:102,description:'Tablet Order'});
ordersQ.enqueue({id:103,description:'Laptop Order'});

for(const item of ordersQ){
    console.log(`${item.id}             ${item.description}`);
}
