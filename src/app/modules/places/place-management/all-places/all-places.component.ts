import { ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewPlacesService } from '../../services/view-places.service';
import { NgForm } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-all-places',
  standalone: false,
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.scss']
})
export class AllPlacesComponent {
  setEditPlace(_t18: any) {
    throw new Error('Method not implemented.');
  }



  url = "http://localhost:8080/famous_places";
  deleteURL = "http://localhost:8080/place";
  fetchURL = "http://localhost:8080/place";
  updateURL = "http://localhost:8080/place";
  cityURL = "http://localhost:8080/city";
  postURL = "http://localhost:8080/add-place";

  places: any[] = [];  // Initialize as an empty array
  sortedPlaces: any[] = [];
  sortOrder: string = '';
  ascending: boolean = true;
  famousPlace: any = {};
  cityName: String = '';
  success: String = '';

  constructor(private place: ViewPlacesService, private http: HttpClient) {
    this.fetchPlaces();
  }


  fetchPlaces() {
    this.http.get<any[]>(this.url).subscribe((response) => {
      this.places = response;
      this.sortedPlaces = [...this.places];  // Ensure sortedPlaces is updated
    });
  }





  sortTable(column: string) {
    if (!this.places.length) return; // Ensure data exists before sorting

    if (!(column in this.places[0])) {
      console.error(`Invalid column: ${column}`);
      return;
    }

    this.ascending = this.sortOrder === column ? !this.ascending : true;
    this.sortOrder = column;

    this.sortedPlaces = [...this.places].sort((a, b) => {
      const valA = a[column];
      const valB = b[column];

      if (typeof valA === 'string' && typeof valB === 'string') {
        return this.ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
      } else if (typeof valA === 'number' && typeof valB === 'number') {
        return this.ascending ? valA - valB : valB - valA;
      }
      return 0;
    });
  }



  fetchPlace(name: String) {

    this.http.get(`${this.fetchURL}?name=${name}`).subscribe(
      response => {

        // this.famousPlace = { ...response };
        this.famousPlace = response;
        this.cityName = this.famousPlace.city.name;


        console.log(this.cityName);

      },
      error => {
        console.error("Error deleting user:", error);
      }
    );

  }

  // updateURL = "http://localhost:8080/place/${famousPlace.placeId}";



  async updatePlace(placeId: number, form: NgForm) {

    let formData = form.value;

    console.log(placeId);
    console.log(this.cityName);
    const cityData = await firstValueFrom(this.http.get(`${this.cityURL}?name=${this.cityName}`));
    console.log(cityData);

    const place = {
      name: formData.title,
      image: formData.image,
      location: formData.location,
      history: formData.message,
      city: cityData
    };
    console.log(place.name);


    console.log('Sending place data:', place);


    this.http.put(`${this.updateURL}/${placeId}`, place).subscribe(response => {
      console.log(response);
     
      
    }
    );
    form.reset();
    this.success = "Successfully Updated";
    console.log(this.success);

  }



  deleteUser(name: String) {
    //throw new Error('Method not implemented.');
    console.log(name);
    this.http.delete(`${this.deleteURL}?name=${name}`).subscribe(
      response => {
        console.log("Place deleted successfully", response);
        this.places = this.places.filter(place => place.name !== name); // Update UI
        this.sortedPlaces = [...this.places];

      },
      error => {
        console.error("Error deleting place:", error);
      }
    );
  }


}
