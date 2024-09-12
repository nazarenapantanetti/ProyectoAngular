import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://api.giphy.com/v1/gifs" 

  private apiKey = "r2NyyVcXidJPKv098gxy5V5y7iItp21J"

  searchGifs(query: string): Observable<any>{
    const url = `${this.baseUrl}/search?api_key=${this.apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    return this.http.get(url);
  }


}
