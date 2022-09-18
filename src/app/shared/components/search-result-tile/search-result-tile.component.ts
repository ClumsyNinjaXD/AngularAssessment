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

  public getFormattedFanNumber(numberOfFans: number | undefined): string {
    if (numberOfFans == null) {
      return '0';
    } else if (numberOfFans >= 1000000000) {
       return (numberOfFans / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (numberOfFans >= 1000000) {
       return (numberOfFans / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (numberOfFans >= 1000) {
       return (numberOfFans / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return numberOfFans.toString();
}

}
