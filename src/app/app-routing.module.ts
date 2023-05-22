import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailedLocalizationComponent } from './components/detailed-localization/detailed-localization.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'localization/:id', component: DetailedLocalizationComponent},
  {path: 'favorite', component: FavoriteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
