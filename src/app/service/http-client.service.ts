import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  protected urlBase: string;

  constructor(protected httpClient: HttpClient, protected router: Router) {
    this.urlBase = '';
  }

  private getResponse(http: any) {
    return new Promise((resolve: any, reject: any) => {
      http.subscribe(
        (res: any) => {
          resolve(res);
        },
        (error: any) => {
          switch (error.status) {
            case 400:
              reject('Error, pokemon not found');
              break;
            case 401:
              reject('Error, pokemon not found');
              break;
            case 404:
              reject('Error, pokemon not found');
              break;
            case 500:
              reject('Error, pokemon not found');
              break;
          }
        }
      );
    });
  }

  protected get(url:string): Promise<any>{
    return this.getResponse(this.httpClient.get(`${this.urlBase}${url}`));
  }
}
