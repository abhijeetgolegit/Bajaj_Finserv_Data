import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MyProduct } from './myproduct.model';

@Component({
    selector: 'app-hook-child',
    template: `
    <!-- for ngAfterViewInit and ngAfterViewChecked -->
    <h1 #childHook>Hook Child Component!</h1>
    <ng-content></ng-content>
    `
})
export class HookChildComponent implements OnInit, OnChanges,
 DoCheck{
// export class HookChildComponent implements OnInit, OnChanges,
//  DoCheck, AfterContentInit ,AfterContentChecked,AfterViewInit, 
//  AfterViewChecked,OnDestroy{

    // For ngOnDestroy
    count:number = 0;
    intervalId:any;

    @Input()
    parentData: string = '';

    @Input()
    product: MyProduct;

    // for ngAfterContentInit and ngAfterContentChecked
    @ContentChild('child')
    contentChild: ElementRef = {} as ElementRef;

    // for ngAfterViewInit and ngAfterViewChecked
    @ViewChild('childHook')
    viewChild: ElementRef = {} as ElementRef;

    constructor() {
        console.log('Constructor is called!...');
        this.product = new MyProduct();

        // this.intervalId = setInterval(() =>{
        //     this.count++;
        //     console.log('Time running!... ',this.count);
        // },1000);
    }

    ngOnInit() {
        console.log('ngOnInit is called!...');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges is called!... ', changes);
    }
    ngDoCheck(): void {
        console.log('ngDoCheck is called!... ', this.product);
    }

    // ngAfterContentInit(): void {
    //     console.log('ngAfterContentInit is called!... ');
    //     this.contentChild.nativeElement.setAttribute("style", `color:${this.parentData}`);
    // }
    // ngAfterContentChecked(): void {
    //     console.log('ngAfterContentChecked is called!... ');
    //     this.contentChild.nativeElement.setAttribute("style", `color:${this.parentData}`);
    // }
    
    // ngAfterViewInit(): void {
    //     console.log('ngAfterViewInit is called!... ');
    //     this.viewChild.nativeElement.setAttribute("style", `background-color:${this.parentData}`);
    // }
    // ngAfterViewChecked(): void {
    //     console.log('ngAfterViewChecked is called!... ');
    //     this.viewChild.nativeElement.setAttribute("style", `background-color:${this.parentData}`);
    // }
    // ngOnDestroy(): void {
    //     console.log('ngOnDestroy is called!...');
    //     clearInterval(this.intervalId);
    // }
}