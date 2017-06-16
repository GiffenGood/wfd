import * as r from './reactive';
import * as c from './common';
import { HeroFormComponent } from './hero-form.component';
import { AppRoutingModule } from './routing.module';
import { RouterModule,RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    r.HeroListComponent,
    r.HeroDetailComponent,
    c.CollapsibleWell
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
