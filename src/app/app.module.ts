import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule }        from './app-routing.module';

import { MainComponent } from './app.main';
import { HeaderComponent } from './header/header.component';
import { ListingComponent } from './listing/listing.component';
import { FooterComponent } from './footer/footer.component';
import { FilterSelectionComponent } from './filter-selection/filter-selection.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ListingComponent,
    FooterComponent,
    FilterSelectionComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
