import { Component } from '@angular/core';
import { ViewPlacesService } from '../services/view-places.service';


@Component({
  selector: 'app-logo-list',
  standalone: false,
  templateUrl: './logo-list.component.html',
  styleUrl: './logo-list.component.scss'
})
export class LogoListComponent {
  
  details: any;


  constructor(private place: ViewPlacesService) {

    place.places().subscribe((response) => {
      console.log("data", response);
      this.details = response;
    });

  }

}
