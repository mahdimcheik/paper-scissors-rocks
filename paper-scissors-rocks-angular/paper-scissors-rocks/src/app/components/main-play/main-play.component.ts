import { Component, OnInit, inject } from '@angular/core';
import { PlayService } from '../../shared/services/play.service';

@Component({
  selector: 'app-main-play',
  templateUrl: './main-play.component.html',
  styleUrl: './main-play.component.scss',
})
export class MainPlayComponent implements OnInit {
  playService = inject(PlayService);
  rightHandImgUrl = 'assets/hands/handRight.png';
  leftHandImgUrl = 'assets/hands/handLeft.png';

  choice = inject(PlayService).choice$;
  aiChoice = inject(PlayService).choiceAI$;
  animate$ = inject(PlayService).animate$;

  ngOnInit(): void {
    this.choice.subscribe((res) => {
      this.rightHandImgUrl = res.imgUrl;
    });
    this.aiChoice.subscribe((res) => {
      this.leftHandImgUrl = res.imgUrl;
    });
  }
}
