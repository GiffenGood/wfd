import { HeroListComponent } from './reactive/hero-list.component';
import { HeroDetailComponent } from './reactive/hero-detail.component';
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
    HeroListComponent,
    HeroDetailComponent,
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
