import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';

import { ArtistDetailedViewComponent } from './artist-detailed-view.component';

describe('ArtistDetailedViewComponent', () => {
  let component: ArtistDetailedViewComponent;
  let fixture: ComponentFixture<ArtistDetailedViewComponent>;
  let artistsService: ArtistsService;
  const fakeActivatedRoute = {
    snapshot: { paramMap: { get: jasmine.createSpy('get') } }
  } as unknown as ActivatedRoute;
  const fakeRouter = {
    navigate: jasmine.createSpy('navigate')
  } as unknown as Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistDetailedViewComponent ],
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}, {provide: Router, useValue: fakeRouter}, HttpClientModule,
        HttpClient, HttpHandler, ArtistsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailedViewComponent);
    component = fixture.componentInstance;
    artistsService = TestBed.inject(ArtistsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call function to set up the artist details and set the artistId',  () => {
        spyOn(component, 'getArtistDetails');

        component.ngOnInit();

        expect(component.getArtistDetails).toHaveBeenCalled();
    });
  });

  describe('getArtistDetails', () => {
    it('should call the services and retieve the artist details', async () => {
        spyOn<any>(artistsService, 'getArtistById').and.returnValue(Promise.resolve([{id: 1}]));
        spyOn<any>(artistsService, 'getArtistsTopFiveTracks').and.returnValue(Promise.resolve([{id: 1}]));
        spyOn<any>(artistsService, 'getArtistAlbums').and.returnValue(Promise.resolve([{id: 1}]));

        await component.getArtistDetails();

        expect(artistsService.getArtistById).toHaveBeenCalled();
        expect(artistsService.getArtistsTopFiveTracks).toHaveBeenCalled();
        expect(artistsService.getArtistAlbums).toHaveBeenCalled();
        expect(component.albums).toBeDefined();
        expect(component.topTracks).toBeDefined();
        expect(component.artist).toBeDefined();
    });
  });

  describe('getFormattedFanNumber', () => {
    it('should format the number unit type', () => {
      const result = component.getFormattedFanNumber(1000);

      expect(result).toEqual('1K');
    });

    it('should format the number unit type', () => {
      const result = component.getFormattedFanNumber(1000000);

      expect(result).toEqual('1M');
    });
  });
});
