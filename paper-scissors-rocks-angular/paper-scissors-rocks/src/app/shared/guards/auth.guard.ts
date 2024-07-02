import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authPlayGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  if (userService.connectedUser$.value.email) {
    console.log('connected');

    return true;
  }
  router.navigateByUrl('');
  console.log(' not connected');
  return false;
};

export const authConnectGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  if (userService.connectedUser$.value.email) {
    return false;
  }
  return true;
};
