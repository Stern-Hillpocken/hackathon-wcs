import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchInfo } from './models/search-info.model';
import { Localization } from './models/localization.model';

@Injectable({
  providedIn: 'root'
})
export class GeoapifyService {

  private allResultList: Localization[] = [];

  constructor(private http: HttpClient){}

  getResultList(searchInfo: SearchInfo){
    this.allResultList = [];
    return this.http.get<any>(
      'https://api.geoapify.com/v2/place-details?lat='
      +searchInfo.gps.latitude
      +'&lon='
      +searchInfo.gps.longitude
      +'&features=radius_'
      +searchInfo.distance
      +',radius_'
      +searchInfo.distance
      +'.'
      +searchInfo.category
      +'&apiKey=31797c208cc145f79a71ca47d57323ad'
      );
  }

  getLocalizationById(id: string){
    return this.http.get<any>(
      'https://api.geoapify.com/v2/place-details?id='+id+'&apiKey=31797c208cc145f79a71ca47d57323ad'
      );
  }

  getAllResultList(): Localization[]{
    return this.allResultList;
  }

  setResultList(search: SearchInfo): void{

  }

  addResult(loc: Localization){
    this.allResultList.push(loc);
  }

  isResultEmpty(): boolean{
    return this.allResultList.length === 0 ? true : false;
  }
}
