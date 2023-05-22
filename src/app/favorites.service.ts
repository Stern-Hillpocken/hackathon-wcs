import { Injectable } from '@angular/core';
import { Favorite } from './models/favorite.modele';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favoriteList: Favorite[] = [];

  constructor() { }

  addFavorite(id: string, name: string): void{
    this.favoriteList.push(new Favorite(id, name));
  }

  getFavoriteList(): Favorite[]{
    return this.favoriteList;
  }

  removeFavoriteById(id: string): void{
    const index = this.favoriteList.map(e => e.id).indexOf(id);
    this.favoriteList.splice(index, 1);
  }

  isInFavorite(id: string): boolean{
    const index = this.favoriteList.map(e => e.id).indexOf(id);
    if(index === -1){
      return false;
    }
    return true;
  }
}
