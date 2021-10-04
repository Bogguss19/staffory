 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule, } from '@angular/material/toolbar';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { InfographicComponent } from './infographic/infographic.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import {MatCardModule} from "@angular/material/card";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import { ClientsComponent } from './clients/clients.component';
import { OurmissionComponent } from './ourmission/ourmission.component';
import { JobscardComponent } from './jobscard/jobscard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MapComponent,
    ContactComponent,
    InfographicComponent,
    ServiceCardComponent,
    ClientsComponent,
    OurmissionComponent,
    JobscardComponent,
    

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        FlexLayoutModule,
        MatGridListModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
