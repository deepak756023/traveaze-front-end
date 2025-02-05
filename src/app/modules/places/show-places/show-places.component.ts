import { Component } from '@angular/core';
import { ViewPlacesService } from '../services/view-places.service';


@Component({
  selector: 'app-show-places',
  standalone: false,
  templateUrl: './show-places.component.html',
  styleUrl: './show-places.component.scss'
})

export class ShowPlacesComponent {

  item: any;
  cities: any;



  states: string[] = ['Odisha', 'Bihar', 'Jharkhand', 'WestBengal', 'AndraPradesh', 'Gujurat', 'Rajasthan'];

  constructor(private place: ViewPlacesService) { }

  onItemClick(item: string): void {
    this.place.citiesByState(item).subscribe((response) => {
      this.cities = response;
    });
  }


  public filterList(): void {

    const inputElement = document.getElementById("myInput") as HTMLInputElement;
    const filter: string = inputElement.value.toUpperCase();
    const ulElement = document.getElementById("myUL") as HTMLUListElement;
    const liElements = Array.from(ulElement.getElementsByTagName("li"));

    let visibleCount = 0; // Keep track of visible items

    for (let i = 0; i < liElements.length; i++) {
      const aElement = liElements[i].getElementsByTagName("a")[0];
      const txtValue: string = aElement.textContent || aElement.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1 && visibleCount < 5) {
        liElements[i].style.display = "block"; // Show matching items
        visibleCount++;
      } else {
        liElements[i].style.display = "none"; // Hide extra items
      }
    }

  }



}