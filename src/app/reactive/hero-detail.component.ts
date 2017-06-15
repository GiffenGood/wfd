import { heroes,Address, Hero } from './data-model';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styles: [
        `.form-control.ng-invalid.ng-touched {   border: 1px solid red; background-color : lightpink  }`
    ]
})
export class HeroDetailComponent {
    heroForm: FormGroup;
    @Input()  hero : Hero;
    constructor(private fb: FormBuilder) {
        this.createForm();
        this.setValues(heroes[0]);
    }

    ngOnChanges(){
        console.log('change');
        this.setValues(this.hero);
    }

    setValues(hero : Hero){
        this.heroForm.reset({
            name : hero.name,
            power : hero.power,
            sidekick : hero.sidekick,
            address : hero.addresses[0] || new Address()
        });
    }

    createForm() {
        this.heroForm = this.fb.group({ // <-- the parent FormGroup
            name: ['', Validators.required],
            address: this.fb.group(new Address()),
            power: '',
            sidekick: ''
        });
    }
}