import { Component, Input } from '@angular/core';

@Component({
    selector : 'collapsible-well',
    template : `
        <div class="well pointable">
            <h4 class="well-title" (click)="toggleContent()">{{title}}</h4>
            <ng-content *ngIf="visible"></ng-content>
        </div>
    `
})
export class CollapsibleWell{
    visible = true;
    @Input() title :string;

    toggleContent(){
        this.visible = !this.visible;
    }
}