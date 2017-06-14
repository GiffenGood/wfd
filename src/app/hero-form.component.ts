import { Component, ViewChild } from '@angular/core';
import { Hero } from './hero';
import * as f from '@angular/forms'

@Component({
  templateUrl: './hero-form.component.html',
  styles: [
    `.ng-valid[required], .ng-valid.required  {
         border-left: 5px solid #42A948; /* green */
            }`,

    `.ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
        }`
  ]

})
export class HeroFormComponent {
  heroForm: f.NgForm;
  @ViewChild('heroForm') currentForm: f.NgForm;
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = new Hero(18, 'Dr. WhatIsHisWayTooLon', this.powers[0], 'Dr. What');
  submitted = false;

  onSubmit(form: f.FormControl) {
    console.log(this.heroForm.pristine);
    this.submitted = true;
  }

  addHero() {
    this.hero = new Hero(42, '', '');
  }

  newHero() {
    this.hero = new Hero(42, '', '');
  }

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    if (this.currentForm === this.heroForm) { return; }
    this.heroForm = this.currentForm;
    console.log(this.heroForm);
    if (this.heroForm) {
      this.heroForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.heroForm) { return; }
    const form = this.heroForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'power': ''
  };


  validationMessages = {
    'name': {
      'required': 'Name is required. Bitch',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };

}