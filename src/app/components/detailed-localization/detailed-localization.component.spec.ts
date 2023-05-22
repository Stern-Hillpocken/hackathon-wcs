import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedLocalizationComponent } from './detailed-localization.component';

describe('DetailedLocalizationComponent', () => {
  let component: DetailedLocalizationComponent;
  let fixture: ComponentFixture<DetailedLocalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedLocalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailedLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
