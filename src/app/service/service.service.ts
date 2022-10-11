import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api_key = '5566800a0bf040cca49d52643e6fccd0';

  constructor(private http: HttpClient) { }
  initSources() {
    return this.http.get("" + this.api_key);
  }
  getArticlesById(source: string) {
    return this.http.get("" + source + '&apiKey=' + this.api_key);
  }
  initArticles() {
    return this.http.get("" + this.api_key);

  }
}

