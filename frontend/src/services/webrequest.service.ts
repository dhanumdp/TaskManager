import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  readonly root_URL;

  constructor(private http :HttpClient ) {
    this.root_URL = "http://localhost:3000"
   }

  get(uri:string){
     return this.http.get(`${this.root_URL}/${uri}`)
  }

  post(uri :string, payload : object){
    return this.http.post(`${this.root_URL}/${uri}`, payload)
  }

  patch(uri :string, payload : object){
    return this.http.patch(`${this.root_URL}/${uri}`, payload)
  }


  delete(uri : string){
    return this.http.delete(`${this.root_URL}/${uri}`);
  }
}
