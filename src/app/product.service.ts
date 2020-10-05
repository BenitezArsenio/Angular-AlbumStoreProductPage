import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable()

export class ProductService {
  private _albumURL: string = '../assets/album.json';
  constructor(private _http: HttpClient) { }

  getAlbum(id:number){
    return this._http.get<string>(this._albumURL, {responseType:'json'});
  }

}
