import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService extends HttpClientService{

  private endPoint: any;

  constructor(httpClient: HttpClient,router: Router) {
    super(httpClient,router)
    this.urlBase = environment.endpoint.api;
    this.endPoint = environment.endpoint.pokemon;
   }

   public getPokemonByID(id:any): Promise<any> {
     const url: string = this.endPoint.id;
     return this.get(url.replace('_id_',id));
   }

   public getPokemonByPage(limit:any, offset:any): Promise<any> {
     const url: string = this.endPoint.pagination;
     return this.get(url.replace('_limit_',limit).replace('_offset_',offset));
   }

/*    public getPokemonByName(name:any): Promise<any> {
     const url: string = this.endPoint.name;
     return this.get(url.replace('_name_',name));
   } */
}
