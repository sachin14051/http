import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyServiceService {

 Url ='https://jsonplaceholder.typicode.com/posts'

  constructor(private _http : HttpClient) { }
  getAlldata():Observable<any>{
    return this._http.get(this.Url)
  }
}
