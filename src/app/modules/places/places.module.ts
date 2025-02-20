import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPlacesComponent } from './show-places/show-places.component';
import { LogoListComponent } from './logo-list/logo-list.component';
import { LogoDetailsComponent } from './logo-details/logo-details.component';
import { PlaceManagementModule } from './place-management/place-management.module';
import { AllPlacesComponent } from './place-management/all-places/all-places.component';



@NgModule({
  declarations: [
    ShowPlacesComponent,
    LogoListComponent,
    LogoListComponent,
    LogoDetailsComponent,
  ],
  imports: [
    CommonModule,
    PlaceManagementModule
  ],
  exports: [
    ShowPlacesComponent,
    AllPlacesComponent
  ]
})
export class PlacesModule { }
