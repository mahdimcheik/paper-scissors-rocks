import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionsPlay } from '../../../models/options-play';

@Component({
  selector: 'app-button-hand',
  templateUrl: './button-hand.component.html',
  styleUrl: './button-hand.component.scss',
})
export class ButtonHandComponent {
  @Input() imgUrl!: string;
  @Output() onClick = new EventEmitter();
  @Input() choice!: OptionsPlay;

  click() {
    this.onClick.emit();
  }
}
