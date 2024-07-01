import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { RegistrationInfos } from '../../models/registration-infos';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { RegistrationResponse } from '../../models/registration-response';
import { LoginResponse } from '../../models/login-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  connectedUser$ = new BehaviorSubject({} as LoginResponse);

  constructor() {}

  register(infos: RegistrationInfos): Observable<RegistrationResponse> {
    return this.http
      .post<RegistrationResponse>(environment.BACK_API + '/add', infos)
      .pipe(tap((res) => console.log(res)));
  }
  login(infos: RegistrationInfos): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(environment.BACK_API + '/login', infos)
      .pipe(tap((res) => this.connectedUser$.next(res)));
  }
  logout(): void {
    this.connectedUser$.next({} as LoginResponse);
  }
}
