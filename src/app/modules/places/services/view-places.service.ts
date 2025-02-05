import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewPlacesService {
  url = "http://localhost:8080/famous_places";

  constructor(private http:HttpClient) { }
  
  places(){
    return this.http.get(this.url);
  }
}
