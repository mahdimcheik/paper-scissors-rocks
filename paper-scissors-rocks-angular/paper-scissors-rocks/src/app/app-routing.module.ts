import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { PlayComponent } from './pages/play/play.component';

const routes: Routes = [
  {
    path: '',
    component: InscriptionComponent,
  },
  {
    path: 'connection',
    component: ConnectionComponent,
  },
  {
    path: 'play',
    component: PlayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
