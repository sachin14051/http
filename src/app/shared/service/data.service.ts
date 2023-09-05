import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { postArray } from '../const/const';
import { Idata } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Url = "https://app.legaciestechno.com/api/get_data.php?type=openblocks";
  constructor(private _http : HttpClient) { }

  getAlldata():Observable<any>{
    return this._http.get(this.Url)
  }

}
