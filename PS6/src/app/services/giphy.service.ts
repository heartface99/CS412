import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  search(keyword:string): Observable<any> {
    return this.http.get(`http://localhost:3000/${keyword}`);
  }
}