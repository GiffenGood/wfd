import { heroes, Hero } from './data-model';
import { Component, Input } from '@angular/core';

@Component({
    selector : 'hero-list',
    template : `
        <h1>Hero List </h1> <a routerLink="/reactive">Dashboard</a>
        <ul>
            <li *ngFor="let hero of heroes" (click)="select(hero)" >
                {{hero.name}}
            </li>
        </ul>
        <collapsible-well *ngIf="selectedHero" [title]="selectedHero?.name">
            <hero-detail [hero]="selectedHero" (clearHero)="select($event)"></hero-detail>
        </collapsible-well>
    `,
    styles : [
        'li { cursor: pointer}' 
    ]
})
export class HeroListComponent{
    heroes : Hero[];
    selectedHero : Hero;

    ngOnInit(){
        this.heroes = heroes;
    }

    select(hero : Hero){
        this.selectedHero = hero;
    }
}
