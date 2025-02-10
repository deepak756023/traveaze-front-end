import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPlacesComponent } from './show-places/show-places.component';
import { LogoListComponent } from './logo-list/logo-list.component';
import { LogoDetailsComponent } from './logo-details/logo-details.component';



@NgModule({
  declarations: [
    ShowPlacesComponent,
    LogoListComponent,
    LogoListComponent,
    LogoDetailsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowPlacesComponent
  ]
})
export class PlacesModule { }
