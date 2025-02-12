import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-place',
  standalone: false,
  
  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.scss'
})
export class AddPlaceComponent {

  states: string[] = ['Odisha', 'Bihar', 'Jharkhand', 'WestBengal', 'AndraPradesh', 'Gujurat', 'Rajasthan'];

  cities: any;

  
  

  private url = "http://localhost:8080/add-place";
  private urlForCity = "http://localhost:8080/cities_name";

  constructor(private http: HttpClient) { }

  onClick(state: string): void {
    console.log(state);
     this.http.get(`${this.urlForCity}?state=${state}`).subscribe(response => this.cities = response);
  };

  onItemClick(city : String){
    
  }

  createPlace(form: NgForm) {
    let formData = form.value;

    const place = {
      name: formData.title,
      image: formData.image,
      location: formData.address,
      history: formData.message, // Map message to history
      city: {
        cityId: 7510,
        name: "Bhubaneswar",
        state: "Odisha",
        dateAdded: "2025-01-24T15:31:38.000+00:00",
        map: null
      }
    };

    console.log('Sending place data:', place); // Debugging

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(this.url, place, { headers }).subscribe({
      next: (response) => console.log('Place added successfully:', response),
      error: (error) => console.error('Error adding place:', error)
    });
  }
  
}
