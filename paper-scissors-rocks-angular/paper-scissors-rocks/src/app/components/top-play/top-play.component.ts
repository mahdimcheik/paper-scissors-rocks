import { Component, inject } from '@angular/core';
import { OptionsPlay } from '../../models/options-play';
import { PlayService } from '../../shared/services/play.service';

@Component({
  selector: 'app-top-play',
  templateUrl: './top-play.component.html',
  styleUrl: './top-play.component.scss',
})
export class TopPlayComponent {
  rock = { option: 'rock', imgUrl: 'assets/hands/rock.png', strength: 2 };
  paper = { option: 'paper', imgUrl: 'assets/hands/paper.png', strength: 3 };
  scissors = {
    option: 'scissors',
    imgUrl: 'assets/hands/rock.png',
    strength: 1,
  };

  animate$ = inject(PlayService).animate$;
}
