// class Queue - FIFO

// class Queue{
//     private _data:number[] = [];

//     enqueue(d:number){
//         this._data.push(d);
//     }

//     dequeue():number|undefined{
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.enqueue(10);
// numbersQ.enqueue(20);
// numbersQ.enqueue(30);

// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());

// // any

// class Queue{
//     private _data:any[] = [];

//     enqueue(d:any){
//         this._data.push(d);
//     }

//     dequeue():any|undefined{
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.enqueue(10);
// numbersQ.enqueue(20);
// numbersQ.enqueue(30);

// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());

// var namesQ = new Queue();
// namesQ.enqueue('Aayush');
// namesQ.enqueue('Akash');
// namesQ.enqueue('Sufia');

// console.log(namesQ.dequeue());
// console.log(namesQ.dequeue());
// console.log(namesQ.dequeue());


// // Generics

// interface IQueue<T>{
//     enqueue(d:T):void;
// }
// class Queue<T> implements IQueue<T>{
//     private _data:T[] = [];

//     enqueue(d:T){
//         this._data.push(d);
//     }

//     dequeue():T|undefined{
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue<number>();
// numbersQ.enqueue(10);
// numbersQ.enqueue(20);
// numbersQ.enqueue(30);

// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue());
// console.log(numbersQ.dequeue().toFixed());


// var namesQ = new Queue<string>();
// namesQ.enqueue('Aayush');
// namesQ.enqueue('Akash');
// namesQ.enqueue('Sufia');

// console.log(namesQ.dequeue().toUpperCase());
// console.log(namesQ.dequeue());
// console.log(namesQ.dequeue());

// //------------ constraints

// class Just{
//     foo():void{}
// }

// class Abc extends Just{}

// function getStuff<T extends Just>(arg:T){}

// // getStuff('some string');
// // getStuff(43);
// // getStuff({});
// getStuff(new Abc());


interface IShape{
    draw():void;
}
class Circle implements IShape{
    draw(): void {
        console.log('Circle is drawn!');
    }
}
class Square implements IShape{
    draw(): void {
        console.log('Square is drawn!');
    }
}

class Triangle{
    drawMe():void{
        console.log('Triangle is drawn!');
    }
}

function drawShapes<S extends IShape>(shapes:S[]):void{
    for(const shape of shapes){
        shape.draw();
    }
}
drawShapes([new Circle(),new Square()]);
//drawShapes([new Circle(),new Square(),new Triangle()]);

// Generic Method
// any
// function getArr(items:any[]):any[]{
//     return new Array().concat(items);
// }

// let myNumArr = getArr([10,20,30]);
// let myStringArr = getArr(['abc','pqr','xyz']);

// myNumArr.push(40);
// myNumArr.push('Fifty');

// console.log(myNumArr[3].toFixed());
// console.log(myNumArr[4].toFixed());
// console.log(myStringArr[2]);

// // generic method

// function getArr<T>(items:T[]):T[]{
//     return new Array().concat(items);
// }

// let myNumArr = getArr([10,20,30]);
// let myStringArr = getArr(['abc','pqr','xyz']);

// myNumArr.push(40);
// //myNumArr.push('Fifty');

// console.log(myNumArr[3].toFixed());
// //console.log(myNumArr[4].toFixed());
// console.log(myStringArr[2]);