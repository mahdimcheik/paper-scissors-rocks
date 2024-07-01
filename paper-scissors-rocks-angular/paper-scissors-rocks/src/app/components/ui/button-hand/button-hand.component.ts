import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { OptionsPlay } from '../../../models/options-play';
import { PlayService } from '../../../shared/services/play.service';
import { delay, tap } from 'rxjs';

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

    setTimeout(() => {
      switch (this.aiChoose()) {
        case 0: {
          this.optionsPlay.choiceAI$.next({
            option: 'paper',
            imgUrl: 'assets/hands/paper.png',
            strength: 3,
          });
          break;
        }
        case 1: {
          this.optionsPlay.choiceAI$.next({
            option: 'rock',
            imgUrl: 'assets/hands/rock.png',
            strength: 2,
          });
          break;
        }
        case 2: {
          this.optionsPlay.choiceAI$.next({
            option: 'scissors',
            imgUrl: 'assets/hands/scissors.png',
            strength: 1,
          });
          break;
        }
      }
      this.optionsPlay.choice$.next(this.choice);
      if (this.choice.strength === this.optionsPlay.choiceAI$.value.strength) {
      } else {
        if (
          this.choice.strength < this.optionsPlay.choiceAI$.value.strength &&
          this.choice.strength % 3 <
            this.optionsPlay.choiceAI$.value.strength % 3
        ) {
          this.optionsPlay.score$.next(this.optionsPlay.score$.value + 1);
        } else {
          this.optionsPlay.scoreAI$.next(this.optionsPlay.scoreAI$.value + 1);
        }
      }
      this.optionsPlay.animate$.next(false);
    }, 3000);
  }

  aiChoose() {
    return Math.floor(Math.random() * 3);
  }
}
