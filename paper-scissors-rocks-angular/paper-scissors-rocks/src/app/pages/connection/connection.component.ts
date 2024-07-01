import { Component, DestroyRef, inject } from '@angular/core';
import { RegistrationInfos } from '../../models/registration-infos';
import { UserService } from '../../shared/services/user.service';
import { MessageService } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.scss',
})
export class ConnectionComponent {
  credentials = {} as RegistrationInfos;
  userService = inject(UserService);
  destroyRef = inject(DestroyRef);
  messageService = inject(MessageService);
  router = inject(Router);
  login() {
    if (this.credentials.email && this.credentials.password.trim().length > 2) {
      this.userService
        .login(this.credentials)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((res) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Yahooo ! ',
            detail: 'Vous êtes connecté !!!',
          });
          this.router.navigateByUrl('/play');
        });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Attention! ',
        detail: 'Non conformes !!!',
      });
    }
  }
  reset() {
    this.credentials = {} as RegistrationInfos;
  }
}
