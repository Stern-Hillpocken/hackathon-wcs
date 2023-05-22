import { Component, EventEmitter, Output } from '@angular/core';
import { Gps } from 'src/app/models/gps.model';
import { SearchInfo } from 'src/app/models/search-info.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() emitGps: EventEmitter<SearchInfo> = new EventEmitter<SearchInfo>;

  gps: Gps = {
    "latitude": 44.8376059,
    "longitude": -0.5766127
  };

  distance: string = "500";

  category: string  = "cafe";

  onSubmit(): void{
    this.emitGps.emit(new SearchInfo(this.gps, this.distance, this.category));
  }

  onGpsClick(): void{
    this.gps.latitude = 44.8691295;
    this.gps.longitude = -0.5654637;
  }
}
