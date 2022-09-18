import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';

import { ArtistSearchComponent } from './artist-search.component';

describe('ArtistSearchComponent', () => {
  let component: ArtistSearchComponent;
  let fixture: ComponentFixture<ArtistSearchComponent>;
  let artistsService: ArtistsService;
  const fakeRouter = {
    navigate: jasmine.createSpy('navigate')
  } as unknown as Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSearchComponent ],
      providers: [{provide: Router, useValue: fakeRouter}, HttpClientModule,
        HttpClient, HttpHandler, ArtistsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSearchComponent);
    component = fixture.componentInstance;
    artistsService = TestBed.inject(ArtistsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('searchTermChanged', () => {
    it('should call the services and retieve the artist details', async () => {
        spyOn<any>(artistsService, 'getSearchResults').and.returnValue(Promise.resolve([{id: 1}]));

        await component.searchTermChanged('new');

        expect(artistsService.getSearchResults).toHaveBeenCalled();
    });
  });
});
