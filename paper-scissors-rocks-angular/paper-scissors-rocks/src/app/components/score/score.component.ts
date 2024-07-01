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
}
