import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/favorites.service';
import { GeoapifyService } from 'src/app/geoapify.service';
import { Gps } from 'src/app/models/gps.model';
import { LocalizationDetailed } from 'src/app/models/localization-detailed.model';

@Component({
  selector: 'app-detailed-localization',
  templateUrl: './detailed-localization.component.html',
  styleUrls: ['./detailed-localization.component.scss']
})
export class DetailedLocalizationComponent {

  localization!: LocalizationDetailed;// = new LocalizationDetailed("","","","","",false,"",new Gps(0,0));

  popupDisplay: boolean = false;

  isFavorite: boolean = false;

  constructor(private geoapify: GeoapifyService, private router: Router, private favoriteService: FavoritesService){}

  ngOnInit(){
    const idUrl = this.router.url.substring('/localization/'.length);
    this.geoapify.getLocalizationById(idUrl).subscribe((obj) => {
      const loca = obj.features[0].properties;
      console.log(loca);
      this.localization = new LocalizationDetailed(
        loca.name ? loca.name : 'Pas de nom...',
        loca.website ? loca.website : 'Pas de site web.',
        loca.opening_hours ? loca.opening_hours : 'Pas d\'heures d\'ouverture.',
        loca.contact ? loca.contact.phone : 'Pas de téléphone.',
        loca.contact ? loca.contact.email : 'Pas d\'email.',
        loca.facilities ? loca.facilities.wheelchair : false,
        loca.address_line2 ? loca.address_line2 : 'Pas d\'adresse postale.',
        new Gps(loca.lat, loca.lon)
      );
    });
    this.isFavorite = this.favoriteService.isInFavorite(idUrl);
  }

  onClickToggleFavorite(){
    const idUrl: string = this.router.url.substring('/localization/'.length);

    this.isFavorite = !this.isFavorite;

    if(this.isFavorite){
      this.favoriteService.addFavorite(idUrl, this.localization.name);
    }else{
      this.favoriteService.removeFavoriteById(idUrl);
    }    

    this.popupDisplay = true;
    setTimeout(() => {
      this.popupDisplay = false;
    }, 2000);
  }
}
