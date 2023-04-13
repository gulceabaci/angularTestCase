import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://smarty.kerzz.com:4004/api/mock/getFeed';
  private apiKey = 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2';

  constructor(private http: HttpClient) { }

  postFeedData(): Observable<any> {    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'apiKey': this.apiKey
      })
    };
    const data = {
      skip: 0,
      limit: 150,
      latitude: 38.4520845,
      longitude: 27.0911645 
    };
    return this.http.post<any>(this.apiUrl, data, httpOptions);
    
  }
}
