import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './app.main';
import { HeaderComponent } from './header/header.component';
import { ListingComponent } from './listing/listing.component';
import { FooterComponent } from './footer/footer.component';
import { FilterSelectionComponent } from './filter-selection/filter-selection.component';
import { AppLandingComponent } from './app-landing/app-landing.component';
import { AppListNoticesComponent } from './app-list-notices/app-list-notices.component';





@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ListingComponent,
    FooterComponent,
    FilterSelectionComponent,
    AppLandingComponent,
    AppListNoticesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
