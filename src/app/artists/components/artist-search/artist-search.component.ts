import { Component, OnInit } from '@angular/core';
import { ArtistsService } from '../../services/artists.service';
import { IArtist } from '../../services/data/artist';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  public searchResults: IArtist[] = [];

  constructor(private artistsService: ArtistsService) { }

  public ngOnInit(): void {
  }

  public searchTermChanged(newValue: string): void {
    this.searchResults = this.artistsService.getSearchResults(newValue);
  }

}
