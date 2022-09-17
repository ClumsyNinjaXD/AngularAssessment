import { Injectable } from '@angular/core';
import { IArtist } from './data/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { }

  public getSearchResults(searchTerm: string): IArtist[] {
    return [];
  }
}
