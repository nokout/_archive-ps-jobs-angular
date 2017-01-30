import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ListingComponent } from './listing/listing.component';
import { FilterSelectionComponent } from './filter-selection/filter-selection.component';


const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'notices',
    component: ListingComponent,
    data: { preload: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
