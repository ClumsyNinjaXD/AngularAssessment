import { Injectable } from '@angular/core';
import { IArtist } from './data/artist';
import { HttpClient } from '@angular/common/http';
import { IDeezerArrayResult } from './data/deezer-result';
import { ISearchResult } from './data/search-result';
import { ITrack } from './data/track';
import { IAlbum } from './data/album';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private artists: IArtist[] = [];

  constructor(private httpClient: HttpClient) { }

  public async getSearchResults(searchTerm: string): Promise<IArtist[]> {
    // call the api to get all relevant search results
    const result = await this.httpClient.get<IDeezerArrayResult>('/api/search/artist?q=' + searchTerm).toPromise();
    this.artists = result.data;
    return this.artists;
  }

  public getArtistById(artistId: string | null): IArtist | undefined {
    if (artistId != null) {
      const convertedId = parseInt(artistId, 10);
      return this.artists.find((artist: IArtist) => artist.id === convertedId);
    } else {
      return undefined;
    }
  }

  public async getArtistsTopFiveTracks(artistId: string | null): Promise<ITrack[]> {
    if (artistId != null) {
      const convertedId = parseInt(artistId, 10);
      const result = await this.httpClient.get<IDeezerArrayResult>('/api/artist/' + convertedId + '/top?limit=5').toPromise();
      return result.data;
    } else {
      return [];
    }
  }

  public async getArtistAlbums(artistId: string | null): Promise<IAlbum[]> {
    if (artistId != null) {
      const convertedId = parseInt(artistId, 10);
      const result = await this.httpClient.get<IDeezerArrayResult>('/api/artist/' + convertedId + '/albums').toPromise();
      return result.data;
    } else {
      return [];
    }
  }
}
