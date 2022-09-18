import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { IArtist } from '../../services/data/artist';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent {
  public searchResults: IArtist[] = [];
  public isSearching = false;

  constructor(private artistsService: ArtistsService, private router:Router) { }

  public async searchTermChanged(newValue: string): Promise<void> {
    this.isSearching = true;
    this.searchResults = await this.artistsService.getSearchResults(newValue);
    this.isSearching = false;
  }

  public async artistSelected(artistId: number): Promise<void> {
    await this.router.navigate(['/artists/details', artistId]);
  }

}
