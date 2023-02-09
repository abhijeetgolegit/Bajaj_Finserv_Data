// A decorator is a special kind of declaration that can be attached to
// class, method, accessor, property or parameter.

// class Calculator {
//     // levelOfDev:string;
//     // isTested:boolean;
//     add(x: number, y: number) {
//         return x + y;
//     }
//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// //----------- I want to log arguments passed to the method

// class Calculator {
//     add(x: number, y: number) {
//         console.log(`add fn is called with arguments as ${x} ${y}`);
//         return x + y;
//     }
//     sub(x: number, y: number) {
//         console.log(`add fn is called with arguments as ${x} ${y}`);
//         return x - y;
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// //----------- log arguments passed to the method in separate log method

// class Calculator {
//     add(x: number, y: number) {
//         log(`add fn is called with arguments as ${x} ${y}`);
//         return x + y;
//     }
//     sub(x: number, y: number) {
//         log(`add fn is called with arguments as ${x} ${y}`);
//         return x - y;
//     }
// }

// function log(message:string){
//     // right now trying to log it on the console itself
//     console.log(message);
//     // log it to text file
//     // log it to the database
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

//-----------logging will be taken care by HOF - High Order Function
// High Order Function is a function accepts funtions as a parameters and / or
// returns a function

// class Calculator {
//     add(x: number, y: number) {
//         return x + y;
//     }
//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// function logHOF(fnRef:(...items:any[]) => any){
//     return function(...args:any[]){
//         console.log(`fn is called with arguments as ${args}`);
//         let result = fnRef(...args);
//         return result;
//     }
// }
// var c = new Calculator();
// // console.log(c.add(2, 3));
// // console.log(c.sub(24, 35));

// const addWithLogging = logHOF(c.add);
// const subWithLogging = logHOF(c.sub);
// console.log(addWithLogging(4,5));
// console.log(subWithLogging(4,5));

// Types of Decorators
// Class Decorator <T extends Function>(target:T) => T | void
// Property Decorator (target: Object, propertyKey: string | symbol) => void;
// Method Decorator <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// Parameter Decorator (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

class Calculator {
    @log
    add(x: number, y: number) {
        return x + y;
    }
    @log
    sub(x: number, y: number) {
        return x - y;
    }
    @log
    sqr(n:number){
        return n*n;
    }
    @log
    show(){
        return 'Inside show!';
    }
}

// Method Decorator
function log<T>(target: T, propertyKey: string, descriptor: PropertyDescriptor){
    // console.log('target')
    // console.log(target)
    // console.log('propertyKey')
    // console.log(propertyKey)
    // console.log('descriptor')
    // console.log(descriptor)

    let originalMethod = descriptor.value;

    descriptor.value = function(...args:any[]){
        // convert list of args of add/sub/sqr function to string
        let fn_args = args.map(arg => JSON.stringify(arg)).join();
        if(fn_args){
            console.log(`${propertyKey}, is called with argument(s) as ${fn_args}`);
        }else{
            console.log(`${propertyKey}, is called with 0 arguments`);
        }
        
        // console.log(args);
        // invoke the method
        let result = originalMethod.apply(this,args);
        return result;
    }
}

var c = new Calculator();
console.log(c.add(4,5));
console.log(c.sqr(5));
console.log(c.show());

// //Decorators in Angular
// @NgModule()
// class Module{}

// @Component()
// class Component{}

// @Injectable()
// class Service{}

// Method Decorator - @HostListener()
// Parameter Decorator - @Inject()
// Property Decorator - @Input, @Output
