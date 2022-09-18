import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { IAlbum } from '../../services/data/album';
import { IArtist } from '../../services/data/artist';
import { ITrack } from '../../services/data/track';

@Component({
  selector: 'app-artist-detailed-view',
  templateUrl: './artist-detailed-view.component.html',
  styleUrls: ['./artist-detailed-view.component.scss']
})
export class ArtistDetailedViewComponent implements OnInit {
  private artistId: string | null = null;
  public artist: IArtist | undefined;
  public topTracks: ITrack[] = [];
  public albums: IAlbum[] = [];
  constructor(public activatedRoute: ActivatedRoute, private artistsService: ArtistsService, private router: Router) { }

  public ngOnInit(): void {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getArtistDetails();
  }

  public async getArtistDetails(): Promise<void> {
    this.artist = this.artistsService.getArtistById(this.artistId);
    this.topTracks = await this.artistsService.getArtistsTopFiveTracks(this.artistId);
    this.albums = await this.artistsService.getArtistAlbums(this.artistId);
  }

  public async navigateToArtistSearch(): Promise<void> {
    await this.router.navigate(['artists']);
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
