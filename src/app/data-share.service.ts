import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataShareService {

  private goals = new BehaviorSubject<any>(["I want to Climb Mt. Everest.", "I want to visit Ladakh on a Bike.", "I want to go river rafting."])
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
