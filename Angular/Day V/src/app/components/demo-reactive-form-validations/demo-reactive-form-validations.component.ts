import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/utilites/custom-validator';


@Component({
    selector: 'app-validation-form',
    template: `
<form class="form-horizontal" [formGroup]="regForm" (submit)="logForm()">
    <fieldset class="form-group border p-3">
        <legend class="text-center">
            <h3>Reactive Forms</h3>
        </legend>

        <div class="form-group mb-2">
            <label for="firstname" class="mb-1">
                <h6 class="mb-0 text-sm">Firstname</h6>
            </label>
            <input type="text" class="form-control" formControlName="firstname" id="firstname"
            [ngClass]="{'is-invalid':frm['firstname'].touched && frm['firstname'].invalid}">
            <div *ngIf="frm['firstname'].touched && frm['firstname'].invalid" class="invalid-feedback">
                <p>Firstname is required!</p>
            </div>
        </div>

        <div class="form-group mb-2">
            <label for="lastname" class="mb-1">
                <h6 class="mb-0 text-sm">Lastname</h6>
            </label>
            <input type="text" class="form-control" formControlName="lastname" id="lastname"
            [ngClass]="{'is-invalid':frm['lastname'].touched && frm['lastname'].invalid}">
            <div *ngIf="frm['lastname'].touched && frm['lastname'].invalid" class="invalid-feedback">
                <p *ngIf="frm['lastname'].errors!['required']">Lastname is required!</p>
                <p *ngIf="frm['lastname'].errors!['minlength']">Minimum 2 characters!</p>
                <p *ngIf="frm['lastname'].errors!['maxlength']">Maximum 6 characters!</p>
            </div>
        </div>

        <div class="form-group mb-2">
            <label for="gender" class="mb-1">
                <h6 class="mb-0 text-sm">Gender</h6>
            </label>
            <div [ngClass]="{'is-invalid':frm['gender'].touched && frm['gender'].invalid}">
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" formControlName="gender" id="gender" value="male"
                        [ngClass]="{'is-invalid':frm['gender'].touched && frm['gender'].invalid}">
                    <label class="form-check-label" for="gender">
                        Male
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" formControlName="gender" id="gender" value="female"
                        [ngClass]="{'is-invalid':frm['gender'].touched && frm['gender'].invalid}">
                    <label class="form-check-label" for="gender">
                        Female
                    </label>
                </div>
            </div>
            <div *ngIf="frm['gender'].touched && frm['gender'].invalid" class="invalid-feedback">
                <p>Gender is required.</p>
            </div>
        </div>


        <div class="form-group mb-2">
            <label for="age" class="mb-1">
                <h6 class="mb-0 text-sm">Age</h6>
            </label>
            <input type="number" class="form-control" formControlName="age" id="age"
                [ngClass]="{'is-invalid':frm['age'].touched && frm['age'].invalid}">
            <div *ngIf="frm['age'].touched && frm['age'].invalid" class="invalid-feedback">
                <p *ngIf="frm['age'].errors!['required']">Age is required.</p>
                <!-- <p *ngIf="frm.age.errors!['required']">Age should be between 20 and 40!</p> -->
                <!-- <p *ngIf="frm['age'].errors!['ageRange']">Age should be between {{minAge}} and {{maxAge}}!</p> -->
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="d-grid gap-2 mx-auto mt-3">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="reset" class="btn btn-secondary" (click)="reset()">Reset</button>
                </div>
            </div>
        </div>
    </fieldset>
</form>
    `
})

export class ValidationFormComponent {
    regForm: FormGroup;
    minAge = 25;
    maxAge = 30;
    
    constructor(private formBuilder: FormBuilder) {
        this.regForm = this.formBuilder.group({
            firstname: ["", Validators.required],
            lastname: ["",Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(6),
            ])],
            gender: ["", Validators.required],
            age: ["", [
                Validators.required,
                CustomValidators.ageRange(this.minAge,this.maxAge)
            ]]
        });
    }

    get frm() { return this.regForm.controls; }

    logForm() {
        if (this.regForm.valid) {
            console.log(this.regForm.value);
        }
        else {
            this.regForm.markAllAsTouched();
            console.error('Invalid Input given!');
        }
    }

    reset() {
        this.regForm.reset();
    }
}