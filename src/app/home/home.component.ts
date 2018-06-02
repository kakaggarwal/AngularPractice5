import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'transalateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'transalateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'transalateY(0)', offset: 1})
          ]))
        ]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'transalateY(0)', offset: 1}),
            style({opacity: 0.5, transform: 'transalateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'transalateY(-75%)', offset: 0})
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = "Add an Item";
  goalText: string = "My First Life Goal";
  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = "";
    this.itemCount = this.goals.length;
  }

  removeItem(i) {
    this.goals.splice(i, 1);
  }
}
