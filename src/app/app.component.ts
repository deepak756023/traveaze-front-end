import { Component } from '@angular/core';
import { CountCitiesService } from './services/count-cities.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent {

  title = 'traveaze_portal';
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
