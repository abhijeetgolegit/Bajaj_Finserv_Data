// interface IPerson{
//     name:string;
//     age:number;
//     greet(message:string):string;
// }

// class Person implements IPerson{
//     constructor(public name:string,public age:number){};
//     greet(message:string):string{
//         return `Hello ${this.name} of Age ${this.age} with a ${message}`;
//     }
// }

// let p1:IPerson = new Person('Sachin', 46)
// let p2:IPerson = new Person('Rahul', 47)

// console.log(p1.greet('Hello'))
// console.log(p2.greet('Hey'))

// // -------------------

// interface IPerson{
//     name:string;
//     age:number;
//     greet(message:string):string;
// }

// interface IEmployee{
//     doWork():string;
// }

// interface ICustomer{
//     doShopping():string;
// }

// class Person implements IPerson, IEmployee, ICustomer{
//     constructor(public name:string,public age:number){};
//     greet(message:string):string{
//         return `Hello ${this.name} of Age ${this.age} with a ${message}`;
//     }
//     doWork():string{
//         return 'Learning TypeScript!';
//     }
//     doShopping(): string {
//         return 'Shopping online!';
//     }
// }

// let p1:Person = new Person('Sachin', 46);
// console.log(p1.greet('Hello'));
// console.log(p1.doWork());
// console.log(p1.doShopping());

// console.log('\n');

// // interface extraction
// let ip:IPerson = new Person('Rahul',47);
// console.log(ip.greet('How are you?'))

// console.log('\n')

// let ep:IEmployee = new Person('Rahul',47);
// console.log(ep.doWork())

// console.log('\n')

// let cp:ICustomer = new Person('Rahul',47);
// console.log(cp.doShopping())

// // ------------------- extend the interface

// interface IPerson{
//     name:string;
//     age:number;
//     greet(message:string):string;
// }

// interface IEmployee extends IPerson{
//     doWork():string;
// }

// interface ICustomer extends IPerson{
//     doShopping():string;
// }

// class Person implements IEmployee, ICustomer{
//     constructor(public name:string,public age:number){};
//     greet(message:string):string{
//         return `Hello ${this.name} of Age ${this.age} with a ${message}`;
//     }
//     doWork():string{
//         return 'Learning TypeScript!';
//     }
//     doShopping(): string {
//         return 'Shopping online!';
//     }
// }

// let p1:Person = new Person('Sachin', 46);
// console.log(p1.greet('Hello'));
// console.log(p1.doWork());
// console.log(p1.doShopping());

// ----------------- interface that can extend from the class(es)

class Control{
    get ControlId():number{
        return 10;
    }
    focus():string{
        return 'The Control is focused!';
    }
}

class SelectedTableControl{
    select():string{
        return 'The Control is selected!';
    }
}

// only declarations are getting extended not the implementations

interface ISelectTableControl extends Control, SelectedTableControl{}

class Button implements ISelectTableControl{
    get ControlId():number{
        throw new Error('Method not implemented!');
    }
    focus():string{
        throw new Error('Method not implemented!');
    }
    select():string{
        throw new Error('Method not implemented!');
    }
}