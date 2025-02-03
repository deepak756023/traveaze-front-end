import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountCitiesService {
  url = "http://localhost:8080/count-city";
  constructor(private http:HttpClient) { }
  cities(){
    return this.http.get(this.url);
  }
}
