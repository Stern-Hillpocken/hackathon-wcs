import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Localization } from 'src/app/models/localization.model';
import { PexelsService } from 'src/app/pexels.service';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent {

  @Input() localization!: Localization;

  picture: string = "";

  constructor(private pexels: PexelsService, private router: Router){}

  ngOnInit(): void{
    this.pexels.getPicture(this.localization.name).subscribe(e => this.picture = e.photos[0].src.large);
  }
}
