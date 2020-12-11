import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {giphyConfig} from '../config/giphyConfig';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  search(keyword:string): Observable<any> {
    return this.http.get(`${giphyConfig.baseURL}${giphyConfig.apiKey}&q=${keyword}`)
  }
}