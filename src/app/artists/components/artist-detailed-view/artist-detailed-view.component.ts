import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
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
  public topTracks: ITrack[] | undefined;
  constructor(public activatedRoute: ActivatedRoute, private artistsService: ArtistsService, private router: Router) { }

  public ngOnInit(): void {
    this.artistId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getArtistDetails();
  }

  public async getArtistDetails(): Promise<void> {
    this.artist = this.artistsService.getArtistById(this.artistId);
    this.topTracks = await this.artistsService.getArtistsTopFiveTracks(this.artistId);
  }

  public async navigateToArtistSearch(): Promise<void> {
    await this.router.navigate(['artists']);
  }
}
