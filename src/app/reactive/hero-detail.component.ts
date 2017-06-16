import { heroes, Address, Hero } from './data-model';
import { Component, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styles: [
        `.form-control.ng-invalid.ng-touched {   border: 1px solid red; background-color : lightpink  }`
    ]
})
export class HeroDetailComponent {
    heroForm: FormGroup;
    @Input() hero: Hero;
    @Output() clearHero = new EventEmitter();

    constructor(private fb: FormBuilder) {
        this.createForm();
        this.setValues(heroes[0]);
        this.logNameChange();
    }

    nameChangeLog: string[] = [];
    logNameChange() {
        const nameControl = this.heroForm.get('name');
        nameControl.valueChanges.forEach(
            (value: string) => this.nameChangeLog.push(value)
        );
    }

    doClear() {
        this.clearHero.emit(null);
    }

    ngOnChanges() {
        this.setValues(this.hero);
        this.test(this.hero);
    }

    test({name, power}){
        console.log(name,power);
    }

    setValues(hero: Hero) {
        this.heroForm.reset({
            name: hero.name,
            power: hero.power,
            sidekick: hero.sidekick
        });
        this.setAddresses(hero.addresses);
    }

    setAddresses(addresses: Address[]) {
        const addressFGs = addresses.map(address => this.fb.group(address));
        const addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    }

    get secretLairs(): FormArray {
        return this.heroForm.get('secretLairs') as FormArray;
    };

    addLair() {
        this.secretLairs.push(this.fb.group(new Address()));
    }

    createForm() {
        this.heroForm = this.fb.group({ // <-- the parent FormGroup
            name: ['', Validators.required],
            secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
            power: '',
            sidekick: ''
        });
    }
}