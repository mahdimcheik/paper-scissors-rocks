import { Component, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { PlayService } from '../../shared/services/play.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
})
export class ScoreComponent {
  user = inject(UserService).connectedUser$;
  playService = inject(PlayService);

  restart() {
    this.playService.rounds$.next(1);
    this.playService.score$.next(0);
    this.playService.scoreAI$.next(0);
  }
}
