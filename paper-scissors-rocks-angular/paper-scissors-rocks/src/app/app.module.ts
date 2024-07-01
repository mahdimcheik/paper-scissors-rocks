import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DialogModule } from 'primeng/dialog';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { DashboardLinksComponent } from './components/dashboard-links/dashboard-links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { ConnectionComponent } from './pages/connection/connection.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    DefaultButtonComponent,
    DashboardLinksComponent,
    ButtonComponent,
    ConnectionComponent,
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
