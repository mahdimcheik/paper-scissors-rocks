import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoginResponse } from '../../models/login-response';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss',
})
export class RankingComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  userService = inject(UserService);
  users!: LoginResponse[];

  ngOnInit(): void {
    this.userService
      .getRanking()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => (this.users = res));
  }
}
