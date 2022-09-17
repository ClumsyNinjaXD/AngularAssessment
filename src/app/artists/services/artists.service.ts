import { Injectable } from '@angular/core';
import { IArtist } from './data/artist';
import { HttpClient } from '@angular/common/http';
import { IDeezerArrayResult } from './data/deezer-result';
import { ISearchResult } from './data/search-result';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  private fullSearchResults: ISearchResult[] = [];

  constructor(private httpClient: HttpClient) { }

  public async getSearchResults(searchTerm: string): Promise<IArtist[]> {
    // call the api to get all relevant search results
    const result = await this.httpClient.get<IDeezerArrayResult>('/api/search?q=' + searchTerm).toPromise();
    this.fullSearchResults = result.data;
    return await this.compileArtistsFromSearch(this.fullSearchResults);
  }

 public async compileArtistsFromSearch(results: ISearchResult[]): Promise<IArtist[]> {
    const artists: IArtist[] = [];
      // extract all the artist id's and get the detailed artist info
    for (const result of results) {
        const artistDetails = await this.httpClient.get<IArtist>('/api/artist/' + result.artist.id).toPromise();
        artists.push(artistDetails);
    }

    return artists;
  }
}
