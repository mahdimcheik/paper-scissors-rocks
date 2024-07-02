import { Component, Input, OnInit, inject } from '@angular/core';
import { PlayService } from '../../../shared/services/play.service';

@Component({
  selector: 'app-button-big-hand',
  templateUrl: './button-big-hand.component.html',
  styleUrl: './button-big-hand.component.scss',
})
export class ButtonBigHandComponent {
  @Input() imgUrl!: string;
  @Input() DirectionRight!: boolean;
  animate = false;

  playService = inject(PlayService);
}
