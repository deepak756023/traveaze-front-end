import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPlacesComponent } from './show-places/show-places.component';
import { LogoListComponent } from './logo-list/logo-list.component';



@NgModule({
  declarations: [
    ShowPlacesComponent,
    LogoListComponent,
    LogoListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowPlacesComponent
  ]
})
export class PlacesModule { }
