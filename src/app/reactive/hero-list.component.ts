import { heroes, Hero } from './data-model';
import { Component, Input } from '@angular/core';


@Component({
    selector : 'hero-list',
    template : `
        <h1>Hero List</h1>
        <ul>
            <li *ngFor="let hero of heroes" (click)="select(hero)" >
                {{hero.name}}
            </li>
        </ul>
        <hero-detail *ngIf="selectedHero" [hero]="selectedHero"></hero-detail>
    `
})
export class HeroListComponent{
    heroes : Hero[];
    selectedHero : Hero;

    ngOnInit(){
        this.heroes = heroes;
    }

    select(hero : Hero){
        console.log('here',hero);
        this.selectedHero = hero;
    }
}
