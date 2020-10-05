import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable()

export class ProductService {
  private _albumURL: string = '../assests/album.json';
  constructor(private http: HttpClient) { }

  getAlbum(id:number){
    return this.http.get<string>(this._albumURL, {responseType:'json'});
  }

}
