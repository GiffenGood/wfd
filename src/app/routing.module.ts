import { HeroListComponent } from './reactive/hero-list.component';
import { HeroDetailComponent } from './reactive/hero-detail.component';
import { HeroFormComponent } from './hero-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: HeroFormComponent,  pathMatch: 'full' },
    { path: 'heroes', component: HeroListComponent,  pathMatch: 'full' },    
    { path: 'reactive', component: HeroDetailComponent,  pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }