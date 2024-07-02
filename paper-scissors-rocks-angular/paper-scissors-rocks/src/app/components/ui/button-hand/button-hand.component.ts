import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { OptionsPlay } from '../../../models/options-play';
import { PlayService } from '../../../shared/services/play.service';
import { delay, tap } from 'rxjs';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-button-hand',
  templateUrl: './button-hand.component.html',
  styleUrl: './button-hand.component.scss',
})
export class ButtonHandComponent {
  @Input() imgUrl!: string;
  @Output() onClick = new EventEmitter();
  @Input() choice!: OptionsPlay;

  optionsPlay = inject(PlayService);
  userService = inject(UserService);

  click() {
    this.onClick.emit();

    this.optionsPlay.animate$.next(true);
    this.optionsPlay.choice$.next({
      option: 'none',
      imgUrl: 'assets/hands/handRight.png',
      strength: 0,
    });
    this.optionsPlay.choiceAI$.next({
      option: 'none',
      imgUrl: 'assets/hands/handLeft.png',
      strength: 0,
    });
    const rock = {
      option: 'rock',
      imgUrl: 'assets/hands/rock.png',
      strength: 2,
    };
    const paper = {
      option: 'paper',
      imgUrl: 'assets/hands/paper.png',
      strength: 3,
    };
    const scissors = {
      option: 'scissors',
      imgUrl: 'assets/hands/scissors.png',
      strength: 1,
    };
    setTimeout(() => {
      switch (this.aiChoose()) {
        case 0: {
          this.optionsPlay.choiceAI$.next(rock);
          break;
        }
        case 1: {
          this.optionsPlay.choiceAI$.next(paper);
          break;
        }
        case 2: {
          this.optionsPlay.choiceAI$.next(scissors);
          break;
        }
      }
      this.optionsPlay.choice$.next(this.choice);
      if (this.choice.strength === this.optionsPlay.choiceAI$.value.strength) {
      } else {
        if (
          (this.choice.option === 'paper' &&
            this.optionsPlay.choiceAI$.value.option === 'rock') ||
          (this.choice.option === 'rock' &&
            this.optionsPlay.choiceAI$.value.option === 'scissors') ||
          (this.choice.option === 'scissors' &&
            this.optionsPlay.choiceAI$.value.option === 'paper')
        ) {
          this.optionsPlay.score$.next(this.optionsPlay.score$.value + 1);
        } else {
          this.optionsPlay.scoreAI$.next(this.optionsPlay.scoreAI$.value + 1);
        }
      }
      if (this.optionsPlay.rounds$.value < 5) {
        this.optionsPlay.rounds$.next(this.optionsPlay.rounds$.value + 1);
      }
      if (this.optionsPlay.rounds$.value === 5) {
        this.userService
          .updateScore(
            this.userService.connectedUser$.value.email,
            this.optionsPlay.score$.value
          )
          .subscribe();
      }
      this.optionsPlay.animate$.next(false);
    }, 3000);
  }

  aiChoose() {
    return Math.floor(Math.random() * 3);
  }
}
