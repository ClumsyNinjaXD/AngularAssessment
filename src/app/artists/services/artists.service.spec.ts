import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ArtistsService } from './artists.service';
import { IAlbum } from './data/album';
import { IArtist } from './data/artist';
import { IDeezerArrayResult } from './data/deezer-result';
import { ITrack } from './data/track';

describe('ArtistsService', () => {
  let service: ArtistsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule, HttpClient, HttpHandler],
    });
    service = TestBed.inject(ArtistsService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getSearchResults', () => {
    it('should call the api and return the results in the IArtist object type', async () => {
      const httpGetSpy: jasmine.Spy<any> = spyOn(httpClient, 'get').and.returnValue(of({data: [{id: 123}]}));

      const result = await service.getSearchResults('test');

      expect(httpGetSpy).toHaveBeenCalled();
      expect(result).toEqual([{id: 123} as IArtist]);
    });
  });

  describe('getArtistById', () => {
    it('should call the api and return the results in the IArtist object type',  () => {
      // disabled because it is a public function and the only way it can be tested
      // tslint:disable-next-line: no-string-literal
      service['artists'] = [{id: 123, name: 'wrong'} as IArtist, {id: 321, name: 'right'} as IArtist]

      const result = service.getArtistById('321');

      expect(result?.name).toEqual('right');
    });
  });

  describe('getArtistsTopFiveTracks', () => {
    it('should call the api and return the results in the ITrack object type', async () => {
      const httpGetSpy: jasmine.Spy<any> = spyOn(httpClient, 'get').and.returnValue(of({data: [{id: 123}]}));

      const result = await service.getArtistsTopFiveTracks('test');

      expect(httpGetSpy).toHaveBeenCalled();
      expect(result).toEqual([{id: 123} as ITrack]);
    });
  });

  describe('getArtistAlbums', () => {
    it('should call the api and return the results in the IAlbum object type', async () => {
      const httpGetSpy: jasmine.Spy<any> = spyOn(httpClient, 'get').and.returnValue(of({data: [{id: 123}]}));

      const result = await service.getArtistAlbums('test');

      expect(httpGetSpy).toHaveBeenCalled();
      expect(result).toEqual([{ id: 123 } as unknown as IAlbum]);
    });
  });

});
