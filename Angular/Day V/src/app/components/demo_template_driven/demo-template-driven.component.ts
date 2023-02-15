import { Component } from '@angular/core';

@Component({
    selector: 'app-template-driven',
    template: `
    <form class="form-horizontal" #regForm="ngForm" (submit)="logForm(regForm)">
    <fieldset class="form-group border p-3">
        <legend class="text-center">
            <h3>Template Driven Forms</h3>
        </legend>
        <div class="form-group mb-2">
            <label for="firstname" class="mb-1">
                <h6 class="mb-0 text-sm">Firstname</h6>
            </label>
            <input type="text" class="form-control"
             required name="firstname" 
            id="firstname" ngModel>
            <p class='text-danger' *ngIf="regForm.controls['firstname']?.invalid && regForm.controls['firstname']?.touched">
                Firstname is Required!
            </p>
        </div>
        <div class="form-group  mb-2">
            <label for="lastname" class="mb-1">
                <h6 class="mb-0 text-sm">Lastname</h6>
            </label>
            <input type="text" class="form-control" name="lastname" id="lastname" required ngModel>
            <p class='text-danger' *ngIf="regForm.controls['lastname']?.invalid && regForm.controls['lastname'].touched">
                Lastname is required!
            </p>
        </div>
        <div ngModelGroup="address">
            <div class="form-group mb-2">
                <label for="city" class="mb-1">
                    <h6 class="mb-0 text-sm">City</h6>
                </label>
                <input type="text" class="form-control" name="city" id="city" ngModel>
            </div>
            <div class="form-group mb-2">
                <label for="zip" class="mb-1">
                    <h6 class="mb-0 text-sm">Zip</h6>
                </label>
                <input type="number" class="form-control" name="zip" id="zip" ngModel>
            </div>
            <div class="form-group mb-2">
                <label for="email" class="mb-1">
                    <h6 class="mb-0 text-sm">Email</h6>
                </label>
                <input type="email" email=true class="form-control" name="email" 
                id="email" required ngModel>
            </div>
        </div>
        <br/>
        <div class="d-grid gap-2 mx-auto mt-3">
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="reset" class="btn btn-secondary">Reset</button>
        </div>
    </fieldset>
</form>
    <div class="text-success">
        <p> {{ regForm.value | json }}</p>
        <p> Valid : {{ regForm.valid}}</p>
        <p> touched : {{ regForm.touched}}</p>
        <p> submitted : {{ regForm.submitted}}</p>
    </div>
    `
})

export class TemplateDrivenFormComponent {
    logForm(frm: any) {
        if (frm.valid) {
            console.log(frm.value); // code to submit the data to server
        }
        else {
            console.error('Form is Invalid!');
        }
    }
}