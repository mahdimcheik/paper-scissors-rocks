import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DialogModule } from 'primeng/dialog';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { DashboardLinksComponent } from './components/dashboard-links/dashboard-links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    DefaultButtonComponent,
    DashboardLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
