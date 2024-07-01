import { Component } from '@angular/core';
import { DashboardLink } from './models/dashboard-link';

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
      title: 'Jnscription',
      logoUrl: 'assets/svgs/tdb.svg',
      logoUrlActive: 'assets/svgs/dash-blanc.svg',
      path: 'inscription',
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

  toggleVisibility() {
    this.showNavbar = !this.showNavbar;
  }
  logout() {
    this.modalVisible = false;
  }
}
