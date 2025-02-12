import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPlacesComponent } from './all-places/all-places.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { UpdatePlaceComponent } from './update-place/update-place.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllPlacesComponent,
    AddPlaceComponent,
    UpdatePlaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      AddPlaceComponent
    ]
})
export class PlaceManagementModule { }
