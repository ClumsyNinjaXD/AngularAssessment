import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailedViewComponent } from './artist-detailed-view.component';

describe('ArtistDetailedViewComponent', () => {
  let component: ArtistDetailedViewComponent;
  let fixture: ComponentFixture<ArtistDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDetailedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
