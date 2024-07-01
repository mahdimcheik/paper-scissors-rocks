import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistrationInfos } from '../../models/registration-infos';
import { UserService } from '../../shared/services/user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss',
})
export class InscriptionComponent implements OnInit {
  registrationInfos = {} as RegistrationInfos;
  validationPassword = '';

  userService = inject(UserService);
  destroyRef = inject(DestroyRef);
  fb = inject(FormBuilder);
  messageService = inject(MessageService);
  router = inject(Router);

  ngOnInit(): void {}

  register() {
    if (
      this.registrationInfos.password === this.validationPassword &&
      this.registrationInfos.pseudo.trim().length >= 5
    ) {
      this.userService
        .register(this.registrationInfos)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.router.navigateByUrl('/connection'));
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Attention ! ',
        detail: 'Vérifiez vos données',
      });
    }
  }
  reset() {
    this.registrationInfos = {} as RegistrationInfos;
  }
}
