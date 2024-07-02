import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { PlayService } from '../../shared/services/play.service';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss',
})
export class ScoreComponent implements OnInit {
  user = inject(UserService).connectedUser$;
  playService = inject(PlayService);
  userService = inject(UserService);

  ngOnInit(): void {}
  restart() {
    this.playService.rounds$.next(1);
    this.playService.score$.next(0);
    this.playService.scoreAI$.next(0);
  }
}
