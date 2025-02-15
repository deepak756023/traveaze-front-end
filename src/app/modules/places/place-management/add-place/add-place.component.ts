import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'add-place',
  standalone: false,

  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.scss'
})
export class AddPlaceComponent {


  private url = "http://localhost:8080/add-place";
  private urlForAllCity = "http://localhost:8080/cities_name";
  private urlForCity = "http://localhost:8080/city";

  states: string[] = ['Odisha', 'Bihar', 'Jharkhand', 'WestBengal', 'AndraPradesh', 'Gujurat', 'Rajasthan'];

  cities: any;
  selectedState: string = '';
  selectedCity: string = '';
  cityName: string = '';




  constructor(private http: HttpClient) { }



  onStateClick(state: string): void {

    console.log(state);
    this.http.get(`${this.urlForAllCity}?state=${state}`).subscribe(response => this.cities = response);
    // console.log(this.cities);
  }


  onCityClick(city: string): void {
    this.cityName = city;
    console.log(this.cityName);
    // this.http.get(`${this.urlForCity}?name=${city}`).subscribe(response => this.cityDetails = response);
    // console.log(this.cityDetails);
  }



  async createPlace(form: NgForm) {
    let formData = form.value;
    const cityData = await firstValueFrom(this.http.get(`${this.urlForCity}?name=${this.cityName}`));

    const place = {
      name: formData.title,
      image: formData.image,
      location: formData.address,
      history: formData.message,
      city: cityData
    };
    
    console.log('Sending place data:', place); // Debugging
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    this.http.post(this.url, place, { headers }).subscribe({
      next: (response) => console.log('Place added successfully:', response),
      error: (error) => console.error('Error adding place:', error)
    });
    form.reset();
  }

}
