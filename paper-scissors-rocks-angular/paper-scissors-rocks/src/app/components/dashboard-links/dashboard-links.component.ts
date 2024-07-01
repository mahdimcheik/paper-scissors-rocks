import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { DashboardLink } from '../../models/dashboard-link';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-dashboard-links',
  templateUrl: './dashboard-links.component.html',
  styleUrl: './dashboard-links.component.scss',
})
export class DashboardLinksComponent implements OnInit {
  @Input() showText = true;
  @Input() listLink: DashboardLink[] = [];

  router = inject(Router);
  destroyRef = inject(DestroyRef);
  user = inject(UserService).connectedUser$;

  ngOnInit(): void {
    const fragments = this.router.url;
    this.listLink.forEach((link, i) => {
      link.active =
        fragments.split('/').join('') === link.path.split('/').join('');
    });

    this.router.events.subscribe((res) => {
      if (res instanceof NavigationStart) {
        console.log('Navigation', res);
        this.listLink.forEach((link) => {
          link.active = res.url === '/' + link.path;
        });
      }
    });
  }
  handleLinkChange(event: boolean, index: number) {
    this.listLink.forEach((link, i) => {
      index === i ? (link.active = event) : (link.active = !event);
    });
  }
}
