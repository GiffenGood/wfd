import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
    templateUrl : './hero-form.component.html',
    styles : [
        `.ng-valid[required], .ng-valid.required  {
         border-left: 5px solid #42A948; /* green */
            }`,

        `.ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
        }`
    ]
    
})
export class HeroFormComponent {
 
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
 
  hero = new Hero(18, 'Dr. WhatIsHisWayTooLongName', this.powers[0], 'Dr. What');
 
  submitted = false;
 
  onSubmit() {
    this.submitted = true;
  }
 
  addHero() {
    this.hero = new Hero(42, '', '');
  }
}