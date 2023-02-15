import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    template: `
    <form class="form-horizontal" [formGroup]="regForm" 
    (submit)="logForm()">
    <fieldset class="form-group border p-3">
        <legend class="text-center">
            <h3>Reactive Forms</h3>
        </legend>
        <div class="form-group mb-2">
            <label for="firstname" class="mb-1">
                <h6 class="mb-0 text-sm">Firstname</h6>
            </label>
            <input type="text" class="form-control" 
            formControlName="firstname" id="firstname">
        </div>
        <div class="form-group  mb-2">
            <label for="lastname" class="mb-1">
                <h6 class="mb-0 text-sm">Lastname</h6>
            </label>
            <input type="text" class="form-control" formControlName="lastname" id="lastname">
        </div>
        <div formGroupName="address">
            <div class="form-group mb-2">
                <label for="city" class="mb-1">
                    <h6 class="mb-0 text-sm">City</h6>
                </label>
                <input type="text" class="form-control" 
                formControlName="city" id="city">
            </div>
            <div class="form-group mb-2">
                <label for="zip" class="mb-1">
                    <h6 class="mb-0 text-sm">Zip</h6>
                </label>
                <input type="text" class="form-control" 
                formControlName="zip" id="zip">
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="d-grid gap-2 mx-auto mt-3">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="reset" class="btn btn-secondary" (click)="reset()">Reset</button>
                </div>
            </div>
            <div class="col">
                <div class="d-grid gap-2 mx-auto mt-3">
                    <button type="button" class="btn btn-success" (click)="set()">Set Value</button>
                    <button type="button" class="btn btn-warning" (click)="patch()">Patch Value</button>
                </div>
            </div>
        </div>
    </fieldset>
</form>
    `
})

export class ReactiveFormComponent {
    regForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.regForm = this.formBuilder.group({
            firstname: ["Sachin", Validators.required],
            lastname: "",
            address: this.formBuilder.group({
                city: "",
                zip: ""
            })
        });
    }
    logForm() {
        if (this.regForm.valid) {
            console.log(this.regForm.value);
        }
        else {
            console.error('Form is invalid!');
        }
    }
    reset() {
        this.regForm.reset();
    }
    set() {
        this.regForm.setValue({
            firstname: 'Sachin',
            lastname: 'Tendulkar',
            address: {
                city: 'Mumbai',
                zip: 400123
            }
        });
    }

    patch() {
        this.regForm.patchValue({
            firstname: 'Rohit',
            lastname: 'Sharma'
        })
    }
}