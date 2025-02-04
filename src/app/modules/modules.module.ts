import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { PlacesModule } from './places/places.module';
import { HotelsModule } from './hotels/hotels.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    PlacesModule,
    HotelsModule
  ]
})
export class ModulesModule { }
