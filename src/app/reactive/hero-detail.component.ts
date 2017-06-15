import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styles : [
     `ng-invalid : {
         border-color:red
     }`
  ]
})
export class HeroDetailComponent {
  heroForm : FormGroup;
  constructor(private fb : FormBuilder){
      this.createForm();
  }

  createForm(){
      this.heroForm = this.fb.group({
          name : ['', Validators.required]
      })
  }
  
}