import { Injectable } from '@angular/core';
import { IArtist } from './data/artist';
import { HttpClient } from '@angular/common/http';
import { IDeezerArrayResult } from './data/deezer-result';
import { ISearchResult } from './data/search-result';
import { ITrack } from './data/track';

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

//  public async compileArtistsFromSearch(results: ISearchResult[]): Promise<IArtist[]> {
//     this.artists = [];
//     for (const result of results) {
//         // extract all the unique artist id's and get the detailed artist info
//           if (!this.artists.some((artist) => artist.id === result.artist.id)) {
//             const artistDetails = await this.httpClient.get<IArtist>('/api/artist/' + result.artist.id).toPromise();
//             this.artists.push(artistDetails);
//           }
//       }

//     return this.artists;
//   }

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
}
