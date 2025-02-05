import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewPlacesService {
  url = "http://localhost:8080/famous_places";
  urlcity = "http://localhost:8080/cities_name";

  constructor(private http:HttpClient) { }
  
  places(){
    return this.http.get(this.url);
  }
  
  citiesByState(state: string) {
    return this.http.get(`${this.urlcity}?state=${state}`);
  }

  
}
