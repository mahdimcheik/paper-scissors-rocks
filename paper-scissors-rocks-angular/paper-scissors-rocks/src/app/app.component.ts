import { Component, inject } from '@angular/core';
import { DashboardLink } from './models/dashboard-link';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'paper-scissors-rocks';
  displayMobileNav = false;
  showNavbar = true;
  modalVisible = false;

  listLink: DashboardLink[] = [
    {
      title: 'Inscription',
      logoUrl: 'assets/svgs/tdb.svg',
      logoUrlActive: 'assets/svgs/dash-blanc.svg',
      path: '',
      active: true,
    },
    {
      title: 'Connexion',
      logoUrl: 'assets/svgs/tdb.svg',
      logoUrlActive: 'assets/svgs/dash-blanc.svg',
      path: 'connection',
      active: true,
    },
    {
      title: 'LeaderBoard',
      logoUrl: 'assets/svgs/profile.svg',
      logoUrlActive: 'assets/svgs/profile-blanc.svg',
      path: 'lboard',
      active: false,
    },
    {
      title: 'Jouer',
      logoUrl: 'assets/svgs/agenda.svg',
      logoUrlActive: 'assets/svgs/agenda-blanc.svg',
      path: 'play',
      active: false,
    },
  ];
  userService = inject(UserService);

  toggleVisibility() {
    this.showNavbar = !this.showNavbar;
  }
  logout() {
    this.modalVisible = false;
    this.userService.logout();
  }
}
