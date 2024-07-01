import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-big-hand',
  templateUrl: './button-big-hand.component.html',
  styleUrl: './button-big-hand.component.scss',
})
export class ButtonBigHandComponent {
  @Input() imgUrl!: string;
  @Input() DirectionRight!: boolean;
}
