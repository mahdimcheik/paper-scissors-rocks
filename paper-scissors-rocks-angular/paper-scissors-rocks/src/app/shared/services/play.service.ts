import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { OptionsPlay } from '../../models/options-play';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  choice$ = new BehaviorSubject<OptionsPlay>({
    option: 'none',
    imgUrl: 'assets/hands/handRight.png',
    strength: 0,
  });
  choiceAI$ = new BehaviorSubject<OptionsPlay>({
    option: 'none',
    imgUrl: 'assets/hands/handLeft.png',
    strength: 0,
  });

  score$ = new BehaviorSubject(0);
  scoreAI$ = new BehaviorSubject(0);
  rounds$ = new BehaviorSubject(1);

  animate$ = new BehaviorSubject<boolean>(false);
  constructor() {}
}
