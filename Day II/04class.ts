
// class Employee{
//     // data member / data property
//     private _name:string;
//     // constructor(){
//     //     this._name = 'default';
//     // }
//     // constructor(nm:string){
//     //     this._name = nm;
//     // }
//     // Default Value CTOR
//     constructor(nm:string='default'){
//         this._name = nm;
//     }
//     getName():string{
//         return this._name;
//     }
//     setName(value:string):void{
//         this._name = value;
//     }

//     // Never user function expression syntax to create member function,
//     // it will increase the memory usage
//     // same way never use arrow function
// }

// let e1 = new Employee();
// console.log(e1.getName());
// e1.setName('Sachin');
// console.log(e1.getName());

// let e2 = new Employee('Abhijeet');
// console.log(e2.getName());

//--------------------

// class Employee{
//     // data member / data property
//     private _name:string;
//     private _age?:number;
    
//     constructor(nm:string='default'){
//         this._name = nm;
//     }
//     getName():string{
//         return this._name;
//     }
//     setName(value:string):void{
//         this._name = value;
//     }
//     getAge(){
//         // if(this._age){
//         //     return this._age.toFixed();
//         // }
//         // else{
//         //     return this._age;
//         // }
//         return this._age?.toFixed();
//     }

//     setAge(value:number|undefined){
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// console.log(e1.getAge());
// e1.setAge(10);
// console.log(e1.getAge());

// //---------------------------

// class Employee{
//     // data member / data property
//     private _name:string= 'default';
//     private _age?:number|undefined;
    
//     // constructor(nm:string='default'){
//     //     this._name = nm;
//     // }

//     get Name(){
//         return this._name;
//     }
//     set Name(value:string){
//         this._name = value;
//     }
//     get Age(){
//         // if(this._age){
//         //     return this._age.toFixed();
//         // }
//         // else{
//         //     return this._age;
//         // }
//         return this._age;
//     }

//     set Age(value:number|undefined){
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Age = 10;
// console.log(e1.Age);


// //--------------------------- Parameter Properties/ Parameter Members

// class Employee{
//     // data member / data property
//     // private _name:string= 'default';
//     // private _age?:number|undefined;
    
//     // Parameter Members
//     constructor(private _name = 'default', private _age=0){}
    
//     get Name(){
//         return this._name;
//     }
//     set Name(value:string){
//         this._name = value;
//     }
//     get Age(){
//         return this._age;
//     }

//     set Age(value:number|undefined){
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Age = 10;
// console.log(e1.Age);

//----------------------------

// class BankAccount{
//     constructor(private _accName:string, private _bankName:string){}
//     get BankName(){
//         return this._bankName;
//     }
//     set BankName(value:string){
//         this._bankName = value;
//     }

//     get AccountHolderName(){
//         return this._accName;
//     }
// }

// var a1 = new BankAccount('Sachin','ICICI');
// console.log(`\nBank Name:- ${a1.BankName} `);
// console.log(`Account Holder Name:- ${a1.AccountHolderName} `);


// var a2 = new BankAccount('Sourav','ICICI');
// console.log(`\nBank Name:- ${a2.BankName} `);
// console.log(`Account Holder Name:- ${a2.AccountHolderName} `);

// //---------------- static - class variable

// //let cnt = 0;

// class Person{
//     // class variable
//     private static _cnt:number = 0;

//     // constructor(public cnt = 0){
//     //     this.cnt++;
//     // }

//     constructor(){
//         Person._cnt++;
//     }
//    static get Count(){
//         return Person._cnt;
//     }
//     set Count(value:number){
//         Person._cnt = value;
//     }
// }

// let p1 = new Person();
// let p2 = new Person();
// console.log('Population '+Person.Count);
// let p3 = new Person();
// //cnt=9;
// console.log('Population '+Person.Count);

// //--------------------------------

// class BankAccount{
//     // class variable
//     private static _bankName:string;

//     // instance member using parameter members
//     constructor(private _accName:string){}
//     get BankName(){
//         return BankAccount._bankName;
//     }
//     static set BankName(value:string){
//         BankAccount._bankName = value;
//     }
//     get AccountHolderName(){
//         return this._accName;
//     }
// }

// BankAccount.BankName = 'ICICI';

// var a1 = new BankAccount('Sachin');
// console.log(`\nBank Name:- ${a1.BankName} `);
// console.log(`Account Holder Name:- ${a1.AccountHolderName} `);

// var a2 = new BankAccount('Sourav');
// console.log(`\nBank Name:- ${a2.BankName} `);
// console.log(`Account Holder Name:- ${a2.AccountHolderName} `);

//--------------------------------

class BankAccount{
    // class variable
    private static _bankName:string = 'Axis';
    public readonly _accNumber:number;

    // instance member using parameter members
   // constructor(private readonly _accNumber:number,private _accName:string){}

   constructor(no:number=0,private _accName:string){
        this._accNumber = no;
   }

    get BankName(){
        return BankAccount._bankName;
    }
    static set BankName(value:string){
        BankAccount._bankName = value;
    }
    get AccountHolderName(){
        return this._accName;
    }
    get AccountNumber():number{
        return this._accNumber;
    }
}

BankAccount.BankName = 'ICICI';

var a1 = new BankAccount(112345,'Sachin');
console.log(`\nBank Name:- ${a1.BankName} `);
console.log(`Account Holder Name:- ${a1.AccountHolderName} `);
console.log(`\nAccount Number:- ${a1.AccountNumber} `);

var a2 = new BankAccount(33453,'Sourav');
console.log(`\nBank Name:- ${a2.BankName} `);
console.log(`Account Holder Name:- ${a2.AccountHolderName} `);
console.log(`\nAccount Number:- ${a2.AccountNumber} `);
//a2._accNumber = 4444;