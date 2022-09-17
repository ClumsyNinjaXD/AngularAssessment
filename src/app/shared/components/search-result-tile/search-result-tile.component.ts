import { Component, OnInit, Input } from '@angular/core';
import { IArtist } from 'src/app/artists/services/data/artist';

@Component({
  selector: 'app-search-result-tile',
  templateUrl: './search-result-tile.component.html',
  styleUrls: ['./search-result-tile.component.scss']
})
export class SearchResultTileComponent implements OnInit {
  @Input() public artist: IArtist | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
