import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/favorites.service';
import { Favorite } from 'src/app/models/favorite.modele';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {

  favoriteList: Favorite[] = [];

  constructor(private favoriteService: FavoritesService){}

  ngOnInit(){
    this.favoriteList = this.favoriteService.getFavoriteList();
  }

  onClickTrash(id: string): void{
    this.favoriteService.removeFavoriteById(id);
  }
}
