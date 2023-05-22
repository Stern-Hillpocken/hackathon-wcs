import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailedLocalizationComponent } from './components/detailed-localization/detailed-localization.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { BackToHomeComponent } from './components/back-to-home/back-to-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ResultCardComponent,
    DetailedLocalizationComponent,
    FavoriteComponent,
    BackToHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
