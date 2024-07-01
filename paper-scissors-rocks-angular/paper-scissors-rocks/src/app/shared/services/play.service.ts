import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OptionsPlay } from '../../models/options-play';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  choice$ = new Subject<OptionsPlay>();
  constructor() {}
}
