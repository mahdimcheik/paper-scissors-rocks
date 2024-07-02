import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { PlayComponent } from './pages/play/play.component';
import { authConnectGuard, authPlayGuard } from './shared/guards/auth.guard';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  {
    path: '',
    component: InscriptionComponent,
    canActivate: [authConnectGuard],
  },
  {
    path: 'connection',
    component: ConnectionComponent,
    canActivate: [authConnectGuard],
  },
  {
    path: 'play',
    component: PlayComponent,
    canActivate: [authPlayGuard],
  },
  {
    path: 'lboard',
    component: RankingComponent,
    canActivate: [authPlayGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
