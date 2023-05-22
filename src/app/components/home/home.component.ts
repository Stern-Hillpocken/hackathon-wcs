import { Component } from '@angular/core';
import { GeoapifyService } from 'src/app/geoapify.service';
import { Gps } from 'src/app/models/gps.model';
import { Localization } from 'src/app/models/localization.model';
import { SearchInfo } from 'src/app/models/search-info.model';
import { PexelsService } from 'src/app/pexels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  localizationList: Localization[] = [];

  searchInfoScreen: string = 'start';

  numberOfResults = 0;

  constructor(private geoapify: GeoapifyService, private pexels: PexelsService){}

  ngOnInit(): void{
    this.localizationList = this.geoapify.getAllResultList();
    this.searchInfoScreen = this.geoapify.isResultEmpty() ? 'start' : 'number-of-results';
    this.numberOfResults = this.geoapify.getAllResultList().length;
  }

  onGpsReceive(searchInfo: SearchInfo){
    this.searchInfoScreen = 'loading';
    this.localizationList = [];
    this.geoapify.getResultList(searchInfo).subscribe((res) => {
      //console.log(res);
      this.searchInfoScreen = 'number-of-results';
      for(let i = 0; i < res.features.length; i++){
        //skip the first one because it's polygon, not point and need a "name"
        if(res.features[i].geometry.type === "Point" && res.features[i].properties.name){
          const currentLoc = res.features[i].properties;
          /*this.localizationList.push(new Localization(
            currentLoc.name,
            currentLoc.country,
            currentLoc.city,
            currentLoc.postcode,
            currentLoc.street,
            currentLoc.lat,
            currentLoc.lon,
            this.distanceInMeters(searchInfo.gps.latitude, searchInfo.gps.longitude, currentLoc.lat, currentLoc.lon),
            this.directionInDeg(searchInfo.gps.latitude, searchInfo.gps.longitude, currentLoc.lat, currentLoc.lon),
            currentLoc.place_id
          ));*/
          this.geoapify.addResult(new Localization(
            currentLoc.name,
            currentLoc.country,
            currentLoc.city,
            currentLoc.postcode,
            currentLoc.street,
            currentLoc.lat,
            currentLoc.lon,
            this.distanceInMeters(searchInfo.gps.latitude, searchInfo.gps.longitude, currentLoc.lat, currentLoc.lon),
            this.directionInDeg(searchInfo.gps.latitude, searchInfo.gps.longitude, currentLoc.lat, currentLoc.lon),
            currentLoc.place_id
          ));
        }
      }
      this.localizationList = this.geoapify.getAllResultList();
      this.numberOfResults = this.localizationList.length;
      this.localizationList.sort(function (a, b) {
        return a.distance - b.distance;
      });
    });
  }

  degreesToRadians(degrees: number) {
    return degrees * Math.PI / 180;
  } 
  distanceInMeters(lat1:number, lon1:number, lat2:number, lon2:number): number {
    const earthRadiusKm = 6371;
    const dLat = this.degreesToRadians(lat2-lat1);
    const dLon = this.degreesToRadians(lon2-lon1);
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return Math.floor(earthRadiusKm * c * 1000);//km to m
  }

  directionInDeg(lat1:number, lon1:number, lat2:number, lon2:number): number{
    const a = lat1-lat2;
    const c = lon1-lon2;
    const b = Math.sqrt(a*a+c*c);
    const rad =  Math.acos((b*b+c*c-a*a)/(2*b*c));
    let adding = 0;
    if(lat1>lat2){adding += 90}
    if(lon1<lon2){adding -= 45}
    return Math.floor(rad * 180 / 3.14159)+adding;//180° and pi value
  }
}
