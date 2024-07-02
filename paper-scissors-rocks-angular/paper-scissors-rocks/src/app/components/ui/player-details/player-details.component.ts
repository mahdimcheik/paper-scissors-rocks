import { Component, Input } from '@angular/core';
import { LoginResponse } from '../../../models/login-response';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
})
export class PlayerDetailsComponent {
  @Input() userDetails!: LoginResponse;
}
