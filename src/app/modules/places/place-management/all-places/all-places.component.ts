import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewPlacesService } from '../../services/view-places.service';

@Component({
  selector: 'app-all-places',
  standalone: false,
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.scss']
})
export class AllPlacesComponent {

  
  url = "http://localhost:8080/famous_places";
  deleteURL = "http://localhost:8080/place";
  places: any[] = [];  // Initialize as an empty array
  sortedPlaces: any[] = [];  
  sortOrder: string = '';
  ascending: boolean = true;

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

  

  deleteUser(name: String) {
    //throw new Error('Method not implemented.');
    console.log(name);
    this.http.delete(`${this.deleteURL}?name=${name}`).subscribe(
      response => {
        console.log("User deleted successfully", response);
        this.places = this.places.filter(place => place.name !== name); // Update UI
        this.sortedPlaces = [...this.places];
        
      },
      error => {
        console.error("Error deleting user:", error);
      }
    );;
    }
}
