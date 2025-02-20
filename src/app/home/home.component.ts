import { Component } from '@angular/core';
import { CountCitiesService } from '../services/count-cities.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  icons: string[] = ['fas fa-map', 'fas fa-city', 'fas fa-torii-gate', 'fas fa-hotel'];
  countDatails: any;

  constructor(private cityData: CountCitiesService) {
    this.getCityDetails();
  }

  getCityDetails() {
    this.cityData.cities().subscribe((response) => {
      this.countDatails = response;
      console.log(this.countDatails);
    });
  }
}
