// interface IPoint {
//     getDistance(): number;
// }

// // interface IPoint {
// //     getDistanceII(): number;
// // }

// class Point implements IPoint {
//     constructor(private x: number, private y: number) { }

//     getDistance(): number {
//         return Math.sqrt(this.x * this.x | this.y * this.y);
//     }
// }


// let point: IPoint = new Point(2,3);
// console.log(point.getDistance());


namespace myApp{
   export interface IPoint {
        getDistance(): number;
    }
    export class Point implements IPoint {
        constructor(private x: number, private y: number) { }
    
        getDistance(): number {
            return Math.sqrt(this.x * this.x | this.y * this.y);
        }
    }
}

namespace Usage{
    let point: myApp.IPoint = new myApp.Point(2,3);
    console.log(point.getDistance());
}